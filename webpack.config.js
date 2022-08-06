const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyPlugin = require("copy-webpack-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

let setES5 = false;
if (process.env.SUPPORT_IE) {
  setES5 = true;
}

module.exports = {
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: setES5 ? ["web", "es5"] : "web",

  entry: {
    bundle: "./src/js/concat.js",
    "style.css": "./src/scss/style.scss",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    host: "0.0.0.0",
    open: false,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },

  watchOptions: {
    ignored: /node_modules/,
  },

  module: {
    rules: [
      {
        test: /\.ejs$/i,
        use: ["html-loader", "template-ejs-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")()],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/[name]",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${path.resolve(__dirname, "src")}/assets/`,
          to: `${path.resolve(__dirname, "dist")}/assets/`,
        },
      ],
    }),
  ],
};
