import React from 'react';
import { ADMIT } from 'constants/routes';
const AdmitRoutesLazy = React.lazy(() => import('utfpr-admit-mfe/AdmitRoutes'));
const AdmitRoutes = ({ path = ADMIT }) => <AdmitRoutesLazy basename={path}/>;
export default AdmitRoutes;
