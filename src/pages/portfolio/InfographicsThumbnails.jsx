import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import SEO from "../../components/SEO";
import infographics from "../../data/infographic_thumbnail.json";
import infographicDetails from "../../data/infographic_details.json";

const tagsById = Object.fromEntries(
  infographicDetails.map((d) => [d.id, d.tags || []])
);

export default function InfographicsThumbnails() {

  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");

  const filtered = infographics.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
    const matchesTag = activeTag
      ? (tagsById[item.id] || []).includes(activeTag)
      : true;
    return matchesQuery && matchesTag;
  });

  return (
    <div>

      <SEO
        title={activeTag ? `${activeTag} Infographics` : "Infographics Collection"}
        description="Infographics visually present complex data and information."
        keywords="infographics, data visualization, charts"
      />

      <div className="mb-8 flex justify-center">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search infographics..."
        />
      </div>

      <div className="text-center pb-8">
        <h2 className="text-2xl font-semibold">Infographics Collection</h2>
        <p className="text-gray-600 mt-2">
          Infographics visually present complex data and information.
        </p>

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
            to={`/portfolio/infographics/${item.id}`}
            className="block p-4 rounded-lg bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >

            <div className="h-44 flex items-center justify-center overflow-hidden">

              <img
                src={item.image}
                alt={item.name}
                className="object-contain h-full w-auto"
              />

            </div>

            <div className="mt-4 text-center font-medium">
              {item.name}
            </div>

          </Link>

        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">
            No infographics found.
          </div>
        )}
      </div>

    </div>
  );
}