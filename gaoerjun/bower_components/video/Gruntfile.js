module.exports = function(grunt) {
    "use strict";

    var banner = '/** \n' +
        '* Video - v<%= pkg.version %>.\n' +
        '* <%= pkg.repository.url %>\n' +
        '* Copyright <%= grunt.template.today("yyyy") %>. Licensed MIT.\n' +
        '*/\n';

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: ['dist'],
        copy: {
            all: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/sinonjs',
                        dest: 'libs/sinon',
                        src: ['sinon.js']
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/qunit/qunit',
                        dest: 'libs/qunit',
                        src: ['qunit.js', 'qunit.css']
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/underscore',
                        dest: 'libs/underscore',
                        src: ['underscore.js']
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/element-kit/dist',
                        src: ['element-kit.js'],
                        dest: 'libs/element-kit'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/requirejs',
                        src: ['require.js'],
                        dest: 'libs/requirejs'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['video.js'],
                        dest: 'dist'
                    }
                ]
            }
        },
        uglify: {
            all: {
                files: {
                    'dist/video.min.js': ['dist/video.js']
                }
            }
        },
        connect: {
            test: {
                options: {
                    hostname: 'localhost',
                    port: 7000
                }
            },
            local: {
                options: {
                    options: { livereload: true }
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/video.js'],
                tasks: ['copy:all'],
                options: {
                    spawn: false
                }
            }
        },
        qunit: {
            local: {
                options: {
                    urls: [
                        'http://localhost:7000/tests/index.html'
                    ]
                }
            }
        },
        release: {
            options: {
                additionalFiles: ['bower.json'],
                tagName: 'v<%= version %>',
                commitMessage: 'release <%= version %>',
                npm: false
            }
        },
        usebanner: {
            all: {
                options: {
                    banner: banner,
                    linebreak: false
                },
                files: {
                    src: [
                        'dist/**/*'
                    ]
                }
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                commit: false,
                createTag: false,
                push: false,
                updateConfigs: ['pkg']
            }
        }
    });

    // Load grunt tasks from node modules
    require( "load-grunt-tasks" )( grunt , {
        loadGruntTasks: {
            pattern: 'grunt-*'
        }
    });

    grunt.task.registerTask('release', 'A custom release.', function(type) {
        type = type || 'patch';
        grunt.task.run([
            'bump:' + type,
            'build'
        ]);
    });

    grunt.registerTask( "build-files", [
        "clean",
        "copy:all",
        "uglify",
        "usebanner:all"
    ]);

    // Default grunt
    grunt.registerTask( "build", [
        "build-files",
        "test"
    ]);

    grunt.registerTask( "server", [
        "build-files",
        "connect:local",
        "watch"
    ]);

    grunt.registerTask( "test", [
        "connect:test",
        "qunit"
    ]);

};