module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    clean: {
      build: ['build'],
    },

    webfont: {
      icons: {
        src: 'src/icons/*.svg',
        dest: 'build/sonny-webfonts',
        destCss: 'build',
        options: {
          hashes: false,
          font: 'sonny-webfonts',
          types: 'eot,woff2,woff,ttf,svg',
          templateOptions: {
            baseClass: 'sonny-icon',
            classPrefix: 'sonny_',
            mixinPrefix: 'sonny-'
          },
          htmlDemoFilename: 'demo',
          destHtml: 'build'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'webfont']);
  };
