import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];

  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}