import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // 你需要定义的端口号
    open: false, // open支持boolean/string类型，为true时打开默认浏览器，为string类型时，打开指定浏览器，具体查看官网即可
    proxy: {
      // 配置本地代理地址
      "/api": "http://localhost:3000/",
      // '/api': {
      //     // 后台地址
      //     target: 'http://localhost:3000/',
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/api/, '')
      // },
    },
  },
});
