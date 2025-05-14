import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    rollupOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  server: {
    port: 3001,
  },
});
