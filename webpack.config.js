const path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');

module.exports = 
[
    {
        entry: {
            App: './src/App.tsx'
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, 'dist', 'scripts')
        },
        devtool:'source-map',
        resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
        mode:'development',
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
        },

        watch: false,

        devServer: {
            contentBase: path.join(__dirname, "dist"),
            watchContentBase: true,
            compress: true,
            port: 9000,
            historyApiFallback: true,
        }
        
    },
    {
        entry: {
            Server:'./src/Server.tsx'
        },
        target: 'node',
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, 'dist')
        },
        resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
        mode:'development',
        node: {
            fs: 'empty',
            net: 'empty',
            __dirname: true
        },
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
                    use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                        importLoaders: 1
                        }
                    }
                    ]
                }        
            ]
        }
    }
]