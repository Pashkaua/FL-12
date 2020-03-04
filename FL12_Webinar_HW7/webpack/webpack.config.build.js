const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');


const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: []
});

module.exports = new Promise((resolve) => {
    resolve(buildWebpackConfig);
});