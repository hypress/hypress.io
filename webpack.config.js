const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: [
        './src/js/index.js',
        './src/scss/index.scss'
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'docs/')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug'
        }),
        new CopyWebpackPlugin([
            {from:'./src/assets',to:'assets'}
        ]),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['apply-loader', 'pug-loader']
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader',{
                    loader: "css-loader",
                    options: { url: false }
                }, 'sass-loader']
            }
        ],

    },
    devServer: {
        contentBase: './docs'
    },
    optimization: {
        splitChunks: {
            name: false,
        },
    },
};
