# SonnY WebFont Boilerplate

## SVG to webfont converter using grunt-webfont

## Installation

This plugin requires Grunt 0.4. Note that ttfautohint is optional, but your generated font will not be properly hinted if it’s not installed. And make sure you don’t use ttfautohint 0.97 because that version won’t work.

    brew install ttfautohint fontforge --with-python
    npm install

Put all the source icon files in `src/icons` and run `grunt` for generating an iconfont inside the `build` folder
