const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, "src/parentApp", "index.jsx"),
    },
    output: {
        path:path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    mode: 'development'
}

