/* Generated for AllTheTheme */
module.exports = function (grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  var appConfig = {
    src: require('./bower.json').appPath || '../..',
    root: 'http://localhost:8888/wpPoly/',
    name: require('./bower.json').name || 'allthetheme'
  };

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    app: appConfig,

    //watch
    watch: {
      css: {
        files: '../src/scss/**/*.scss',
        tasks: ['sass:dev', 'autoprefixer', 'notify:sassDone'],
        
      },
      js: {
        files: '../src/js/**/*.js',
        tasks: ['concat'],
      },
      php: {
        files: '../../**/*.php',
        
      },
      images: {
        files: '../src/images/**/*.{png,jpg,gif,svg}',
        tasks: ['copy:images'],
      },
      fonts: {
        files: '../src/fonts/**/*',
        tasks: ['copy:fonts'],
      },
      bower: {
        files: './bower.json',
        tasks: ['wiredep']
      },
      'polymer': {
        files: '../src/polymer/**/*',
        tasks: ['vulcanize'],
      },
    },
    // end watch
    wiredep: {

      task: {
        src: [
          '<%= app.src %>/header.php',
        ]
      }
    },
    //end wiredep
    
    //sass
    sass: { // Task
      dev: { // Target
        options: { // Target options
          style: 'expanded',
          //sourcemap: true,
        },
        files: { // Dictionary of files
          '../../static/css/style.css': '../src/scss/style.scss',
        }
      },
      dist: { // Target
        options: { // Target options
          style: 'expanded',
        },
        files: { // Dictionary of files
          '../../static/css/style.css': '../src/scss/style.scss',
        }
      }
    },
    // end sass
    
    //auto prefixer
    autoprefixer: {
      options: {
        browsers: ['last 8 version', 'ie 8', 'ie 7']
      },
      // just prefix the specified file
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: '../../static/css/style.css',
        dest: '../../static/css/style.css'
      }
    },
    //end auto prefixer
    //css min
    cssmin: {
      minify: {
        expand: true,
        cwd: '../../static/css',
        src: ['../../static/css/style.css'],
        dest: '../../static/css',
        ext: '.css',
        report: 'gzip'
      }
    },
    // end ccs min
    concat: {
      js: {
        options: {
          'separator': ';',
        },
        src: ['../src/js/**/*.js'],
        dest: '../../static/js/build.js',
      },
    },
    //end concat
    
    //notify
    notify: {
      done: {
        options: {
          title: 'Done!', // optional
          message: 'Whatever you were doing is done!', //required
        }
      },
      distStart: {
        options: {
          title: ' Prepping for distribution!', // optional
          message: 'Get ready for the awesome...', //required
        }
      },
      distDone: {
        options: {
          title: "All packaged up!", // optional
          message: "AllTheTheme is ready to be distributed ", //needed escaping!
        }
      },
      sassDone: {
        options: {
          title: ' Ta-da!!!', // optional
          message: 'Sass has compiled successfully ', //required
        }
      },
      initStart: {
        options: {
          title: 'Initializing project', // optional
          message: '...', //required
        }
      },
      initDone: {
        options: {
          title: 'Initialization done!', // optional
          message: 'Run : "grunt watch" and get to work!', //required
        }
      },
    },
    //endnotify
    //Bower copy
    bowercopy: {
      js: {
        options: {
            destPrefix: '../src/js/'
        },
        files: {
            'modernizr.js': 'modernizr/modernizr.js',
            'webcomponents-lite.js': 'webcomponentsjs/webcomponents-lite.min.js',
            'bootstrap': 'bootstrap-sass/assets/javascripts/',

        }
      },
      css: {
        options: {
          destPrefix: '../src/scss/'
        },
        files: {
          'bootstrap': 'bootstrap-sass/assets/stylesheets',
        }
      }
    },
    //end Bower copy
    //copy
    copy: {
      css: {
        files: [
          {expand: true, cwd: '../src/css/', src: ['*.css'], dest: '../../static/css/', filter: 'isFIle'},
        ]
      },
      js: {
        files: [
          // includes files within path
          {expand: true, cwd: '../src/js', src: ['build.js'], dest: '../../static/js', filter: 'isFile'},
        ]
      },
      images: {
        files: [
          // includes files within path
          {expand: true, cwd: '../src/images', src: ['**/*.{png,jpg,gif,svg}'], dest: '../../static/images', filter: 'isFile'},
        ]
      },
      fonts: {
        files: [
          // includes files within path
          {expand: true, cwd: '../src/fonts', src: ['**/*'], dest: '../../static/fonts', filter: 'isFile'},
        ]
      }
    },
    //end copy
    
    //Image min
    imagemin: {                         
      dynamic: {                         
        files: [{
          expand: true,                  
          src: ['../../static/images/**/*.{png,jpg,gif}'],
          dest: '../../static/images'
        }]
      }
    },
    //end image min
    vulcanize: {
       default: {
         option: {
         },
         files: {
           '../../buld-elements.html': ['../src/polymer/elements.html']
         },
       },
     },
     //end vulcanize
    
  }); //end grunt package configs

  //Add library
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-vulcanize');
  
  //Asset pipelines
  grunt.registerTask('prepJS',     [ 'copy:js' ]);
  grunt.registerTask('prepStyles', [ 'sass:dist', 'autoprefixer', 'cssmin' ]);
  grunt.registerTask('prepImages', [ 'copy:images', 'imagemin:dynamic' ]);
  grunt.registerTask('prepFonts',  [ 'copy:fonts' ]);


  //RUN ON START
  grunt.registerTask('init',       ['notify:initStart', 'wiredep', 'bowercopy', 'copy:css', 'copy:images', 'sass:dev', 'vulcanize', 'concat', 'notify:initDone']);

  //RUN FOR PRODUCTION 
  grunt.registerTask('prod',       ['notify:distStart', 'bowercopy', 'prepJS', 'prepImages', 'prepStyles', 'prepFonts', 'compress:production', 'notify:distDone']);
  
  //DEFAULT
  grunt.registerTask('default', []);

  //SERVE
  grunt.registerTask('serve', ['init', 'watch']);

};
