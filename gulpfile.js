const gulp = require('gulp');
const { src, dest } = require('gulp');
const shell = require('gulp-shell');
const inject = require('gulp-inject-string');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');
const gulpCopy = require('gulp-copy');
const minimist = require('minimist');
const _ = require('lodash');

const knownOptions = {
  string: ['system'],
  default: {
    v: '',
  },
};
const options = minimist(process.argv.slice(2), knownOptions);

const buildStyles = () => {
  return src('./src/components/**/*.scss')
    .pipe(inject.prepend('@import "../../style/resource.scss";'))
    .pipe(sass({ includePaths: ['./node_modules'] }))
    .pipe(cleanCSS())
    .pipe(dest('./dist/components'));
};

const replaceTemplate = () => {
  return src('./dist/components/**/*.js')
    .pipe(replace('.scss', '.css'))
    .pipe(dest('./dist/components'));
};

const copyAssets = () => {
  return src('./src/font/**/*').pipe(dest('./dist/font'));
};
const copyPackage = () => {
  return src('./package.json').pipe(dest('./dist'));
};

const replaceIndex = () => {
  return src('./dist/index.js').pipe(replace('.scss', '.css')).pipe(dest('./dist/'));
};

const copyScss = () => {
  return src('./src/style/*.scss').pipe(dest('./dist/style/scss'));
};

gulp.task(
  'do-version',
  shell.task(_.isEmpty(options.v) ? `npm version patch` : `npm version ${options.v}`)
);

gulp.task('post-version', shell.task(`git push`));

gulp.task('version', gulp.series('do-version', 'post-version'));

gulp.task('clean', shell.task('npm run clean'));

gulp.task('tsc', shell.task('npm run build-ts'));

gulp.task('build-base-scss', shell.task('webpack'));

gulp.task('buildStyles', buildStyles);

gulp.task('replaceTemplate', replaceTemplate);

gulp.task('copyAssets', copyAssets);

gulp.task('copyPackage', copyPackage);

gulp.task('replaceIndex', replaceIndex);

gulp.task('copyScss', copyScss);

gulp.task(
  'default',
  gulp.series(
    'clean',
    'tsc',
    'build-base-scss',
    'buildStyles',
    'replaceTemplate',
    'copyAssets',
    'replaceIndex',
    'copyPackage',
    'copyScss'
  )
);
