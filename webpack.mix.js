const mix = require('laravel-mix')

mix.setPublicPath('./')

mix
  .copy('resources/img', 'public/statics/img')
  .js('resources/js/main.js', 'public/statics/js')
  .sass('resources/sass/main.scss', 'public/statics/css')
