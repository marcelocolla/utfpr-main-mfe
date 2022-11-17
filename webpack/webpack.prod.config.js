import { EnvironmentPlugin } from 'webpack';
import ESLintPlugin from 'eslint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import merge from 'webpack-merge';
import commonConfig from './webpack.common';
const prodConfig = {
    mode: 'production',
    plugins: [
        new EnvironmentPlugin(Object.keys(process.env).filter((key) => key.startsWith('REACT_APP_'))),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
        new CleanWebpackPlugin(),
    ],
};
export default merge(commonConfig, prodConfig);
