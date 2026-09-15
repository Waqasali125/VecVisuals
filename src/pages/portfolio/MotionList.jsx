import React, { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
import SearchBar from "../../components/SearchBar";
import SEO from "../../components/SEO";

import motionItems from "../../data/motion_items.json";
import collections from "../../data/motion_collections.json";

export default function MotionList() {
  const { collectionId } = useParams();
  const collection = collections.find((c) => c.id === collectionId);

  const basePath = "/portfolio/motion";

  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");

  useEffect(() => {
    if (!collection) return;
    const list = motionItems.filter((i) => i.collectionId === collection.id);
    setItems(list);
  }, [collectionId]);

  const filtered = items.filter(
    (i) =>
      i.name.toLowerCase().includes(query.toLowerCase()) &&
      (activeTag ? (i.tags || []).includes(activeTag) : true)
  );

  if (!collection) return <div>Collection not found</div>;

  return (
    <div>
      <SEO
        title={activeTag ? `${activeTag} — ${collection.name}` : collection.name}
        description={`Browse the ${collection.name} motion icon collection.`}
        keywords="motion icons, animated icons"
      />

      <BackButton to={basePath} />

      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
        {collection.name}
      </h2>

      <div className="mb-8 flex justify-center">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search motion icons..."
        />
      </div>

      {activeTag && (
        <div className="text-center mb-8">
          <span className="text-sm text-gray-500">
            Filtered by tag: <strong>{activeTag}</strong>
          </span>
          <button
            onClick={() => setSearchParams({})}
            className="ml-3 text-sm text-blue-600 hover:underline"
          >
            Clear
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {filtered.map((i) => (
          <Link
            key={i.id}
            to={`${basePath}/${collection.id}/${i.id}`}
            className="p-4 h-40 flex flex-col items-center justify-center rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
          >
            {i.image ? (
              <img
                src={i.image}
                alt={i.name}
                className="object-contain h-24 w-auto"
              />
            ) : (
              <div>No Image</div>
            )}
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">
            No motion icons found.
          </div>
        )}
      </div>
    </div>
  );
}