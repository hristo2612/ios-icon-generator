const sharp = require('sharp');
const path = require('path');
const chalk = require('chalk');

const [, , imagePath] = process.argv;

if (!imagePath) {
  console.error(`${chalk.cyan('Usage:')} node ios-icon.js <image>`);
  process.exit(1);
}

const { dir, name } = path.parse(imagePath);
const outputPath = path.join(dir, name);
const sizes = [16, 32, 64, 128, 256, 512, 1024, 2048];
const promises = sizes.map((size) => {
  console.log(chalk.yellow(`${outputPath}-${size}x${size}.png`));
  return sharp(imagePath)
    .resize(size, size)
    .toFile(`${outputPath}-${size}x${size}.png`);
});
Promise.all(promises)
  .then(() => {
    console.log(chalk.green('All images resized successfully!'));
  })
  .catch((err) => {
    console.error(chalk.red('Failed to resize images:'), err);
  });
