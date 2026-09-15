import React, { useState, useEffect } from "react";
import ThumbnailCard from "../../components/ThumbnailCard";
import SearchBar from "../../components/SearchBar";
import SEO from "../../components/SEO";
import collections from "../../data/motion_collections.json";

export default function MotionThumbnails() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filtered = collections.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase())
    );
    setItems(filtered);
  }, [query]);

  const basePath = "/portfolio/motion";

  return (
    <div>
      <SEO
        title="Motion Icon Collections"
        description="Motion icons add subtle movement to enhance modern UI and interactions."
        keywords="motion icons, animated icons, UI animation"
      />
      <div className="mb-8 flex justify-center">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search motion icon collections..."
        />
      </div>

      <h2 className="text-2xl font-semibold flex justify-center">
        Motion Icon Collections
      </h2>

      <p className="text-gray-600 mt-2 flex justify-center pb-8">
        Motion icons add subtle movement to enhance modern UI and interactions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((c) => (
          <ThumbnailCard
            key={c.id}
            item={{
              id: c.id,
              name: c.name,
              image: c.image,
              count: c.count
            }}
            basePath={basePath}
          />
        ))}
      </div>
    </div>
  );
}