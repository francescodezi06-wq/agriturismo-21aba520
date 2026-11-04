// Build statico per hosting condiviso (Aruba): npm run build:static -> dist/client
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({ spa: { enabled: true, prerender: { outputPath: "/index" } } }),
    viteReact(),
    tailwindcss(),
  ],
});
