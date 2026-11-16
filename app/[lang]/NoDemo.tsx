"use client";
import { useEffect, useState } from "react";

// Botón "prohibido": no navega; al pulsarlo muestra una nube de cómic.
export default function NoDemo({ label, message }: { label: string; message: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => setOpen(false), 5000);
    return () => clearTimeout(id);
  }, [open]);
  return (
    <span className="nodemo-wrap">
      <button type="button" className="btn nodemo" aria-describedby={open ? "nodemo-msg" : undefined} onClick={() => setOpen((o) => !o)}>
        {label} 🚫
      </button>
      {open && <span id="nodemo-msg" role="status" className="bubble">{message}</span>}
    </span>
  );
}
