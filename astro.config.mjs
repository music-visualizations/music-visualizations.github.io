import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import astroI18next from "astro-i18next";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";

const defaultLocale = "en";
const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  zh: "zh-CN",
  ja: "ja-JP",
  de: "de-DE",
  ru: "ru-RU",
  fr: "fr-CA",
};

export default defineConfig({
  site: "https://xavieryuhanliu.github.io",
  base: "/music-visualizations",
  integrations: [
    tailwind(),
    mdx(), 
    i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
    icon(), 
  ],
});
