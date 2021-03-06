var gulp = require('gulp'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    sourceMaps = require('gulp-sourcemaps'),
    amdOptimize = require('gulp-requirejs'),
    uglify = require('gulp-uglify'),
    replace = require('gulp-replace'),
    rename = require("gulp-rename"),
    util = require('../utils'),
     fs = require('fs');


var src = [util.src +  "**/*.js"];

var dest = util.dest;


var dest = util.dest;

var requireConfig = {
    baseUrl: util.src,
    out : util.pkg.name + ".js",
    packages : [{
       name : util.pkg.name ,
       location :  util.src

    }],
    paths: {
    },

    include: [
        util.pkg.name + "/main"
    ],
    exclude: [
    ]
};




module.exports = function() {
    var p =  new Promise(function(resolve, reject) {
        gulp.src(src)
            .pipe(sourceMaps.init())
            .pipe(uglify())
            .on("error", reject)
            .pipe(header(util.banner, {
                pkg: util.pkg
            }) )
            .pipe(sourceMaps.write("sourcemaps"))
            .pipe(gulp.dest(dest+util.pkg.name))
            .on("end",resolve);
    });

    return p.then(function(){
        return amdOptimize(requireConfig)
            .pipe(sourceMaps.init())
            .pipe(header(fs.readFileSync(util.allinoneHeader, 'utf8')))
            .pipe(footer(fs.readFileSync(util.allinoneFooter, 'utf8')))
            .pipe(uglify())
            .pipe(header(util.banner, {
                pkg: util.pkg
            })) 
            .pipe(sourceMaps.write("sourcemaps"))
            .pipe(gulp.dest(dest));

    });

};
