/* jshint node: true */
'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    less: {
      options: {
        paths: [
          'app/resources',
          'node_modules/bootstrap/less'
        ]
      },

      separate: {
        files: {
          'styles.css': 'app/resources/styles.less',
          'plugins.css': 'path/**/*.less'
        }
      },

      combined: {
        files: {
          'combined.css': [
            'app/resources/styles.less',
            'path/**/*.less'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', ['less']);
};
