const Jimp = require('jimp');

async function removeBackground(file) {
  try {
    const filePath = `./src/assets/${file}`;
    const image = await Jimp.read(filePath);
    
    // The background color from top-left pixel
    const bgColor = image.getPixelColor(0, 0);
    const { r, g, b } = Jimp.intToRGBA(bgColor);
    
    console.log(`[${file}] Background color detected: rgba(${r}, ${g}, ${b})`);
    
    // Tolerance for matching color
    const tolerance = 25;
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const pR = this.bitmap.data[idx + 0];
      const pG = this.bitmap.data[idx + 1];
      const pB = this.bitmap.data[idx + 2];
      
      const diffR = Math.abs(pR - r);
      const diffG = Math.abs(pG - g);
      const diffB = Math.abs(pB - b);
      
      if (diffR < tolerance && diffG < tolerance && diffB < tolerance) {
        this.bitmap.data[idx + 3] = 0; // set alpha = 0 (transparent)
      }
    });

    await image.writeAsync(filePath);
    console.log(`[${file}] Background removed successfully!`);
  } catch (err) {
    console.error(`[${file}] Error processing image:`, err);
  }
}

async function run() {
  await removeBackground('illustration1.png');
  await removeBackground('illustration2.png');
}

run();
