const path = require('node:path'); // модуль для работы с путями
const HtmlWebPackPlugin = require('html-webpack-plugin'); // плагин для сборки html-файлов

module.exports = {
  entry: './src/index.js', // точка входа

  output: {
    path: path.resolve(__dirname, 'dist'), // папка для сборки бандлов
  },

  module: {
    rules: [
      {
        test: /\.js$/, // маска
        exclude: /node_modules/, // исключаем файлы в mode_modules
        use: {
          loader: 'babel-loader', // загрузчик
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html', // шаблон
      filename: './index.html', // имя файла
    }),
  ],
};
