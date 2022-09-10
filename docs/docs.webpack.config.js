import HtmlWebpackPlugin from 'html-webpack-plugin'

const webpackConfig = {
  entry: './src/index.tsx',
  mode: 'develop',
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}

export default webpackConfig
