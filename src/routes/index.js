import { Switch } from 'react-router'

import RouteControl from '../components/RouteControl';
import routes from './routes';

const ClientRoutes = () => (
    <Switch>
        {routes.map((route, index) => {
            return route.subRoutes && route.subRoutes.length > 0 ? (
                route.subRoutes.map((subRoute, index) => (
                    <RouteControl 
                    exact 
                    key={`subRoutes_${index}`}
                    {...route}
                    {...subRoute}
                    path={`${route.path}${subRoute.path}`}
                    component={subRoute.component}
                />
                ))
            ) : (
                <RouteControl key={`route_${index}`} exact {...route} plain={route.plain} />
            );
        })}
    </Switch>
);

export default ClientRoutes;