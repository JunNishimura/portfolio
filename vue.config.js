module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'JunNishimura',
        }
    },
    publicPath: process.env.NODE_ENV = 'production'
        ? '/portfolio/'
        : '/',
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/scss/style.scss";
                    @import "@/assets/scss/_variable.scss";
                    @import "@/assets/scss/_mixins.scss";
                `
            }
        }
    }
}