/* eslint-disable no-template-curly-in-string */
export default {
  git: {
    requireCleanWorkingDir: true,
    requireUpstream: true,
    commitMessage: 'chore(release): ${version}',
    tagAnnotation: 'v${version}',
    push: true,
    tagName: 'v${version}',
    releaseNotes(context) {
      // Remove the first, redundant line with version and date.
      return context.changelog.split('\n').slice(1).join('\n')
    },
  },
  github: {
    release: true,
    autoGenerate: true,
  },
  npm: {
    publish: true,
    skipChecks: true,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'angular',
      },
    },
  },
}
