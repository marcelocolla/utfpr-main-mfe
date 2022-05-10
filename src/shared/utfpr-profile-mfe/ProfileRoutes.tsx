import React from 'react'

const ProfileRoutesLazy = React.lazy(() => import('utfpr-profile-mfe/ProfileRoutes'))

type ProfileRoutesProps = {
  path?: string
}

const ProfileRoutes = ({ path = '/profile' }: ProfileRoutesProps) => (
  <ProfileRoutesLazy basename={path} />
)

export default ProfileRoutes
