module.exports = {
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('postcss-extend-rule'),
    require('postcss-nested'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' ? require('cssnano') : false
  ]
}; 