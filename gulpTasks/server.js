const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
const browserSync = require('browser-sync')

gulp.task('monitorarMudancas', () => {
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.css', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/img/**/*.*', () => gulp.start('app.imgs'))
    watch('src/fonts/**/*.*', () => gulp.start('app.fonts'))
    watch('src/**/*.*', () => {
        browserSync.reload()
    })
})

gulp.task('servidor', ['monitorarMudancas'], () => {
    browserSync.init({
        server: {
            baseDir:'./build'
        }
    })
})
