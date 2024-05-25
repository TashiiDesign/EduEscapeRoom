const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: 'assets_src/scenes', to: 'src/assets/scenes' },
    //     { from: 'assets_src/ui', to: 'src/assets/ui' },
    //     { from: 'assets_src/music', to: 'src/assets/music' },
    //     { from: 'assets_src/fonts', to: 'src/assets/fonts' },
    //     { from: 'assets_src/common.json', to: 'src/assets/common.json' },
    //   ],
    // }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
};
