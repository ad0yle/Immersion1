module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            livereload: {
                cwd: 'public/',
                files: ['public/index.html', '!public/components/**', 'public/js/**/*.js', 'public/css/**/*.css', 'public/app/**/*'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            app: {
                options: {
                    port: 9000,
                    base: './public',
                    open: true,
                    livereload: true,
                    hostname: '127.0.0.1'
                }
            }
        },
        clean: {
            dist: ["dist/**"]
        },
        copy: {
            app: {
                expand: true,
                cwd: 'public/',
                src: ['app/**', 'js/**', 'img/**', 'css/**', 'less/**'], 
                src: ['app/**', 'js/**', 'img/**', 'css/**', 'less/**'], 
                dest: 'dist/'
            },
            components: {
                cwd: 'public/',
                expand: true, 
                src: ['components/**'], 
                dest: 'dist/'
            },
            index: {
                expand: true,
                cwd: 'public/',
                src: 'index.html',
                dest: 'dist/',
                options: {
                    process: function (content, srcpath) {
                        return content.replace(/<script src=\"\/\/localhost:35729\/livereload.js\"><\/script>/gi,'');
                    }
                }
            },
            docs_dist: {
                cwd: 'dist/',
                expand: true, 
                src: ['docs/**'], 
                dest: 's3-dist/'
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip',
                    level: 9
                },
                expand: true,
                cwd: 'dist/',
                src: ['**/*'],
                dest: 's3-dist/',
            }
        }
    });

    grunt.registerTask('default', ['connect:app', 'watch']);
    grunt.registerTask('dist-comp', ['copy:components']);
    grunt.registerTask('dist', ['clean:dist', 'copy:components', 'copy:app', 'copy:index', 'compress']);
    grunt.registerTask('publish', ['dist']);
};
