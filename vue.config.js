module.exports = {
    pages: {
        index: {
            entry: 'src/pages/main/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        heroinfo: {
            entry: 'src/pages/hero_info/main.js',
            template: 'public/index.html',
            filename: 'heroinfo'
        }
    },

    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true
        }
    }
}
