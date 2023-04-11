const path = require('path');
const glob = require('glob');
const replace = require('replace-in-file');

const replaceConfig = {
  //Replacement to make (string or regex)
  from: /\.scss/g,
  to: '.css',
};

const replaceSuffix = async (targetFolder = 'dist') => {
  const target = path.join(__dirname, '..', targetFolder, '/**/*.js');

  glob(target, (err, files) => {
    replace.sync({ ...replaceConfig, files });

    console.log('scss imports are replaced');
  });
};

module.exports = replaceSuffix;
