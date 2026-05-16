import React, { useState, useEffect } from "react";
import "../styles/ProductModal.css";

const EMPTY = { id: "", name: "", description: "", price: "", quantity: "" };

export default function ProductModal({ mode, product, onSave, onClose }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (mode === "edit" && product) {
      setForm({ ...product });
    } else {
      setForm(EMPTY);
    }
    setErrors({});
  }, [mode, product]);

  const validate = () => {
    const e = {};
    if (!form.id || isNaN(Number(form.id)) || Number(form.id) <= 0) e.id = "Valid positive ID required";
    if (!form.name.trim()) e.name = "Product name is required";
    if (!form.description.trim()) e.description = "Description is required";
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) < 0) e.price = "Valid price required";
    if (!form.quantity || isNaN(Number(form.quantity)) || Number(form.quantity) < 0) e.quantity = "Valid quantity required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSaving(true);
    await onSave({
      id: Number(form.id),
      name: form.name.trim(),
      description: form.description.trim(),
      price: Number(form.price),
      quantity: Number(form.quantity),
    });
    setSaving(false);
  };

  const fields = [
    { key: "id", label: "Product ID", type: "number", placeholder: "e.g. 5", disabled: mode === "edit" },
    { key: "name", label: "Product Name", type: "text", placeholder: "e.g. Mechanical Keyboard" },
    { key: "description", label: "Description", type: "text", placeholder: "Short description" },
    { key: "price", label: "Price (₹)", type: "number", placeholder: "e.g. 1299.99", step: "0.01" },
    { key: "quantity", label: "Quantity", type: "number", placeholder: "e.g. 10" },
  ];

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-icon">{mode === "add" ? "✦" : "✎"}</span>
            <h2>{mode === "add" ? "Add New Product" : "Edit Product"}</h2>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form" noValidate>
          <div className="form-grid">
            {fields.map(f => (
              <div key={f.key} className={`form-group ${f.key === "description" ? "full-width" : ""}`}>
                <label className="form-label">{f.label}</label>
                <input
                  className={`form-input ${errors[f.key] ? "input-error" : ""}`}
                  type={f.type}
                  name={f.key}
                  value={form[f.key]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  disabled={f.disabled}
                  step={f.step}
                  autoComplete="off"
                />
                {errors[f.key] && <span className="field-error">{errors[f.key]}</span>}
              </div>
            ))}
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose} disabled={saving}>
              Cancel
            </button>
            <button type="submit" className="btn-save" disabled={saving}>
              {saving ? <span className="spinner" /> : null}
              {saving ? "Saving…" : mode === "add" ? "Add Product" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
