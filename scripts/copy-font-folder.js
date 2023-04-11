const fs = require('fs-extra');
const path = require('path');

const copyFontFolder = () => {
  fs.copy(path.join(__dirname, '..', 'src', 'font'), path.join(__dirname, '..', 'dist', 'font'));

  console.log('font folder is copied');
};

module.exports = copyFontFolder;
