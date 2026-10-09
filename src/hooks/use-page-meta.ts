import { useEffect } from "react";

type Meta = { title: string; description: string; twitterCard?: "summary" | "summary_large_image" };

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// Replaces TanStack Router's per-route `head()`; keeps the same title/description/og tags.
export function usePageMeta({ title, description, twitterCard = "summary" }: Meta) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", twitterCard);
  }, [title, description, twitterCard]);
}
