const replaceSuffix = require('./replace-sass-suffix');
const copyPackageFile = require('./copy-package');
const copySassFolder = require('./copy-sass-folder');
const copyNpmrc = require('./copy-npmrc');
const copyFontFolder = require('./copy-font-folder');

try {
  copyPackageFile();
  copySassFolder();
  copyNpmrc();
  copyFontFolder();
  replaceSuffix();
} catch (e) {
  console.log(e);
}
