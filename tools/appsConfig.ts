import { SHARED_DOMAIN_DEFAULT } from './environment'
import { ModuleFederationRegisterApps } from './registerApps.types'

const initialsharedDomain = process.env.WEBPACK_SERVE ? SHARED_DOMAIN_DEFAULT : 'utfpr.edu.br/mfe'

const sharedDomain = process.env.REACT_APP_SHARED_DOMAIN || initialsharedDomain

const appsConfig: ModuleFederationRegisterApps = {
  profileMFE: {
    enabled: true,
    localName: 'utfpr-profile-mfe',
    remoteName: 'utfpr_profile_mfe',
    // url: 'http://localhost:4400/remoteEntry.js', // local
    url: `https://utfpr-profile-mfe.${sharedDomain}/remoteEntry.js`,
  },
}

export default appsConfig
