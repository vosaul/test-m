var gulp = require("gulp");
var shell = require("gulp-shell");
var browserSync = require("browser-sync").create();
var load = require("gulp-load-plugins")();
var autoprefixer = require("autoprefixer");
var sass = require("gulp-sass");
sass.compiler = require("node-sass");
var sassPaths = [
  "assets",
  "_sass",
];
const htmlmin = require("gulp-htmlmin");
const minify = require('gulp-minify');

/* compress JS files */
gulp.task('compressjs', function () {
  return gulp.src('_site/js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('_site/js'));
});

/* compress HTML files */
gulp.task("minify", () => {
  return gulp
    .src("_site/**/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      })
    )
    .pipe(gulp.dest("_site"));
});

/* compress CSS file */
gulp.task("sass", function () {
  return gulp
    .src("./_site/assets/main.css")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./_site/assets/"));
});

// Task for building blog when something changed:
gulp.task("jekyll", shell.task("jekyll build"));
gulp.task("jekyll-s", shell.task("jekyll serve"));
 
/* Build site */
gulp.task("default", gulp.series("jekyll", "minify", "compressjs", "sass"));
