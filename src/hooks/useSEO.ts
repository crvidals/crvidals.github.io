import { useEffect } from "react";

import {
  siteUrl,
  siteName,
  siteDescription,
  siteKeywords,
  siteImage,
} from "../data/seo";

export function useSEO(title?: string, description?: string) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${siteName}` : siteName;
    const pageDescription = description ?? siteDescription;

    document.title = pageTitle;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", pageDescription);
    setMeta("keywords", siteKeywords.join(", "));

    setMeta("og:title", pageTitle, true);
    setMeta("og:description", pageDescription, true);
    setMeta("og:url", siteUrl, true);
    setMeta("og:image", siteImage, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", siteName, true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", pageDescription);
    setMeta("twitter:image", siteImage);
  }, [title, description]);
}
