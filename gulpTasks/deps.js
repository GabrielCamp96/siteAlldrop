const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.js'
    ])
        .pipe(babel({ presets:['env'] })) 
        .pipe(uglify())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('build/js'))
})

gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/@fortawesome/@fortawesome-free/css/all.css'
    ])
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/css'))
    })

gulp.task('deps.fonts', () => {
    return gulp.src([
      'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf',  
      'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf',
    ])
        .pipe(gulp.dest('build/webfonts'))
})