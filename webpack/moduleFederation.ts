import { container } from 'webpack'
import {
  registerApps,
  moduleFederationConfig,
  moduleFederationSharedByReact,
} from '@utfprfabricadesoftware/utfpr-tools-react'

import pkgs from '../package.json'
import appsEntry from '../tools/appsEntry'

function moduleFederation() {
  const config = moduleFederationConfig('utfpr_main_mfe', {
    remotes: registerApps(appsEntry),
    shared: moduleFederationSharedByReact(pkgs.dependencies),
  })

  return new container.ModuleFederationPlugin(config)
}

export default moduleFederation
