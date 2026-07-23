import { defineConfig, mergeConfig } from 'vite';
import { defineConfig as defineTestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const vitestConfig = defineTestConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    globals: true,
    pool: 'vmThreads',
    include: ['src/**/*{test,spec}.{js,ts,jsx,tsx}'],
    includeSource: ['src/**/*.{js,ts,jsx,tsx}'],
    deps: {
      optimizer: {
        web: {
          include: ['src/**/*{test,spec}.{js,ts,jsx,tsx}'],
        },
      },
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/components'],
      exclude: [
        'src/**/index.{ts,tsx}',
        'src/**/*.types.ts',
        '**/*.d.ts',
        '**/*.scss',
      ],
    },
  },
});

const viteConfig = defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg' })],
});

export default mergeConfig(viteConfig, vitestConfig);
