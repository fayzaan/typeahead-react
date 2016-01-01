var gulp = require( 'gulp' );
var babel = require( 'gulp-babel' );

gulp.task( 'default', function () {
	return gulp.src( 'typeahead-react.jsx' )
		.pipe( babel( { presets: [ 'react', 'es2015' ] } ) )
		.pipe( gulp.dest( './' ) )
		.pipe( gulp.dest( 'example' ) );
} );