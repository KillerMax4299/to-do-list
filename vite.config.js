import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "To do List",
        short_name: "To do List",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "/vite.svg",
            sizes: "any",
            type: "svg",
            purpose: "any maskable",
          },
          
        ],
        theme_color: "#a6a6a6",
      },
      
      registerType: "autoUpdate",
      injectRegister: "auto",
    }),
  ],
});
