const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 配置打包(收集文件依赖树)的入口
  entry: "./src/index.js",
  // 配置产物出口
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  // 配置加载器
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配以css结尾的文件
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js?$/, // 匹配以js/jsx结尾的文件
        exclude: /node_modules/, // 排除node_modules文件夹
        use: {
          loader: "babel-loader",
          options: {
            // babel转义的配置选项
            babelrc: false,
            presets: [
              [require.resolve("@babel/preset-env"), { modules: false }],
            ],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  // 配置插件，插件贯穿于webpack打包的整个周期
  plugins: [
    new htmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      inject: true,
    }),
  ],
  // 本地开发服务
  devServer: {
    contentBase: "./build",
    host: "localhost",
    port: 8888,
  },
};
