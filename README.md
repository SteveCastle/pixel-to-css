# Pixel to CSS

pixel-to-css is a CLI utility that given a png file will return a CSS class with a box-shadow rule that can render each pixel in the image when attached to a single element.


## Usage

`npm -g install pixel-to-css`

The CLI tool takes the following arguments:
1. Path to a PNG image.
2. The size in pixels you want each pixel to be in the resulting css.
3. A className to use for the class.
`pixel-to-css image.png 50 myClassName`

## About

This package depends on the `image-js` package to process images.