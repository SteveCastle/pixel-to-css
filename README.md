# Pixel to CSS

pixel-to-css is a CLI utility that given a png file will return a CSS class with a box-shadow rule that can render each pixel in the image when attached to a single element.

## Demo
For an example of the designs you can create with this tool, here's a Code Sandbox using the output from two different sprite files.
https://codesandbox.io/s/pixel-art-with-just-css-box-shadow-89rnk

## Usage

`npm -g install pixel-to-css`

The CLI tool takes the following arguments:
1. Path to a PNG image.
2. The size in pixels you want each pixel to be in the resulting css.
3. A className to use for the class.
`pixel-to-css image.png 50 myClassName`

## About

This package depends on the `image-js` package to process images.
