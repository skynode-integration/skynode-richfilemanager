module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'compressed',
                includePaths: [
                    'src/css',
                    'libs'
                ]
            },
            dist: {
                files: {
                    'src/css/libs-main.css': 'src/scss/libs-main.scss',
                    'src/css/filemanager.min.css': 'src/css/filemanager.css'
                }
            }
        },
        uglify: {
            options: {
                beautify: true,//インデントやスペース入りでだすかどうか。
                mangle: false,//変数置換
                compress: false,//圧縮するかどうか。
                sourceMap: true//ソースマップを出力するか。                
            },
            main: {
                files: {
                    // lazyLoad script was modified to support IE9 & IE10
                    'libs/lazyload/dist/lazyload.min.js': ['libs/lazyload/dist/lazyload.js'],
                    'src/js/filemanager.min.js': ['src/js/filemanager.js'],
                    'src/js/libs-main.js': [
            //            'libs/jquery-1.11.3.min.js',
                        'libs/skylark-jquery-all.js',
                        <!-- drag&drop + selectable build (includes customizations for RichFilemanager) -->
//                        'libs/jquery-ui/jquery-ui.js',
                        'libs/jquery-ui/skylark-jqueryui.js',
                        'libs/jquery-browser.js',
                        'libs/knockout-3.4.0.js',
                        'libs/jquery-mousewheel/jquery.mousewheel.js',
                        'libs/jquery.splitter/dist/jquery-splitter.js',
                        'libs/jquery.contextmenu/dist/jquery.contextMenu.js',
                        'libs/alertify.js/dist/js/alertify.js',
                        'libs/clipboard.js/dist/clipboard.js',
                        'libs/jquery.fileDownload/jquery.fileDownload.js',
                        'libs/javascript-templates/js/tmpl.js',
                        'libs/toast/lib/toast.js',
                        'libs/cldrjs/cldr.js',
                        'libs/cldrjs/cldr/event.js',
                        'libs/cldrjs/cldr/supplemental.js',
                        'libs/globalizejs/globalize.js',
                        'libs/globalizejs/globalize/number.js',
                        'libs/globalizejs/globalize/date.js',
                        'libs/purl/purl.js'
                    ],
                    'src/js/libs-fileupload.js': [
                        'libs/jQuery-File-Upload/js/vendor/jquery.ui.widget.js',
                        'libs/jQuery-File-Upload/js/canvas-to-blob.js',
                        'libs/jQuery-File-Upload/js/load-image.all.js',
                        'libs/jQuery-File-Upload/js/jquery.iframe-transport.js',
                        'libs/jQuery-File-Upload/js/jquery.fileupload.js',
                        'libs/jQuery-File-Upload/js/jquery.fileupload-process.js',
                        'libs/jQuery-File-Upload/js/jquery.fileupload-image.js',
                        'libs/jQuery-File-Upload/js/jquery.fileupload-validate.js'
                    ]
                }
            }
        }

    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');

    // default tasks
    grunt.registerTask('default', ['uglify', 'sass']);
};
