import { ModuleRegisterApps } from '@utfprfabricadesoftware/utfpr-tools-react'

const initialsharedDomain = process.env.WEBPACK_SERVE ? 'netlify.app' : 'utfpr.edu.br/mfe'

const sharedDomain = process.env.REACT_APP_SHARED_DOMAIN || initialsharedDomain

const appsConfig: ModuleRegisterApps = {
  coreSharedMFE: {
    enabled: true,
    localName: 'utfpr-core-shared-mfe',
    remoteName: 'utfpr_core_shared_mfe',
    // url: 'http://localhost:4499/remoteEntry.js', // local
    url: `https://utfpr-core-shared-mfe.${sharedDomain}/remoteEntry.js`,
  },
  profileMFE: {
    enabled: true,
    localName: 'utfpr-profile-mfe',
    remoteName: 'utfpr_profile_mfe',
    // url: 'http://localhost:4400/remoteEntry.js', // local
    url: `https://utfpr-profile-mfe.${sharedDomain}/remoteEntry.js`,
  },
  solicitationMFE: {
    enabled: true,
    localName: 'utfpr-solicitation-mfe',
    remoteName: 'utfpr_solicitation_mfe',
    // url: 'http://localhost:4402/remoteEntry.js', // local
    url: `https://utfpr-solicitation-mfe.${sharedDomain}/remoteEntry.js`,
  },
}

export default appsConfig
