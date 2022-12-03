const tailwind = require('tailwindcss');
const nesting = require('tailwindcss/nesting');

module.exports = {
  siteName: `Nascent Global is an entity built by Entrepreneurs from all across the world
  that focuses on empowering the core values of Innovation, Knowledge and
  Ownership.`,
  siteUrl: process.env.FRONTEND_URI,
  icon: {
    favicon: './src/favicon.jpg',
    touchicon: './src/favicon.jpg',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, nesting],
      },
    },
  },
  plugins: ['gridsome-plugin-robots', '@gridsome/plugin-sitemap'],
};
