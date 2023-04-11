const fs = require('fs');
const path = require('path');

const copyPackageFile = () => {
  fs.copyFileSync(
    path.join(__dirname, '..', 'package.json'),
    path.join(__dirname, '..', 'dist', 'package.json')
  );

  console.log('package.json is copied');
};

module.exports = copyPackageFile;
