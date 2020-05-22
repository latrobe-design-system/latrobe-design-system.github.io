module.exports = {
  jekyll: {
    default: '_config.yml'
  },
  views: [
    './_(includes|layouts)/**/*.html',
    './_ltu-components/(src|tests)/**/*.html',
    './_docs/**/*.md',
    './all-patterns.md',
    './assets/**/*.scss',
  ],
  scripts: {
    src: './_ltu-components/src/**/*.js',
    dests: [
      './_site/ltu-components/dist/js/ds-ltu.js',
      './_ltu-components/dist/js/ds-ltu.js',
    ]
  },
  styles: {
    ltuPatterns: {
      src: [
        './_ltu-components/src/**/*.scss',
      ],
      entryPoint: './_ltu-components/src/ds-ltu.scss',
      dests: [
        './_ltu-components/dist/css',
        './_site/ltu-components/dist/css',
      ]
    },
    site: {
      src: './_assets/_sass/**/*.scss',
      entryPoint: './_assets/_sass/styles.scss',
      dest: './_site/assets/css'
    },
    ltuLegacy: {
      src: './_ltu-components/src/ltu-legacy.scss',
      entryPoint: './_ltu-components/src/ltu-legacy.scss',
      dests: [
        './_ltu-components/dist/css',
        './_site/ltu-components/dist/css',
      ]
    },
  },
  browserSync: {
    open: true,
    ghostMode: false,
    server: {
      baseDir: './_site',
    },
    port: 4000
  }
}
