# postcss-pixels-to-rem

`postcss-pixels-to-rem` is a PostCSS plugin that converts items sized in pixels in CSS code to either rems or ems.

It will convert several types of CSS notation. It is designed to be versatile by doing basic `px to rem` conversion and also to work with legacy code that was written against the deprecated [`Pixels to Rems`][3] and [`Pixels to Ems`][2] Sass functions from [Bourbon][1]. It converts the notations `rem(<value>)` to `rems` and `em(<value>)` to `ems`. It also converts `<value>px` code to `rems` or `ems`.

In `postcss-pixels-to-rem` default mode, an input of:

    h1 {
        font-size: rem(32);
    }
    h2 {
        font-size: em(24):
    }
    p {
        font-size: 16px;
    }

will result in an output of:   

    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.5em:
    }
    p {
        font-size: 1em;
    }


## Installation and use

postcss-pixels-to-rem requires [PostCSS][4] to be installed. To install postcss-pixels-to-rem:

``$ npm install --save-dev postcss-pixels-to-rem``

In gulpfile.js

    var postcss = require('gulp-postcss')
    var pixelstorem = require('postcss-pixels-to-rem');

Gulp task:

    gulp.task('css', function() {
        var plugins = [
            pixelstorem()
        ];      
    gulp.src('source/sass/styles.scss')
    .pipe(postcss(plugins))
    .pipe(gulp.dest(public/css));
    });


## Defaults

* Default base for conversion is `1rem = 16px`.
* Default output for `rem(<value>)`is `rem`.
* DEfault output for `em(<value>)` is `em`.
* Default output unit for `<value>px` is `rem`.
* Default is to convert values in media queries.

## Options

`postcss-pixels-to-rem` accepts optional settings that override default settings.

    gulp.task('css', function() {
        var plugins = [
          pixelstorem({
            base: <value>,
            unit: "rem" or "em",
            exclude: ["declaration"]
          })
        ];
        gulp.src('source/sass/styles.scss')
        .pipe(postcss(plugins))
        .pipe(gulp.dest(public/css));
    });

Optional values:
* `base: <value>` - Accepts a unitless value. Resets the base font size for conversion to rems or ems.
* `unit: "rem" or "em"` - Accepts unit value of either `"rem"` or `"em"` as a string. All items will be output in the unit value set here, including values set by `rem(<value>)` or `em(<value>)` notation.
* `exclude: ["declaration"]` - any declaration type to exclude from conversion, eg, `border`, `border-radius`, etc. These declarations will be excluded globally.
* `mediaQueries: boolean` Setting this to `false` prevents conversion of values in media queries. Default value is `true`.


[1]: http://bourbon.io/
[2]: http://bourbon.io/docs/#px-to-em
[3]: http://bourbon.io/docs/#px-to-rem
[4]: http://postcss.org/
