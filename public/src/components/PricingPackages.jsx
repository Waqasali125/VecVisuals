import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegClock, FaSyncAlt, FaCheck } from "react-icons/fa";
import PayPalButton from "./PayPalButton";

// Base tier settings — price scales off the item's own price
const TIER_CONFIG = [
  { key: "basic", label: "Basic", priceMultiplier: 1, delivery: "1-day delivery", revisions: "3 Revision" },
  { key: "standard", label: "Standard", priceMultiplier: 3, delivery: "2-day delivery", revisions: "5 Revisions" },
  { key: "premium", label: "Premium", priceMultiplier: 5, delivery: "3-day delivery", revisions: "Unlimited Revisions" },
];

// Feature copy per portfolio category — customize freely
const CATEGORY_FEATURES = {
  icons: {
    unit: "icon",
    tiers: [
      { count: 1, extras: ["Standard style", "Source file"] },
      { count: 3, extras: ["Custom style", "All source files"] },
      { count: 5, extras: ["Custom style", "All source files", "Commercial license"] },
    ],
  },
  illustration: {
    unit: "illustration",
    tiers: [
      { count: 1, extras: ["Standard style", "Source file"] },
      { count: 1, extras: ["Custom style", "Source file", "1 revision round"] },
      { count: 1, extras: ["Custom style", "All source files", "Commercial license"] },
    ],
  },
  infographics: {
    unit: "infographic",
    tiers: [
      { count: 1, extras: ["Up to 5 data points", "Source file"] },
      { count: 1, extras: ["Up to 10 data points", "Custom colors", "Source file"] },
      { count: 1, extras: ["Unlimited data points", "Print-ready + editable", "Commercial license"] },
    ],
  },
  motion: {
    unit: "motion icon",
    tiers: [
      { count: 1, extras: ["Lottie file", "Standard style"] },
      { count: 3, extras: ["Custom colors", "All formats"] },
      { count: 5, extras: ["Custom animation", "All formats", "Commercial license"] },
    ],
  },
};

export default function PricingPackages({ item, category = "icons" }) {
  const [activeTab, setActiveTab] = useState(0);

  if (item?.price === undefined || item?.price === null) return null;

  const catData = CATEGORY_FEATURES[category] || CATEGORY_FEATURES.icons;
  const tab = TIER_CONFIG[activeTab];
  const tierInfo = catData.tiers[activeTab];

  const price = (Number(item.price) * tab.priceMultiplier).toFixed(2);
  const unitLabel = `${tierInfo.count} ${catData.unit}${tierInfo.count > 1 ? "s" : ""}`;
  const description = [unitLabel, ...tierInfo.extras].join(", ");
  const checklist = [`${unitLabel} included`, ...tierInfo.extras];

  return (
    <div className="mb-8">

      {/* PACKAGE CARD */}
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">

        {/* TABS */}
        <div className="flex border-b border-gray-200">
          {TIER_CONFIG.map((t, i) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`flex-1 py-4 text-sm md:text-base font-semibold transition ${
                activeTab === i
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="p-6">

          <h4 className="font-semibold text-gray-900 mb-1">{tab.label}</h4>
          <p className="text-2xl font-bold text-gray-900 mb-4">
            ${price}
          </p>

          <p className="text-gray-500 text-sm mb-5 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-6 text-gray-500 text-sm mb-5">
            <span className="flex items-center gap-2">
              <FaRegClock /> {tab.delivery}
            </span>
            <span className="flex items-center gap-2">
              <FaSyncAlt /> {tab.revisions}
            </span>
          </div>

          <ul className="space-y-2 mb-2">
            {checklist.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheck className="text-gray-900 flex-shrink-0" size={12} />
                {feat}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <PayPalButton
              itemName={`${item.name} — ${tab.label} package`}
              price={price}
            />
          </div>

        </div>

      </div>

      {/* CONTACT ME */}
      <div className="mt-4 border border-gray-200 rounded-xl p-5 text-center bg-white">
        <p className="text-sm text-gray-500 mb-3">
          Have questions or a custom request? Let's talk before you order.
        </p>
        <Link
          to="/contact"
          className="inline-block w-full sm:w-auto px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition"
        >
          Contact me
        </Link>
      </div>

    </div>
  );
}
