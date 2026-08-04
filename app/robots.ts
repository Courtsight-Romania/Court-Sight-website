import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/contact";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Pagină internă de verificare a identității, nu conținut public.
      disallow: "/brand",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
