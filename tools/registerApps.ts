import { ModuleFederationRegisterApps, ModuleFederationRemotes } from './registerApps.types'

export function moduleFederationRegisterApps(
  apps: ModuleFederationRegisterApps,
): ModuleFederationRemotes {
  const keys = Object.keys(apps)

  const remotes: ModuleFederationRemotes = {}

  keys.forEach((key) => {
    const mfe = apps[key]

    if (mfe && mfe.enabled) {
      remotes[mfe.localName] = `${mfe.remoteName}@${mfe.url}`
    }
  })

  return remotes
}
