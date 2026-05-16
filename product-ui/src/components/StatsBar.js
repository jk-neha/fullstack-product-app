import React from "react";
import "../styles/StatsBar.css";

export default function StatsBar({ products }) {
  const totalItems = products.reduce((s, p) => s + p.quantity, 0);
  const totalValue = products.reduce((s, p) => s + p.price * p.quantity, 0);
  const lowStock = products.filter(p => p.quantity <= 1).length;

  const stats = [
    { label: "Total Products", value: products.length, icon: "◧", accent: false },
    { label: "Total Units", value: totalItems, icon: "◨", accent: false },
    { label: "Inventory Value", value: `₹${totalValue.toLocaleString("en-IN", { minimumFractionDigits: 0 })}`, icon: "◆", accent: false },
    { label: "Low Stock", value: lowStock, icon: "◈", accent: lowStock > 0 },
  ];

  return (
    <div className="stats-bar">
      {stats.map(s => (
        <div key={s.label} className={`stat-card ${s.accent ? "stat-accent" : ""}`}>
          <span className="stat-icon">{s.icon}</span>
          <div className="stat-info">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
