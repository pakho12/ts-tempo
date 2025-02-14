import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'node',
    server: {
      deps: {
        inline: [],
      },
    },
    coverage: {
      include: ['src/**/*.ts'],
      reporter: ['text'],
    },
  },
})
