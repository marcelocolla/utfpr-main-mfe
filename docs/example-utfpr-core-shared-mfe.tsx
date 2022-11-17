/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Configuração de módulos Webpack:
 * ModuleFederationPlugin({
 *  remotes: {
 *    'utfpr-core-shared-mfe': 'utfpr_core_shared_mfe@https://utfpr-core-shared-mfe.netlify.app/remoteEntry.js',
 *  },
 * }),
 */

import useUserStore from 'utfpr-core-shared-mfe/UserStore'

export function useUserStoreExample() {
  const {
    token,
    pessoa,
    professor,
    vigilante,
    deseg,
    redirectAuth,
    getRegistrationNumber,
    updateUser,
    resetUser,
  } = useUserStore()
}
