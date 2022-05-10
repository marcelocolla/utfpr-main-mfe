import React from 'react'

const ProfileRoutesLazy = React.lazy(() => import('utfpr-profile-mfe/ProfileRoutes'))

const ProfileRoutes = () => <ProfileRoutesLazy />

export default ProfileRoutes
