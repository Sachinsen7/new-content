// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
  define: {
    "process.env": {},
    "process.platform": '"browser"',
    "process.version": '"v16.0.0"',
  },
});
