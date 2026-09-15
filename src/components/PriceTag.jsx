import React from "react";

export default function PriceTag({ price, className = "" }) {
  if (price === undefined || price === null) return null;

  return (
    <span
      className={`inline-block bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full text-sm ${className}`}
    >
      ${Number(price).toFixed(2)}
    </span>
  );
}
