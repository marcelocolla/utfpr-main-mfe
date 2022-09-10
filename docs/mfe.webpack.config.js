import { container } from 'webpack'

function moduleFederation() {
  return new container.ModuleFederationPlugin({
    name: 'AppPerfil',
    filename: 'remoteEntry.js',
    exposes: {
      './UserRoutes': './src/app/RoutesApp.tsx',
    },
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
    },
  })
}

export default {
  plugins: [moduleFederation()],
}
