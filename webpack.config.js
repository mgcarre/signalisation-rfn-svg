const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/generator.js',
    mode: 'development',
    output: {
        filename: 'bundle.[id].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.font\.js/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'webfonts-loader'
                ]
            }
        ]
    }
};