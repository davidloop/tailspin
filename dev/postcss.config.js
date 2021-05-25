module.exports = {
  plugins: {
    'postcss-pixels-to-rem': {
      rootValue: 16,
    },

    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
  },
};
