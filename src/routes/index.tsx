import App from '@/App';
import Layout from '@/components/layout/Layout';
import { ROUTES } from '@/constants/routes';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MainPage = lazy(() => import('@/components/pages/MainPage'));
const PostPage = lazy(() => import('@/components/pages/PostPage'));
const EditorPage = lazy(() => import('@/components/pages/EditorPage'));

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
            element: <MainPage />,
          },
          {
            path: ROUTES.POST,
            element: <PostPage />,
          },
          {
            path: ROUTES.POST_EDITOR,
            element: <EditorPage />,
          },
        ],
      },
    ],
  },
];

export default routes;
