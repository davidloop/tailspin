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
    path: path.resolve(__dirname, 'dist/prod/')
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
              name: '[name].min.css',
              context: './',
              outputPath: '/css/',
              publicPath: 'dist/prod/css/'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: true,
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
              name: 'tailspin-[name].js',
              context: './',
              outputPath: '/js/',
              publicPath: 'dist/prod/js/'
            }
          }
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ['default',
            {
              discardComments: {
                removeAll: true
              },
            },
          ],
        },
      }),
    ],
  },

  watch: false,
};
