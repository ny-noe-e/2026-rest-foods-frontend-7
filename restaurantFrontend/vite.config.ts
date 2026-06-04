import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // or @vitejs/react-refresh depending on your setup

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Whenever your frontend requests '/api', Vite forwards it to your backend
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
