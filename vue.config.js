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
    // css: {
    //     loaderOptions: {
    //         scss: {
    //             prependData: `
    //                 @import "@/assets/sass/_variables.scss";
    //                 @import "@/assets/sass/style.scss";
    //             `
    //         }
    //     }
    // }
}