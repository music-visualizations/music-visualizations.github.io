import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://xavieryuhanliu.github.io",
  base: "/music-visualizations",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
