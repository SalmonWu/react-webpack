const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths')

/**
 * 獲取多頁面入口文件
 * @param {String} globPath 文件路徑
 * @param {Boolean} isEnvDevelopment 是否為開發環境
 * @param {Boolean} isEnvProduction 是否為生產環境
 */
function getMpaConfig(appMpaSrc, isEnvDevelopment, isEnvProduction) {
    const globPath = `${appMpaSrc}/**/render.js`
    const moduleNameReg = /pages\/(.*)\//i
    return glob.sync(globPath).reduce((result, entry) => {
        // 獲取模組名稱
        const moduleName = moduleNameReg.exec(entry)[1]

        // 入口配置
        result.entry[moduleName] = [
            isEnvDevelopment &&
            require.resolve('react-dev-utils/webpackHotDevClient'),
            `./src/pages/${moduleName}/render.js`,
        ].filter(Boolean)

        // HtmlWebpackPlugin
        result.HtmlWebpackPlugin.push(new HtmlWebpackPlugin(
            Object.assign(
                {},
                {
                    inject: true,
                    template: `src/pages/${moduleName}/index.html`,
                    filename: `${moduleName}/index.html`,
                },
                isEnvProduction
                    ? {
                        minify: {
                            removeComments: true,
                            collapseWhitespace: true,
                            removeRedundantAttributes: true,
                            useShortDoctype: true,
                            removeEmptyAttributes: true,
                            removeStyleLinkTypeAttributes: true,
                            keepClosingSlash: true,
                            minifyJS: true,
                            minifyCSS: true,
                            minifyURLs: true,
                        },
                    }
                    : undefined
            )
        ))

        return result
    }, {
            entry: {},
            HtmlWebpackPlugin: []
        })
}

module.exports = {
    getMpaConfig
}