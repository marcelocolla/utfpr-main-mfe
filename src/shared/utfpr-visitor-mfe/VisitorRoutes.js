import React from 'react';
import { VISITOR } from 'constants/routes';
const VisitorRoutesLazy = React.lazy(() => import('utfpr-visitor-mfe/VisitorRoutes'));
const VisitorRoutes = ({ path = VISITOR }) => (<VisitorRoutesLazy basename={path}/>);
export default VisitorRoutes;
