import React from "react";
import "../styles/ProductTable.css";

const COLS = [
  { key: "id", label: "ID", width: "80px" },
  { key: "name", label: "Product Name", width: "auto" },
  { key: "description", label: "Description", width: "auto" },
  { key: "price", label: "Price", width: "130px" },
  { key: "quantity", label: "Qty", width: "80px" },
];

function SkeletonRow() {
  return (
    <tr className="skeleton-row">
      {COLS.map(c => (
        <td key={c.key}><span className="skeleton-cell" /></td>
      ))}
      <td><span className="skeleton-cell" style={{ width: "80px" }} /></td>
    </tr>
  );
}

function SortIcon({ active, dir }) {
  return (
    <span className={`sort-icon ${active ? "active" : ""}`}>
      {active ? (dir === "asc" ? "↑" : "↓") : "⇅"}
    </span>
  );
}

export default function ProductTable({ products, loading, sortConfig, onSort, onEdit, onDelete }) {
  if (loading) {
    return (
      <div className="table-wrap">
        <table className="product-table">
          <thead>
            <tr>
              {COLS.map(c => <th key={c.key} style={{ width: c.width }}>{c.label}</th>)}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)}
          </tbody>
        </table>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">◫</div>
        <h3>No products found</h3>
        <p>Try adjusting your search or add a new product to the inventory.</p>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <div className="table-meta">
        Showing <strong>{products.length}</strong> {products.length === 1 ? "product" : "products"}
      </div>
      <table className="product-table">
        <thead>
          <tr>
            {COLS.map(c => (
              <th
                key={c.key}
                style={{ width: c.width }}
                className="sortable"
                onClick={() => onSort(c.key)}
              >
                {c.label}
                <SortIcon active={sortConfig.key === c.key} dir={sortConfig.dir} />
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={p.id} className="product-row" style={{ animationDelay: `${i * 40}ms` }}>
              <td><span className="id-badge">#{p.id}</span></td>
              <td>
                <span className="product-name">{p.name}</span>
              </td>
              <td>
                <span className="product-desc">{p.description}</span>
              </td>
              <td>
                <span className="price-cell">
                  ₹{Number(p.price).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </span>
              </td>
              <td>
                <span className={`qty-badge ${p.quantity <= 1 ? "qty-low" : p.quantity <= 5 ? "qty-medium" : "qty-ok"}`}>
                  {p.quantity}
                </span>
              </td>
              <td>
                <div className="action-btns">
                  <button className="btn-edit" onClick={() => onEdit(p)} title="Edit">
                    ✎
                  </button>
                  <button className="btn-delete" onClick={() => onDelete(p)} title="Delete">
                    ✕
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
