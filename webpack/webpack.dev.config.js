import { HotModuleReplacementPlugin, EnvironmentPlugin } from 'webpack';
import merge from 'webpack-merge';
import { webpackConfigDev } from '@utfprfabricadesoftware/utfpr-tools-react';
import commonConfig from './webpack.common';
import envLocal from '../tools/environment';
const port = 3300;
const devConfig = Object.assign(Object.assign({}, webpackConfigDev(port)), { plugins: [new EnvironmentPlugin(envLocal), new HotModuleReplacementPlugin()] });
export default merge(commonConfig, devConfig);
