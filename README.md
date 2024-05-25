# EduEscapeRoom
Setup Instructions
Prerequisites
Node.js and npm installed. Download and install Node.js
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/TashiiDesign/EduEscapeRoom.git
cd EduEscapeRoom
Install the dependencies:

sh
Copy code
npm install
Install additional development dependencies:

sh
Copy code
npm install copy-webpack-plugin spritesmith-webpack-plugin --save-dev
Webpack Configuration
Ensure your webpack.config.js is set up to copy assets and generate spritesheets:

javascript
Copy code
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SpritesmithPlugin = require('spritesmith-webpack-plugin');

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
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets_src/scenes', to: 'src/assets/scenes' },
        { from: 'assets_src/ui', to: 'src/assets/ui' },
        { from: 'assets_src/music', to: 'src/assets/music' },
        { from: 'assets_src/fonts', to: 'src/assets/fonts' },
        { from: 'assets_src/common.json', to: 'src/assets/common.json' },
      ],
    }),
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, 'assets_src/scenes/bedroom/graphics'),
        glob: '*.png',
      },
      target: {
        image: path.resolve(__dirname, 'src/assets/spritesheet.png'),
        css: path.resolve(__dirname, 'src/assets/spritesheet.json'),
      },
      apiOptions: {
        cssImageRef: 'src/assets/spritesheet.png',
      },
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
Usage
Build and Run
To build and run the project, use the following commands:

sh
Copy code
npm run build   # This will build your project and copy assets
npm start       # This will start the development server
Example Phaser Scene
Here’s an example of how to set up a Phaser scene:

src/js/scenes/BedroomScene.js:

javascript
Copy code
import Phaser from 'phaser';

class BedroomScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BedroomScene' });
    }

    preload() {
        // Load the spritesheet and JSON file
        this.load.atlas('bedroomSprites', 'assets/spritesheet.png', 'assets/spritesheet.json');
        // Load other assets
        this.load.audio('backgroundMusic', 'assets/scenes/bedroom/sounds/background_music.mp3');
    }

    create() {
        // Example usage of a sprite from the spritesheet
        this.add.sprite(100, 100, 'bedroomSprites', 'sprite1');

        // Play background music
        this.sound.add('backgroundMusic').play();
    }
}

export default BedroomScene;