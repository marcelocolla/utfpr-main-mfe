import React from 'react';
import { SOLICITATION } from 'constants/routes';
const SolicitationRoutesLazy = React.lazy(() => import('utfpr-solicitation-mfe/SolicitationRoutes'));
const SolicitationRoutes = ({ path = SOLICITATION }) => (<SolicitationRoutesLazy basename={path}/>);
export default SolicitationRoutes;
