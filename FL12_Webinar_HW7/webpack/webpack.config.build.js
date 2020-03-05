const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;


const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        }),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    ],
    module: {
        rules: [
            {
                test: /\.s?css/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
});

module.exports = new Promise((resolve) => {
    resolve(buildWebpackConfig);
});