import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  tsconfig: './tsconfig.build.json', // Use build-specific tsconfig
  sourcemap: true,
  clean: true,
  format: ['esm'],
  dts: true,
  noExternal: ['eventemitter3', 'ipull', '@huggingface/transformers'], // Bundle problematic packages
  external: [
    'dotenv', // Externalize dotenv to prevent bundling
    'fs', // Externalize fs to use Node.js built-in module
    'path', // Externalize other built-ins if necessary
    'https',
    'http',
    'events',
    '@elizaos/core',
    'zod',
    'node-llama-cpp',
  ],
});
