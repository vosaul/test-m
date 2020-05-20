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

gulp.task("minify", () => {
  return gulp
    .src("_site/*/*.html")
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

gulp.task("sass", function () {
  return gulp
    .src("./_site/assets/main.css")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./_site/assets/"));
});

// Task for building blog when something changed:
gulp.task("jekyll", shell.task("bundle exec jekyll build"));
gulp.task("jekyll-s", shell.task("bundle exec jekyll serve"));
// If you don't use bundle:
// gulp.task('build', shell.task(['jekyll serve']));
// If you use  Windows Subsystem for Linux (thanks @SamuliAlajarvela):
// gulp.task('build', shell.task(['bundle exec jekyll serve --force_polling']));
 
// Task for serving blog with Browsersync

gulp.task("serve", function () {
//    browserSync.init({
//    server: { baseDir: "./" },
//    ui: { port: 4001 },
//    port: 4000,
//  });
//  gulp.watch("_site/**/*.*").on("change", browserSync.reload);
});
/* gulp.task("sass", sass); */
gulp.task("build", gulp.series("jekyll", "sass"));
gulp.task("default", gulp.parallel("jekyll-s", "serve"));
