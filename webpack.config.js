const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack');

const config = {
  entry: { main: './src/components/main.js' },
 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },

  devtool: "cheap-eval-source-map",

  devServer: {
    proxy: {
      '/proxy': {
        target: 'xx',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
					"^/proxy": ""
				}
      }
    }
  },

  resolveLoader: {
    alias: {
        'text': "text-loader"
    }
  },

  module: {
    rules: [{
      test: /\.js$/, 
      use: { loader: 'babel-loader', query: {compact: false} }, 
      exclude: '/node_modules/'  }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
        SERVICE_URL: JSON.stringify("/proxy"),
        SERVICE_URL_PROD: JSON.stringify("xx")
    }),

    new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'ATI Beheer'
    })
  ]

};

module.exports = config;
