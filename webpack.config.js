const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "./src/index.jsx"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                           
                        }
                    },
                    'sass-loader',
                ],
            },
        ]
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },

  
    plugins: [
        new CleanWebpackPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ title: "Webpack & React App", template:    path.resolve(__dirname, './src/index.html') })
    ]

    
}