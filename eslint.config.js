// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    formatters: true,
    ignores: [
      'dist',
      'node_modules',
    ],
  },
  {
    // files: [
    //   'src/**/*.ts',
    //   'test/**/*.ts',
    //   'test-bench/**/*.ts',
    // ],
  },
)
