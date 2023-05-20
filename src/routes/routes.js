import MainLayout from "../layouts/Main";

const routes = [
    {
        path: '/',
        layout: MainLayout,
        subRoutes: [
            {
                path: '/',
                name: 'Landing Page',
                component: LandingPage
            }
        ],
    },
    {
        path: '*',
        name: 'Not Found',
        component:  NotFound,
        plain: true
    }
];

export default routes;