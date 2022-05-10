import React from 'react'

import { PROFILE } from 'constants/routes'
const ProfileRoutesLazy = React.lazy(() => import('utfpr-profile-mfe/ProfileRoutes'))

type ProfileRoutesProps = {
  path?: string
}

const ProfileRoutes = ({ path = PROFILE }: ProfileRoutesProps) => (
  <ProfileRoutesLazy basename={path} />
)

export default ProfileRoutes
