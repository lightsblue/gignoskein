// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'src',
    paths: {
        'app': '../app',      
        'text': '../vendor/requirejs-text-2.0.15/text',
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        'mustache': 'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main']);