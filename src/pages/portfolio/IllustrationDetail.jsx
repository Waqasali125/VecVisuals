import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaSearchPlus, FaTimes } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import illustrations from "../../data/illustrations_details.json";
import PricingPackages from "../../components/PricingPackages";
import ClickableTags from "../../components/ClickableTags";
import SEO from "../../components/SEO";

export default function IllustrationDetail({ isPattern }) {
  const [previewOpen, setPreviewOpen] = useState(false);

  const params = useParams();
  const idKey = isPattern ? "patternId" : "illustrationId";
  const id = params[idKey];

  const item = illustrations.find(
    (i) => i.id === id && i.isPattern === !!isPattern
  );

  const basePath = isPattern
    ? "/portfolio/pattern"
    : "/portfolio/illustration";

  if (!item)
    return <div className="text-center py-20 text-lg">Not found</div>;

  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
      <SEO
        title={item.name}
        description={item.description}
        keywords={item.tags ? item.tags.join(", ") : undefined}
        image={item.image}
      />
      <BackButton to={basePath} />

      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        {item.name}
      </h2>

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE - IMAGE */}
          <div className="flex justify-center">
            {item.image ? (
              <div className="relative group overflow-hidden rounded-xl cursor-pointer">

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => setPreviewOpen(true)}
                  className="object-contain max-h-[500px] w-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                  {/* Zoom Button */}
                  <button
                    onClick={() => setPreviewOpen(true)}
                    className="bg-white text-blue-600 p-4 rounded-full shadow-lg hover:scale-110 transition"
                  >
                    <FaSearchPlus size={22} />
                  </button>

                </div>
              </div>
            ) : (
              <div>No Image</div>
            )}
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div>
           <h3 className="text-2xl font-semibold mb-4">
            {item.title || "Project Details"}
            </h3>

            <p className="text-gray-600 mb-6">
              {item.description ||
                "No description available for this project."}
            </p>

            {/* TAG BADGES */}
            <div className="mb-6">
              <ClickableTags tags={item.tags} basePath={basePath} />
            </div>

            {/* PACKAGES */}
            <PricingPackages item={item} category="illustration" />
          </div>
        </div>
      </div>

      {/* FULLSCREEN IMAGE PREVIEW */}
      {previewOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">

          {/* Close Button */}
          <button
            onClick={() => setPreviewOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition"
          >
            <FaTimes />
          </button>

          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

{/* HOMEPAGE PREVIEW */}
{!isPattern && (

<div className="max-w-7xl mx-auto mt-20 px-4">

<h3 className="text-xl md:text-2xl font-semibold text-center mb-2">
  See this illustration in action
</h3>

<p className="text-black text-center mb-12 max-w-2xl mx-auto text-sm md:text-base">
  This preview shows how the illustration can look inside a real homepage layout.
</p>

<div className="bg-[#f5f6f8] rounded-3xl px-6 md:px-10 lg:px-14 py-10 md:py-14 lg:py-16 overflow-hidden">

  {/* NAVBAR */}
  <div className="flex justify-between items-center mb-14 md:mb-20">

    <div className="font-semibold text-base md:text-lg tracking-wide">
      VecVisuals
    </div>

    <div className="hidden md:flex gap-6 lg:gap-8 text-black-80 text-sm font-medium">
      <span>Home</span>
      <span>About</span>
      <span>Work</span>
      <span>Contact</span>
    </div>

  </div>

  {/* HERO */}
  <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">

      <p className="font-semibold text-xs md:text-sm text-black mb-3 tracking-wide">
        HELLO! I'm Waqas
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold leading-tight text-black-80 mb-5">
        Bringing Ideas <br className="hidden md:block" />
        to Life Through <br className="hidden md:block" />
        Illustration
      </h1>

      <p className="text-gray-600 max-w-md mx-auto md:mx-0 mb-8 text-sm md:text-base leading-relaxed">
        A passionate illustrator creating vibrant and meaningful visuals
        for brands, books, and digital experiences.
      </p>

      <button className="bg-[#1f2937] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full shadow hover:bg-black transition text-sm md:text-base">
        LET'S TALK
      </button>

    </div>

    {/* RIGHT ILLUSTRATION */}
    <div className="relative flex justify-center items-center mt-10 md:mt-0">

      <img
        src={item.image}
        alt="preview"
        className="relative max-h-[200px] sm:max-h-[240px] md:max-h-[300px] lg:max-h-[340px] object-contain mix-blend-multiply"
      />

    </div>

  </div>

</div>

</div>

)}
    </div>
  );
}