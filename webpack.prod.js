const path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        App: './src/App.tsx'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist', 'scripts')
    },
    devtool:'source-map',

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap:true
        })
    ],
    mode:"production",
    module: {
        rules: [
            // TypeScript Loader for TSX files
            {
                test: /\.tsx?$/,
                loaders: ['babel-loader','ts-loader'],
                exclude: [/node_modules/,nodeModulesPath]
            },
            // Just a babel loader for JSX Files
            {
                test: /\.(jsx?)$/,
                loaders: ['babel'],
                exclude: [/node_modules/,nodeModulesPath]
            },
            {
                test: /\.css$/,
                loader: 'style-loader',
                exclude: [/node_modules/,nodeModulesPath]
            }, 
            {
                test: /\.css$/,
                loader: 'css-loader',
                exclude: [/node_modules/,nodeModulesPath],
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }            
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
    
}