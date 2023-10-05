/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@good/ui',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          reactDOM: 'react-dom',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['@testing-library/jest-dom/vitest'],
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['html', ['lcov', { projectRoot: '../..' }]],
    },
  },
});
