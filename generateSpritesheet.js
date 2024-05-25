const path = require('path');
const Spritesmith = require('spritesmith');
const fs = require('fs');

// Define the source and target paths
const srcPath = path.resolve(__dirname, 'assets_src/scenes/bedroom/graphics');
const destImagePath = path.resolve(__dirname, 'src/assets/spritesheet.png');
const destCssPath = path.resolve(__dirname, 'src/assets/spritesheet.json');

// Read the source directory to get all image files
fs.readdir(srcPath, (err, files) => {
  if (err) {
    console.error(`Error reading source directory: ${err.message}`);
    return;
  }

  const imageFiles = files.filter(file => /\.(png|jpg|jpeg)$/.test(file)).map(file => path.join(srcPath, file));

  // Generate the sprite sheet
  Spritesmith.run({ src: imageFiles }, (err, result) => {
    if (err) {
      console.error(`Error generating sprite sheet: ${err.message}`);
      return;
    }

    // Write the resulting image and CSS files
    fs.writeFileSync(destImagePath, result.image);
    fs.writeFileSync(destCssPath, JSON.stringify(result.coordinates, null, 2));

    console.log('Sprite sheet generated successfully!');
  });
});
