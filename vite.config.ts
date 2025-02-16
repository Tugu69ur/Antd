import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: /^~/, replacement: "" }],
  },
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("@ant-design/pro-form")) {
            return "pro-form";
          }
        },
      },
    },
  },
});
