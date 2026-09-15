import React from "react";
import { Link } from "react-router-dom";

// Renders a list of tags as clickable pills. Clicking a tag navigates to
// `basePath?tag=<tag>` so the thumbnails page for that same category can
// filter its items by that tag.
export default function ClickableTags({ tags, basePath, className = "" }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {tags.map((tag, index) => (
        <Link
          key={index}
          to={`${basePath}?tag=${encodeURIComponent(tag)}`}
          className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
