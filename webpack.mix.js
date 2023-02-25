const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/dashboard/panel.js', 'public/js/dashboard')
    // .js('resources/js/theme/app.js', 'public/js')
    //.js('resources/js/Dashboard.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
