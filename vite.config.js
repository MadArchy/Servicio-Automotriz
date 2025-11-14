import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['@emailjs/browser'],
        },
      },
    },
    cssMinify: true,
    assetsInlineLimit: 4096,
  },
  plugins: [
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'AutoTech Servicios Automotrices',
        short_name: 'AutoTech',
        description: 'Servicios automotrices especializados en Cúcuta',
        theme_color: '#0E0E0E',
        background_color: '#0E0E0E',
        display: 'standalone',
        icons: [
          {
            src: 'assets/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,webp,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
});

