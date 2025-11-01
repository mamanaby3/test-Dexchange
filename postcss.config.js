// postcss.config.js (ou .cjs) - La bonne méthode
module.exports = {
    plugins: {
        '@tailwindcss/postcss': {}, // <--- Utiliser le package dédié
        autoprefixer: {},
    },
}