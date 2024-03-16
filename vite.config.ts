/// <reference types="vitest" />

import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import postcssPxtorpx from './postcss-pxtorpx.ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  test: {
    globals: true,
  },
  css: {
    postcss: {
      plugins: [postcssPxtorpx()],
    },
  },
});
