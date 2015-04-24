var gulp        = require('gulp'),
	sass        = require('gulp-sass'),
	sourcemaps  = require('gulp-sourcemaps'),
	concat      = require('gulp-concat'),
	browserSync = require('browser-sync'),
	reload      = browserSync.reload,
	manifest    = require('asset-builder')('./assets/manifest.json'),
	config      = manifest.config || {};
	path        = manifest.paths;

// Gulp Sass Task 
gulp.task('sass',function() {
	var css = manifest.getDependencyByName('main.css');

	gulp.src(css.globs)
		.pipe(sourcemaps.init())
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./css'))
		.pipe(reload({stream:true}));;
});

gulp.task('js',  function() {
	var js = manifest.getDependencyByName('front.js');
	console.log(js.globs);
	gulp.src(js.globs)
		.pipe(concat(js.name))
//		.pipe(minify())
		.pipe(gulp.dest(manifest.paths.dist+'js'))
		.pipe(reload({stream:true}));
});

gulp.task('watch', ['sass','js'], function() {
	browserSync({
		proxy: config.devUrl
	});
	gulp.watch([path.source + 'scss/**/*'], ['sass']);
	gulp.watch([path.source + 'scripts/**/*'], ['js']);
console.log(path.source);
	gulp.watch("templates/**/*.ss").on('change', reload);

});

gulp.task('default', ['watch']);