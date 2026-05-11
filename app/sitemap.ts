import type { MetadataRoute } from "next";

import { getApps } from "@/src/lib/apps";
import { siteConfig } from "@/src/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const appUrls = getApps().map((app) => ({
    url: `${siteConfig.url}/apps/${app.slug}`,
    lastModified: new Date(app.date),
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    ...appUrls,
  ];
}
