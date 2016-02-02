module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    webfont: {
      icons: {
        src: 'src/icons/*.svg',
        dest: 'build/fonts'
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);
  };
