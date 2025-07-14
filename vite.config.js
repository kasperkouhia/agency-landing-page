import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/agency-landing-page/",
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: [
            "removeDimensions",
            {
              name: "convertColors",
              params: {
                currentColor: true,
              },
            },
          ],
          floatPrecision: 2,
        },
      },
    }),
  ],
});
