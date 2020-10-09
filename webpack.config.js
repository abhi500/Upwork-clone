const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }, 
    devServer: {
        historyApiFallback: true
    },   
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: 'public/index.html'
        }),
        new VueLoaderPlugin()
        ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                  {
                    // Compiles Sass to CSS
                    loader: 'sass-loader',
                    options: {
                        additionalData: `@import './src/assets/styles/global-variable.scss';`
                    },
                  },
                ],
            },      
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.txt$/i,
                use: 'raw-loader',
            },
        ],
    },
};