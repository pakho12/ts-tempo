import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    lib: {
      name: 'tempo',
      entry: 'src/index.ts',
      fileName: 'index',
    },
    sourcemap: true,
  },
})
