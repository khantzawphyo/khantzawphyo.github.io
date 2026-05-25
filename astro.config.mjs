// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://khantzawphyo.dev",
  redirects: {
    "/resume": "/khantzawphyo_cv.pdf",
  },
  integrations: [react(), icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          properties: {
            className: ["heading-anchor"],
          },
          content: {
            type: "text",
            value: "#",
          },
        },
      ],
    ],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/InterVariable.woff2"],
            featureSettings: '"calt", "ss01", "cv02", "cv05", "cv08", "cv11"',
          },
          {
            weight: "100 900",
            style: "italic",
            src: ["./src/assets/fonts/InterVariable-Italic.woff2"],
            featureSettings: '"calt", "ss01", "cv02", "cv05", "cv08", "cv11"',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Google Sans Code",
      cssVariable: "--font-google-sans-code",
      options: {
        variants: [
          {
            weight: "300 800",
            style: "normal",
            src: ["./src/assets/fonts/GoogleSansCodeVariable.woff2"],
          },
          {
            weight: "300 800",
            style: "italic",
            src: ["./src/assets/fonts/GoogleSansCodeVariable-Italic.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Merriweather",
      cssVariable: "--font-merriweather",
      options: {
        variants: [
          {
            weight: "300 900",
            style: "normal",
            src: ["./src/assets/fonts/MerriweatherVariable.woff2"],
          },
          {
            weight: "300 900",
            style: "italic",
            src: ["./src/assets/fonts/MerriweatherVariable-Italic.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "PP Mondwest",
      cssVariable: "--font-ppmondwest",
      options: {
        variants: [
          {
            weight: "400",
            style: "normal",
            src: ["./src/assets/fonts/ppmondwest-regular.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "MasterpieceUniHand",
      cssVariable: "--font-handwriting",
      options: {
        variants: [
          {
            weight: "400",
            style: "normal",
            src: ["./src/assets/fonts/MasterpieceUniHand.ttf"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Padauk",
      cssVariable: "--font-myanmar",
      options: {
        variants: [
          {
            weight: "400",
            style: "normal",
            src: ["./src/assets/fonts/Padauk-Regular.ttf"],
          },
          {
            weight: "700",
            style: "normal",
            src: ["./src/assets/fonts/Padauk-Bold.ttf"],
          },
        ],
      },
    },
  ],
});
