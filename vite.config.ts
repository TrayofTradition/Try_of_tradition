import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages project sites are served from /<repository>/.
  base: "/Try_of_tradition/",
  plugins: [react(), tailwindcss()],
});
