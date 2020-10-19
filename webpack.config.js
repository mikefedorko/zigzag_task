const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const isDevelopment = mode === 'development';

console.log({
	mode
});

module.exports = {
    entry: `${__dirname}/src/app/index.js`,
    output: {
        filename: 'bundle.js',
		path: path.resolve(__dirname, '/dist'),
		publicPath: '/'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              use: 'babel-loader',
              exclude: /(node_modules)/,
            },
            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader",
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: isDevelopment
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: isDevelopment
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/public/index.html`
        })
    ],
    devServer: {  
		open: true,
        contentBase: './src/public', 
        port: 8080 
    } 
}