import { ModuleFederationRegisterApps } from './registerApps.types'

const sharedDomain = process.env.REACT_APP_SHARED_DOMAIN || 'utfpr.edu.br/mfe'

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
