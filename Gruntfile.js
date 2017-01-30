module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'node_modules/jquery/dist/jquery.js',  
                    'node_modules/angular/angular.js'  
                ],
                dest: 'assets/js/libs.js',
            }
        },
        uglify: {
            build: {
                src: 'assets/js/prod.js',
                dest: 'assets/js/prod.min.js'
            }
        },
        uglify: {
            build: {
                src: 'assets/js/libs.js',
                dest: 'assets/js/libs.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['assets/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
   // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //grunt.registerTask('default', ['concat',  'uglify', 'watch', 'sass']);
    grunt.registerTask('default', ['concat',  'uglify', 'watch']);

};