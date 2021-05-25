const path = require("path");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: [
      "./src/main/main.js",
      "./src/js/fill.media.to.container.js",
      "./src/css/tailspin-all.scss",
      "./src/css/tailspin-helpers-animations.scss",
      "./src/css/tailspin-modifiers-margin-padding.scss",
      "./src/css/tailspin-modifiers-font-size.scss",
      "./src/css/tailspin-modifiers-border-radius.scss",
      "./src/css/tailspin-modifiers-opacity.scss",
      "./src/css/tailspin-modifiers-z-index.scss",
      "./src/css/tailspin-utilities.scss",
      "./src/css/tailspin-utilities-ratios.scss",
      "./src/css/tailspin-utilities-typography.scss"
  ],

  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, 'dist/dev/')
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              context: './',
              outputPath: '/css/',
              publicPath: 'dist/dev/css/'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true, 
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              minimize: false,
              outputStyle: 'nested',
            }
          },
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /main/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].js',
              context: './',
              outputPath: '/js/',
              publicPath: 'dist/dev/js/'
            }
          }
        ],
      },
    ],
  },

  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
};
