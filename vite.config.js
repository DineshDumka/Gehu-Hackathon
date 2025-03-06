// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss"; // Correct import for Tailwind CSS

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Use tailwindcss as a plugin
  ],
});
