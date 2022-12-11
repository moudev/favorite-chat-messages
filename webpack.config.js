// copy of: https://github.com/night/betterttv/blob/7.4.40/webpack.config.js
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  devServer: {
    port: '5173',
    allowedHosts: ['127.0.0.1', '.twitch.tv'],
    static: {
      directory: path.resolve('./src/build'),
    },
  },
  entry: {
    'one-click-twitch-message': ['./src/index.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./src/build'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /(\.less|\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-hexrgba', 'autoprefixer', 'precss'],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: { '@reset-import': false },
              },
            },
          },
        ],
      },
    ],
  },
}
