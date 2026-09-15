import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSearchPlus, FaTimes } from "react-icons/fa";
import infographics from "../../data/infographic_details.json";
import PricingPackages from "../../components/PricingPackages";
import ClickableTags from "../../components/ClickableTags";
import SEO from "../../components/SEO";

export default function InfographicsDetail() {

  const [previewOpen, setPreviewOpen] = useState(false);
  const { infographicId } = useParams();
  const navigate = useNavigate();

  const item = infographics.find((i) => i.id === infographicId);

  if (!item)
    return <div className="text-center py-20 text-lg">Not found</div>;

  return (

    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 md:py-12">

      <SEO
        title={item.name}
        description={item.description}
        keywords={item.tags ? item.tags.join(", ") : undefined}
        image={item.image}
      />

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="search-pill inline-block mb-6 text-sm md:text-base"
      >
        ← Back
      </button>

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-12">
        {item.name}
      </h2>

      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-5 sm:p-6 md:p-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">

            <div className="relative group overflow-hidden rounded-xl cursor-pointer">

              <img
                src={item.image}
                alt={item.name}
                onClick={() => setPreviewOpen(true)}
                className="object-contain max-h-[320px] sm:max-h-[400px] md:max-h-[500px] w-auto transition-transform duration-500 group-hover:scale-110"
              />

              {/* ZOOM BUTTON */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                <button
                  onClick={() => setPreviewOpen(true)}
                  className="bg-white text-blue-600 p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition"
                >
                  <FaSearchPlus size={20} />
                </button>

              </div>

            </div>

          </div>

          {/* DETAILS */}
          <div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>

            {/* TAGS */}
            <div className="mb-6">
              <ClickableTags tags={item.tags} basePath="/portfolio/infographics" />
            </div>

            {/* PACKAGES */}
            <PricingPackages item={item} category="infographics" />

          </div>

        </div>

      </div>


{/* ========= FULL SCREEN IMAGE ========= */}

{previewOpen && (

<div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 sm:p-6">

<button
onClick={() => setPreviewOpen(false)}
className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-2xl sm:text-3xl"
>
<FaTimes />
</button>

<img
src={item.image}
alt={item.name}
className="max-h-[85vh] max-w-[95vw] sm:max-w-[90vw] object-contain rounded-lg shadow-2xl"
/>

</div>

)}

    </div>
  );
}