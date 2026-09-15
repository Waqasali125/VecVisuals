import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
import PricingPackages from "../../components/PricingPackages";
import ClickableTags from "../../components/ClickableTags";
import SEO from "../../components/SEO";

import motionItems from "../../data/motion_items.json";
import collections from "../../data/motion_collections.json";

export default function MotionDetail() {
  const { collectionId, motionId } = useParams();

  const collection = collections.find((c) => c.id === collectionId);
  const motion = motionItems.find(
    (i) => i.id === motionId && i.collectionId === collectionId
  );

  const basePath = "/portfolio/motion";

  if (!collection || !motion)
    return <div className="text-center py-20">Not found</div>;

  return (
    <div>
      <SEO
        title={`${motion.name} — ${collection.name}`}
        description={`${motion.name} motion icon from the ${collection.name} collection.`}
        keywords={motion.tags ? motion.tags.join(", ") : undefined}
        image={motion.image}
      />

      <BackButton to={`${basePath}/${collection.id}`} />

      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
        {motion.name}
      </h2>

      <div className="max-w-xl mx-auto p-8 rounded-lg shadow-sm bg-white">
        <div className="h-72 flex items-center justify-center overflow-hidden">
          {motion.image ? (
            <img
              src={motion.image}
              alt={motion.name}
              className="object-contain h-full w-auto"
            />
          ) : (
            <div>No Image</div>
          )}
        </div>

        {motion.tags && motion.tags.length > 0 && (
          <div className="mt-6 flex justify-center">
            <ClickableTags
              tags={motion.tags}
              basePath={`${basePath}/${collection.id}`}
            />
          </div>
        )}

        <div className="mt-6">
          <PricingPackages item={motion} category="motion" />
        </div>
      </div>

      {/* 3 SECTIONS: See motion icon in action (Flaticon-style) */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3 className="text-2xl font-semibold text-center mb-2">
          See this motion icon in action
        </h3>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Look like a pro with this motion icon and see how it will look on your website, mobile or any interface design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: On a menu */}
          <div className="bg-gray-100 rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">
              {motion.name} on a menu
            </h4>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 p-3 border-b border-gray-100">
                {motion.image && (
                  <img src={motion.image} alt="" className="object-contain h-6 w-6 flex-shrink-0" />
                )}
                <span className="text-sm font-medium">{motion.name}</span>
              </div>
              <div className="flex items-center gap-3 p-3 border-b border-gray-100 text-gray-500">
                <img
                  src="../../../src/assets/animation/Dashbord.png"
                  alt="Dashbord"
                  className="h-6 w-6 object-contain flex-shrink-0"
                />
                <span className="text-sm">Dashbord</span>
              </div>

              <div className="flex items-center gap-3 p-3 border-b border-gray-100 text-gray-500">
                <img
                  src="../../../src/assets/animation/Project.png"
                  alt="Project"
                  className="h-6 w-6 object-contain flex-shrink-0"
                />
                <span className="text-sm">Project</span>
              </div>

            </div>
          </div>

          {/* Section 2: On a mobile */}
          <div className="bg-gray-100 rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">
              {motion.name} on a mobile
            </h4>
            
          
              <p className="text-xs text-gray-600 mb-4">
                {motion.name} works great in your next mobile interface project.
              </p>
              <div className="flex items-center justify-around gap-2 pt-2 border-t border-gray-100">
                              {motion.image && (
                  <img src={motion.image} alt="" className="object-contain h-8 w-8 flex-shrink-0" />
                )}
                
                <img
                  src="../../../src/assets/animation/Camera.png"
                  alt="Camera"
                  className="h-6 w-6 object-contain flex-shrink-0"
                />
                
                <img
                  src="../../../src/assets/animation/Gallery.png"
                  alt="Gallery"
                  className="h-6 w-6 object-contain flex-shrink-0"
                />

                <img
                  src="../../../src/assets/animation/Settings.png"
                  alt="Settings"
                  className="h-6 w-6 object-contain flex-shrink-0"
                />
                
            </div>
          </div>


          {/* Section 3: On a notification */}
          <div className="bg-gray-100 rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">
              {motion.name} on a notification
            </h4>
            <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
              <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center">
                {motion.image && (
                  <img src={motion.image} alt="" className="object-contain h-8 w-8" />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-900">{motion.name}</p>
                <p className="text-xs text-gray-500">Looks great on an interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}