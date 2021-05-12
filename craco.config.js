const jsonLoader = require('json-loader')

module.exports = {
  plugins: [
    {
      plugin: jsonLoader,
      options: { test: /\.json$/ }
    }
  ],
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}