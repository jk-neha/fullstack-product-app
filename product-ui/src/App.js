import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProductTable from "./components/ProductTable";
import ProductModal from "./components/ProductModal";
import Toast from "./components/Toast";
import SearchBar from "./components/SearchBar";
import StatsBar from "./components/StatsBar";
import "./styles/global.css";
import "./styles/App.css";


const API = "https://fastapi-product-backend.onrender.com"


export default function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({ open: false, mode: "add", product: null });
  const [toast, setToast] = useState(null);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "id", dir: "asc" });
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API}/products`);
      setProducts(res.data);
      setFiltered(res.data);
    } catch (err) {
      setError("Failed to connect to the server. Make sure your backend is running.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  useEffect(() => {
    let result = [...products];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        String(p.id).includes(q)
      );
    }
    result.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (typeof aVal === "string") return sortConfig.dir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      return sortConfig.dir === "asc" ? aVal - bVal : bVal - aVal;
    });
    setFiltered(result);
  }, [search, products, sortConfig]);

  const handleAdd = () => setModal({ open: true, mode: "add", product: null });
  const handleEdit = (product) => setModal({ open: true, mode: "edit", product });
  const handleCloseModal = () => setModal({ open: false, mode: "add", product: null });

  const handleSave = async (data) => {
    try {
      if (modal.mode === "add") {
        await axios.post(`${API}/products`, data);
        showToast("Product added successfully");
      } else {
        await axios.put(`${API}/products/${data.id}`, data);
        showToast("Product updated successfully");
      }
      fetchProducts();
      handleCloseModal();
    } catch (err) {
      showToast("Operation failed. Please try again.", "error");
    }
  };

  const handleDeleteConfirm = (product) => setDeleteConfirm(product);

  const handleDelete = async () => {
    if (!deleteConfirm) return;
    try {
      await axios.delete(`${API}/products/${deleteConfirm.id}`);
      showToast(`"${deleteConfirm.name}" deleted`);
      setDeleteConfirm(null);
      fetchProducts();
    } catch (err) {
      showToast("Delete failed. Please try again.", "error");
    }
  };

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      dir: prev.key === key && prev.dir === "asc" ? "desc" : "asc"
    }));
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-icon">◈</span>
            <div>
              <h1 className="brand-name">STOCKVAULT</h1>
              <p className="brand-tagline">Product Inventory System</p>
            </div>
          </div>
          <button className="btn-add" onClick={handleAdd}>
            <span className="btn-icon">+</span>
            New Product
          </button>
        </div>
      </header>

      <main className="app-main">
        <StatsBar products={products} />

        <div className="toolbar">
          <SearchBar value={search} onChange={setSearch} resultCount={filtered.length} total={products.length} />
        </div>

        {error && (
          <div className="error-state">
            <span className="error-icon">⚠</span>
            <p>{error}</p>
            <button className="btn-retry" onClick={fetchProducts}>Retry</button>
          </div>
        )}

        {!error && (
          <ProductTable
            products={filtered}
            loading={loading}
            sortConfig={sortConfig}
            onSort={handleSort}
            onEdit={handleEdit}
            onDelete={handleDeleteConfirm}
          />
        )}
      </main>

      {modal.open && (
        <ProductModal
          mode={modal.mode}
          product={modal.product}
          onSave={handleSave}
          onClose={handleCloseModal}
        />
      )}

      {deleteConfirm && (
        <div className="overlay" onClick={() => setDeleteConfirm(null)}>
          <div className="confirm-dialog" onClick={e => e.stopPropagation()}>
            <div className="confirm-icon">⚠</div>
            <h3>Delete Product?</h3>
            <p>This will permanently remove <strong>"{deleteConfirm.name}"</strong> from inventory. This action cannot be undone.</p>
            <div className="confirm-actions">
              <button className="btn-cancel" onClick={() => setDeleteConfirm(null)}>Cancel</button>
              <button className="btn-delete-confirm" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}
