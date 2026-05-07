import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Three.js is only used by NeuralNetCanvas — isolate it so the
          // main bundle stays small and Three.js can be cached separately.
          "vendor-three": ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
    // Raise warning limit slightly; Three.js chunk will still be large but
    // it's lazy-loaded and cached long-term in production.
    chunkSizeWarningLimit: 1000,
  },
});
