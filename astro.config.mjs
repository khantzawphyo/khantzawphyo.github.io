// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/resume": "/khantzawphyo_cv.pdf",
  },
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
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
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/JetBrainsMonoVariable.woff2"],
            featureSettings: '"ss01", "cv02", "cv03", "zero"',
          },
          {
            weight: "100 900",
            style: "italic",
            src: ["./src/assets/fonts/JetBrainsMonoVariable-Italic.woff2"],
            featureSettings: '"ss01", "cv02", "cv03", "zero"',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Tiempos Text",
      cssVariable: "--font-tiempos",
      options: {
        variants: [
          {
            weight: "400",
            style: "normal",
            src: ["./src/assets/fonts/tiempos-text-web-regular.woff2"],
          },
          {
            weight: "400",
            style: "italic",
            src: ["./src/assets/fonts/tiempos-text-web-regular-italic.woff2"],
          },
          {
            weight: "600",
            style: "normal",
            src: ["./src/assets/fonts/tiempos-text-web-semibold.woff2"],
          },
          {
            weight: "600",
            style: "italic",
            src: ["./src/assets/fonts/tiempos-text-web-semibold-italic.woff2"],
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
      name: "walone",
      cssVariable: "--font-myanmar",
      options: {
        variants: [
          {
            weight: "400",
            style: "normal",
            src: ["./src/assets/fonts/walone-regular.ttf"],
          },
          {
            weight: "700",
            style: "normal",
            src: ["./src/assets/fonts/walone-bold.ttf"],
          },
        ],
      },
    },
  ],
});