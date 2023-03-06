import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from 'vite-plugin-eslint'; // 引入


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), // 配置eslintPlugin
    eslintPlugin({
      cache: false,
      include: ['.vue','.ts'],
    }),],
  resolve: {
    // ↓路径别名
    alias: {
      // ↓举例：@/abc => src/abc
      "@": resolve(__dirname, "src"),
    },
  }
});
