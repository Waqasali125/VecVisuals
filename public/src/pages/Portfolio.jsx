import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import SEO from "../components/SEO";

export default function Portfolio() {

  const tabs = [
    { to: "icons", label: "Icons" },
    { to: "illustration", label: "Illustration" },
    { to: "pattern", label: "Pattern" },
    { to: "motion", label: "Motion Icon" },
    { to: "infographics", label: "Infographics" },
    // { to: "casestudy", label: "Case Study" },
  ];

  return (
    <div className="max-w-7xl mx-auto">

      <SEO
        title="Portfolio"
        description="Browse VecVisuals' portfolio of icons, illustrations, patterns, motion graphics and infographics."
      />

      {/* NAVIGATION TABS */}
      <nav className="flex gap-4 sm:gap-6 md:gap-8 items-end mb-6 overflow-x-auto pb-2 scrollbar-hide">

        {tabs.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            className={({ isActive }) =>
              `whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl pb-2 transition ${
                isActive
                  ? "underline-active text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`
            }
          >
            {t.label}
          </NavLink>
        ))}

      </nav>

      {/* PAGE CONTENT */}
      <div className="mt-4">
        <Outlet />
      </div>

    </div>
  );
}