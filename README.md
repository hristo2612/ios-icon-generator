# iOS Icon Generator

A command-line tool for generating iOS icon image sets. Output files will be resized to the following sizes: 16x16, 32x32, 64x64, 128x128, 256x256, 512x512, 1024x1024 and 2048x2048.

## Installation

1. Clone or download the repository.
2. Install the dependencies by running `npm install`.

## Usage

To generate an iOS icon image set, run the following command:

```node ios-icon.js <image>```

Replace `<image>` with the path to the input PNG image file.

Note that the input image should have a square aspect ratio ( otherwise it will be cropped & centered ) and be at least 2048 pixels in size to avoid distortion.

The output image files will be saved to the same directory as the input image file, with the format `<filename>-<size>x<size>.png`.

## Example

To generate an iOS icon image set for an image located at `/path/to/your/image.png`, run the following command:

```node ios-icon.js /path/to/your/image.png```

This will generate seven output files with the following names:
```
/path/to/your/image-16x16.png
/path/to/your/image-32x32.png
/path/to/your/image-64x64.png
/path/to/your/image-128x128.png
/path/to/your/image-256x256.png
/path/to/your/image-512x512.png
/path/to/your/image-1024x1024.png
/path/to/your/image-2048x2048.png
```

## License

This project is licensed under the MIT License.
