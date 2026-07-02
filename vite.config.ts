import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" = caminhos relativos → funciona no GitHub Pages em subpasta (/prisma-site/) e local.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
