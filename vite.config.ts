import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    'process.env.VITE_G_ANALYTICS_ID': JSON.stringify(process.env.VITE_G_ANALYTICS_ID),
  },
});
