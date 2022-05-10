import { ModuleFederationRegisterApps, ModuleFederationRemotes } from './registerApps.types'

export function moduleFederationRegisterApps(
  apps: ModuleFederationRegisterApps,
): ModuleFederationRemotes {
  const configApps = Object.keys(apps)

  const remotes: ModuleFederationRemotes = {}

  configApps.forEach((appname) => {
    const mfe = apps[appname]

    if (mfe?.enabled) {
      remotes[mfe.localName] = `${mfe.remoteName}@${mfe.url}`
    }
  })

  return remotes
}
