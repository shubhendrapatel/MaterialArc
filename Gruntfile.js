module.exports = function(grunt) {

  //loading Plugin's
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');


  //Configuration of Plugin's
  grunt.initConfig({
    scss:{
      dist:{
        files:[{
          cwd:'scss',
          src:'*.scss',
          dest:'../release/css',
          ext:'.css'
        }]
      }
    },
    cssmin:{
      target: {
        files: [{
          expand: true,
          cwd: '../release/css',
          src: ['*.css', '!*.min.css'],
          dest: '../release/css',
          ext: '.min.css'
        }]
      }
    },
    uglify:{
      target_file: {
      files: [{
          expand: true,
          cwd: 'js',
          src: '**/*.js',
          dest: '../release/js'
      }]
    }
    },
    jshint:{
      all: ['Gruntfile.js', 'js/*.js']
    },
    watch:{
      a:{
        files:['scss/*.scss' ],
        task:['scss']
      },
      b:{
        files:['js/*.js' ],
        task:['jshint']
      },
      options:{
        spawn:false
      }
    }
  });

  //Defining Task's
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', []);
};
