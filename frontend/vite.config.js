import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // 1. اضافه کردن import path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["react-multi-carousel", "react-redux", "react", "react-dom"], // 2. اطمینان از pre-bundle شدن react-redux
  },
  resolve: {
    // 3. کلید حل مشکل: اجبار به استفاده از یک نسخه React یکسان در کل پروژه
    dedupe: ["react", "react-dom"],
    alias: {
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
    },
  },
});