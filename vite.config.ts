import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src/hooks'] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/hooks/useQRCode.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'qrcode'],
      output: {
        globals: {
          react: 'React',
          qrcode: 'QRCode'
        }
      }
    }
  }
});