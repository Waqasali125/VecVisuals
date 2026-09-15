import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import SEO from "../../components/SEO";
import icons from "../../data/icon_thumbnail.json";
import iconDetails from "../../data/icons_details.json";

// map id -> tags, since tag data lives in the details file
const tagsById = Object.fromEntries(
  iconDetails.map((d) => [d.id, d.tags || []])
);

export default function IconsThumbnails() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");

  const basePath = "/portfolio/icons";

  const filtered = icons.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
    const matchesTag = activeTag
      ? (tagsById[item.id] || []).includes(activeTag)
      : true;
    return matchesQuery && matchesTag;
  });

  const heading = "Icon Design Collections";

  const description =
    "Icons are simple visual symbols used in UI design, apps, and branding.";

  return (
    <div>
      <SEO
        title={activeTag ? `${activeTag} Icons` : heading}
        description={description}
        keywords="icons, icon pack, vector icons, UI icons"
      />

      <div className="mb-8 flex justify-center">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search icons..."
        />
      </div>

      <div className="text-center pb-8">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <p className="text-gray-600 mt-2">{description}</p>

        {activeTag && (
          <div className="mt-4">
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
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {filtered.map((item) => (
          <Link
            key={item.id}
            to={`${basePath}/${item.id}`}
            className="block p-4 rounded-lg bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="h-44 flex items-center justify-center overflow-hidden">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain h-full w-auto"
                />
              ) : (
                <div>No Image</div>
              )}
            </div>
            <div className="mt-4 text-center font-medium">
              {item.name}
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">
            No icons found.
          </div>
        )}
      </div>
    </div>
  );
}