// src/components/SearchInput.jsx
import React from "react";

export default function SearchInput({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="mb-4">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full md:w-80 p-2 rounded border focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
