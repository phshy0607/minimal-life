module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    tooltipArrows: (theme) => ({
      'common-arrow': {
        borderColor: theme('colors.gray.200'),
        borderWidth: 2,
        backgroundColor: theme('colors.gray.100'),
        size: 8,
        offset: 12,
      },
    }),
  },
  variants: {},
  plugins: [require('tailwindcss-tooltip-arrow-after')()],
}
