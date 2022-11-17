const sharedDomain = process.env.REACT_APP_SHARED_DOMAIN || 'netlify.app';
const appsEntry = {
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
    admitMFE: {
        enabled: true,
        localName: 'utfpr-admit-mfe',
        remoteName: 'utfpr_admit_mfe',
        // url: 'http://localhost:4404/remoteEntry.js', // local
        url: `https://utfpr-admit-mfe.${sharedDomain}/remoteEntry.js`,
    },
    visitorMFE: {
        enabled: true,
        localName: 'utfpr-visitor-mfe',
        remoteName: 'utfpr_visitor_mfe',
        // url: 'http://localhost:4406/remoteEntry.js', // local
        url: `https://utfpr-visitor-mfe.${sharedDomain}/remoteEntry.js`,
    },
};
export default appsEntry;
