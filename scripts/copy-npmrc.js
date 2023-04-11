const fs = require('fs');
const path = require('path');

const copyNpmrcFile = () => {
  fs.copyFileSync(
    path.join(__dirname, '..', '.npmrc'),
    path.join(__dirname, '..', 'dist', '.npmrc')
  );

  console.log('.npmrc is copied');
};

module.exports = copyNpmrcFile;
