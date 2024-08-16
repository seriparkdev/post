import App from '@/App';
import Layout from '@/components/layout/Layout';
import Main from '@/components/pages/Main';
import { ROUTES } from '@/constants/routes';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: ROUTES.MAIN,
            element: <Main />,
          },
        ],
      },
    ],
  },
];

export default routes;
