import { container } from 'webpack'

function moduleFederation() {
  return new container.ModuleFederationPlugin({
    name: 'AppShell',
    filename: 'remoteEntry.js',
    remotes: {
      AppPerfil: 'AppPerfil@http://localhost:3001/remoteEntry.js',
      AppVisita: 'AppVisita@http://localhost:3002/remoteEntry.js',
    },
    shared: {
      react: { singleton: true },
      axios: { singleton: true },
    },
  })
}

export default {
  plugins: [moduleFederation()],
}
