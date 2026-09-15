import { useEffect } from "react";

// Lightweight SEO helper — no extra npm package needed.
// Sets <title>, meta description, canonical link and basic Open Graph /
// Twitter tags directly on the document head, and restores sensible
// defaults when the component unmounts.
function setMetaTag(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

const SITE_NAME = "VecVisuals";
const DEFAULT_DESCRIPTION =
  "VecVisuals — premium icons, illustrations, patterns, infographics and motion graphics for your next project.";
const DEFAULT_IMAGE = "/web-app-manifest-512x512.png";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  keywords,
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    setMetaTag("name", "description", description);
    if (keywords) setMetaTag("name", "keywords", keywords);

    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:url", window.location.href);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    setCanonical(window.location.href);
  }, [title, description, image, keywords]);

  return null;
}
