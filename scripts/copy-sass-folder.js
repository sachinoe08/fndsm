const fs = require('fs-extra');
const path = require('path');

const copySassFolder = () => {
  fs.copySync(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'scss'), path.join(__dirname, '..', 'dist', 'style', 'scss', 'bootstrap', 'scss'));
  fs.copySync(path.join(__dirname, '..', 'src', 'style'), path.join(__dirname, '..', 'dist', 'style', 'scss'));


  console.log('sass folder is copied');
};

module.exports = copySassFolder;
