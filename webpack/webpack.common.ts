import { Configuration, container } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import packageJson from '../package.json'
import { moduleFederationRegisterApps } from '../tools/registerApps'
import appsConfig from '../tools/appsConfig'

const { ModuleFederationPlugin } = container

const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    publicPath: 'auto',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: ['../src', 'node_modules'],
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
  plugins: [
    new ModuleFederationPlugin({
      name: 'utfpr_main_mfe',
      filename: 'remoteEntry.js',
      library: {
        type: 'var',
        name: 'utfpr_main_mfe',
      },
      remotes: moduleFederationRegisterApps(appsConfig),
      shared: {
        ...packageJson.dependencies,
        react: {
          singleton: true,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          eager: true,
        },
        'react-router-dom': {
          singleton: true,
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

export default config