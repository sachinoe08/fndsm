const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = () => {
  return {
    mode: 'production',
    entry: './src/style/design-system.scss',
    output: {
      path: __dirname + '/dist/style/',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()],
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'design-system.css' }),
      new IgnoreEmitPlugin(/\.js|js.map$/),
    ],
  };
};
