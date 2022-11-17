import React from 'react';
import { Route } from 'react-router-dom';
import useUserStore from 'shared/utfpr-core-shared-mfe/UserStore';
import { getRoutesMap } from './RoutesMap';
const RoutesApp = () => {
    const user = useUserStore?.();
    const findRoutes = React.useCallback(() => getRoutesMap(user?.redirectAuth), []);
    const routes = findRoutes();
    return (<React.Suspense fallback="Carregando...">
      {routes.map((route) => (<Route key={route.path?.toString()} {...route}/>))}
    </React.Suspense>);
};
export default RoutesApp;
