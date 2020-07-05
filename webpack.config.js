// in order to get webpack working
// there are 2 critical piece of info v have to give
// 1) entry point i.e. where our app starts
// 2) where to o/p final bundle file

// path is an absolute path on our machine
// v want ot put bundle.js in public folder

// console.log(__dirname);
// output 
// E:\Quarantine\The Complete React dev\indecision-app

const path = require('path');

//console.log(path.join(__dirname, 'public'));
// output
// E:\Quarantine\The Complete React dev\indecision-app\public


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,

    }
};

