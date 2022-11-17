import { container } from 'webpack'

function moduleFederation() {
  return new container.ModuleFederationPlugin({
    name: 'utfpr_main_mfe',
    remotes: {
      // ID_INTERNO           : ID_MFE@URL_MFE
      'utfpr-core-shared-mfe':
        'utfpr_core_shared_mfe@https://utfpr-core-shared-mfe.netlify.app/remoteEntry.js',
      'utfpr-profile-mfe':
        'utfpr_core_shared_mfe@https://utfpr-profile-mfe.netlify.app/remoteEntry.js',
      'utfpr-solicitation-mfe':
        'utfpr_core_shared_mfe@https://utfpr-solicitation-mfe.netlify.app/remoteEntry.js',
      'utfpr-admit-mfe': 'utfpr_core_shared_mfe@https://utfpr-admit-mfe.netlify.app/remoteEntry.js',
      'utfpr-visitor-mfe':
        'utfpr_core_shared_mfe@https://utfpr-visitor-mfe.netlify.app/remoteEntry.js',
    },
  })
}
