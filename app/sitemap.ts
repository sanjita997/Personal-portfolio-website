import type { MetadataRoute } from "next";
import { posts, services } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sanjitamhrzn.com";
  const staticRoutes = ["", "/about", "/services", "/blog", "/contact"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const blogRoutes = posts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
}
