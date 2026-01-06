import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // ✅ Vercel serves from the domain root
  base: "/",

  plugins: [react()],

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      // ✅ keep only what you need
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // ✅ Vercel expects dist by default
    target: "esnext",
    outDir: "dist",
  },

  server: {
    port: 3000,
    open: true,
  },
});
