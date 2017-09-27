// Requirejs Configuration Options
require.config({
  // to set the default folder
  baseUrl: '../src', 
  // paths: maps ids with paths (no extension)
  paths: {
      'jasmine': ['../tests/lib/jasmine'],
      'jasmine-html': ['../tests/lib/jasmine-html'],
      'jasmine-boot': ['../tests/lib/boot'],
      'text': '../vendor/requirejs-text-2.0.15/text',
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
      'mustache': 'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min'
  },
  // shim: makes external libraries compatible with requirejs (AMD)
  shim: {
    'jasmine-html': {
      deps : ['jasmine']
    },
    'jasmine-boot': {
      deps : ['jasmine', 'jasmine-html']
    }
  }
});

require(['jasmine-boot'], function () {
  require(['../tests/my-library-specs'], function(){
    //trigger Jasmine
    window.onload();
  })
});