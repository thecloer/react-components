import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://react-components.thecloer.com/',
  resolve: {
    alias: { '@': path.resolve('./src') },
  },
  plugins: [react()],
});
