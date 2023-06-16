import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import pkg from "./package.json";

const { ModuleFederationPlugin } = webpack.container;
const deps = pkg.dependencies;

module.exports = {
  entry: path.join(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    port: 3002,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "components_mfe", // Não pode ser igual ao expose
      filename: "remoteEntry.js",
      exposes: {
        "./components": "./src/Cart/Cart",
      },
      remotes: {
        uiElements: "uiElements@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      chunkFilename: `${pkg.name.split("/").pop()}-[name].css`,
    }),
    new CleanWebpackPlugin(), // Um plugin webpack para remover / limpar sua (s) pasta (s) de construção.
    new webpack.HotModuleReplacementPlugin(), // Atualiza o navegador quando houver alterações no código
  ],
};
