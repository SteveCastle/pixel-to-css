#!/usr/bin/env node

const imgJS = require("image-js");

// Helper function to convert R,G,B channels to a hex color value.
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const [file, SIZE, CLASS_NAME] = process.argv.slice(2);

async function getPixelArray() {
  const img = await imgJS.Image.load(file);


  // If there is an alpha layer we need to exclude transparent pixels.
  const hasAlpha = img.alpha
  const alpha = Boolean(hasAlpha) && img.getChannel(3);
  const alphaPixelArray = Boolean(hasAlpha) && alpha.getPixelsArray();

  const width = img.width;
  const height = img.height;
// getPixelsArray returns an Array of Arrays containing [R,G,B]
  const pixelArray = img.getPixelsArray();

  let classString = `.${CLASS_NAME}{\n  box-shadow:`


    // For every pixel in the image create a box-shadow entry at the correct position
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const iteration = i * width + j
      const x = (j + 1) * SIZE;
      const y = i * SIZE;
      if (!alpha || alphaPixelArray[iteration][0] !== 0) {
        const [r, g, b] = pixelArray[iteration];
        classString = classString + (`${x}px ${y}${y !== 0 ? "px" : ""} ${rgbToHex(r, g, b)}${iteration < pixelArray.length - 1 ? ",\n" : ""}`);
      }
    }
  }
  classString = classString + "};"

  // Return class string to STDOUT
  console.log(classString)
}

getPixelArray();
