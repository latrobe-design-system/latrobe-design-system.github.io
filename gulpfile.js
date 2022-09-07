const spawn = require('cross-spawn')
const browserSync = require('browser-sync')
const del = require('del')
const gulp = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('sass')
const sourcemaps = require("gulp-sourcemaps")
const rollup = require('rollup').rollup
const rollupMulti = require('@rollup/plugin-multi-entry')
const rollupBuble = require('@rollup/plugin-buble')
const rollupNodeResolve = require('@rollup/plugin-node-resolve')
const rollupUglify = require('rollup-plugin-uglify').uglify
const config = require('./build.config')

const clean = () => del([
  ...config.scripts.dests.map(d => d+'*'),
  config.styles.ltuPatterns.dest + '/ds-ltu.css*',
  config.styles.ltuLegacy.dest + '/ltu-legacy.css*'
])

const server = browserSync.create()

function serve(done) {
  server.init(config.browserSync)
  done()
}

function reload() {
  return server.reload()
}

async function siteStyles () {

  gulp.src(config.styles.site.entryPoint)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
    })
      .on('error', function (error) {
        console.error(`siteStyles.sass: ${error.messageFormatted}`)
        this.emit('end')
      }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.styles.site.dest))
    .pipe(server.stream({ match: '**/*.css' }))

}

async function ltuPatternsStyles () {

  gulp.src(config.styles.ltuPatterns.entryPoint)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
    }).on('error', function (error) {
      console.error(`ltuPatternsStyles.sass: ${error.messageFormatted}`)
      this.emit('end')
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.styles.ltuPatterns.dests[0]))
    .pipe(gulp.dest(config.styles.ltuPatterns.dests[1]))
    .pipe(gulp.src(config.styles.ltuPatterns.dests.filter(dest => dest.startsWith('./_site/'))))
    .pipe(server.stream({ match: '**/*.css' }))

}

async function ltuLegacyStyles () {

  gulp.src(config.styles.ltuLegacy.entryPoint)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
    })
      .on('error', function (error) {
        console.error(`ltuLegacyStyles.sass: ${error.messageFormatted}`)
        this.emit('end')
      }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.styles.ltuLegacy.dests[0]))
    .pipe(gulp.dest(config.styles.ltuLegacy.dests[1]))
    .pipe(gulp.src(config.styles.ltuLegacy.dests.filter(dest => dest.startsWith('./_site/'))))
    .pipe(server.stream({ match: '**/*.css' }))

}

async function scripts () {

  const bundle = await rollup({
    input: config.scripts.src,
    plugins: [
      rollupMulti(),
      rollupNodeResolve(),
      rollupBuble(),
      rollupUglify(),
    ]
  })

  await Promise.all(
    config.scripts.dests.map(dest => bundle.write({
      file: dest,
      format: 'iife',
      sourcemap: true
    }))
  )

  gulp.src(config.scripts.dests.filter(dest => dest.startsWith('./_site/')))
    .pipe(server.stream())
}

function jekyllBuild (done) {

  spawn(
    'bundle exec jekyll',
    [
      'build',
      '--config',
      config.jekyll.default
    ],
    {
      env: process.env,
      stdio: 'inherit'
    }
  )
  .on('close', reload)
  .on('exit', done)

}

function watch (done) {

  gulp.watch(config.styles.ltuPatterns.src, ltuPatternsStyles)
  gulp.watch(config.styles.ltuLegacy.src, ltuLegacyStyles)
  gulp.watch(config.scripts.src, scripts)
  gulp.watch(config.views, jekyllBuild)

  done()

}

exports.ltuPatternsStyles = ltuPatternsStyles
exports.ltuLegacyStyles = ltuLegacyStyles
exports.scripts = scripts
exports.build = gulp.series(clean, jekyllBuild, gulp.parallel(ltuPatternsStyles, ltuLegacyStyles, scripts))
exports.default = gulp.series(exports.build, watch, serve)
