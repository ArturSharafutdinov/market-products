const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    filenameHashing: false,
    configureWebpack: {
        externals: ['@tko/market-store'],
        output: {
            libraryTarget: 'system',
            filename: "js/products.js"
        },
    },
    transpileDependencies: [
        'quasar'
    ],

    pluginOptions: {
        quasar: {
            importStrategy: 'kebab',
            rtlSupport: false
        }
    },
    devServer: {
        host : "localhost",
        port: 8093,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
});
