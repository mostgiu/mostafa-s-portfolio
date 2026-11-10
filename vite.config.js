import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vercel exposes the production domain at build time; use it for absolute
// URLs in social/SEO meta tags (crawlers ignore relative og:image URLs).
const productionHost = globalThis.process?.env?.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = productionHost ? `https://${productionHost}` : "";

const siteUrlPlugin = () => ({
  name: "site-url",
  transformIndexHtml: (html) => html.replaceAll("%SITE_URL%", siteUrl),
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin()],
});
