const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ttf$/,
                use:
                   [
                       {
                           loader: 'ttf-loader',
                           options: {
                               name: './src/common/styleAssets/fonts/[hash].[ext]',
                           },

                       }
                   ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }

        ]
    },
    devServer: {
        historyApiFallback: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),

    ]
};