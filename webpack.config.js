module.exports = function(env) {
  const path = require("path");
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  const webpack = require("webpack");
  var merge = require("webpack-merge");
  var ExtractTextPlugin = require("extract-text-webpack-plugin");
  var serviceUri = "";
  const devSystem = "";

  const TARGET = env;
  TARGET === "dev"
    ? (serviceUri = "/proxy/sap/opu/odata/SAP/ZATI_MAIN_SRV/")
    : (serviceUri = "/sap/opu/odata/SAP/ZATI_MAIN_SRV/");

  /**
 * Common config:
 * Generieke settings voor development en production
 */
  const common = {
    entry: {
      main: "./src/components/main.js"
    },

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js"
    },

    resolve: {
      alias: {
        views: path.resolve(__dirname, "./src/components/views/")
      }
    },

    resolveLoader: {
      alias: {
        text: "text-loader"
      }
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          }),
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          use: { loader: "babel-loader", query: { compact: false } },
          exclude: /node_modules/
        }
      ]
    },

    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        jquery: "jquery",
        $: "jquery",
        _: "underscore"
      }),

      new ExtractTextPlugin("styles.css"),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function(module) {
          console.log(module.context);
          return (
            module.context && module.context.indexOf("node_modules") !== -1
          );
        }
      }),

      new webpack.DefinePlugin({
        SERVICE_URI: JSON.stringify(serviceUri)
      }),

      new HtmlWebpackPlugin({
        template: "./src/index.html",
        title: "ATI Beheer"
      })
    ]
  };

  /**
 * Aanvullende settings voor development 
 * Met name voor development server, maps en HMR
 */
  if (env === "dev") {
    var devconfig = merge(common, {
      devtool: "inline-source-map",
      devServer: {
        proxy: {
          "/proxy": {
            target: devSystem,
            changeOrigin: true,
            secure: false,
            pathRewrite: {
              "^/proxy": ""
            }
          }
        }
      },
      plugins: [new webpack.HotModuleReplacementPlugin()]
    });
    return devconfig;
  } else {
    /**
 * Aanvullende settings voor production 
 * Nu nog geen, anders merge toepassen
 */
    return common;
  }
};
