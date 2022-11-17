import React from 'react';
import { PROFILE } from 'constants/routes';
const ProfileRoutesLazy = React.lazy(() => import('utfpr-profile-mfe/ProfileRoutes'));
const ProfileRoutes = ({ path = PROFILE }) => (<ProfileRoutesLazy basename={path}/>);
export default ProfileRoutes;
