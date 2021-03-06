/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'bower_components/Materialize/sass'
      ]
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/Materialize/dist/js/materialize.min.js');
  app.import('bower_components/Materialize/dist/font/roboto/Roboto-Regular.woff2', {
    destDir: 'font/roboto'
  });
  app.import('bower_components/Materialize/dist/font/roboto/Roboto-Regular.woff', {
    destDir: 'font/roboto'
  });
  app.import('bower_components/Materialize/dist/font/roboto/Roboto-Regular.ttf', {
    destDir: 'font/roboto'
  });
  app.import('bower_components/Materialize/dist/font/material-design-icons/Material-Design-Icons.woff2', {
    destDir: 'font/material-design-icons'
  });
  app.import('bower_components/Materialize/dist/font/material-design-icons/Material-Design-Icons.woff', {
    destDir: 'font/material-design-icons'
  });
  app.import('bower_components/Materialize/dist/font/material-design-icons/Material-Design-Icons.ttf', {
    destDir: 'font/material-design-icons'
  });

  app.import('bower_components/font-awesome/css/font-awesome.min.css');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', {
    destDir: 'fonts'
  });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', {
    destDir: 'fonts'
  });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', {
    destDir: 'fonts'
  });

  return app.toTree();
};
