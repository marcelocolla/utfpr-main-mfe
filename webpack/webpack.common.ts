import { Configuration, container } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import packageJson from '../package.json'
import { moduleFederationRegisterApps } from '../tools/registerApps'
import appsConfig from '../tools/appsConfig'

const { ModuleFederationPlugin } = container

const remotes = moduleFederationRegisterApps(appsConfig)

const shared = {
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
}

const config: Configuration = {
  entry: './src/index.tsx',
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
      library: undefined,
      remotes,
      shared,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

export default config
