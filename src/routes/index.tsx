import App from '@/App';
import Layout from '@/components/layout/Layout';
import { ROUTES } from '@/constants/routes';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const PostPage = lazy(() => import('@/pages/PostPage/PostPage'));
const EditorPage = lazy(() => import('@/pages/EditorPage/EditorPage'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error!</div>,
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
            path: ROUTES.NEW_POST,
            element: <EditorPage />,
          },
          {
            path: ROUTES.EDIT_POST,
            element: <EditorPage />,
          },
        ],
      },
    ],
  },
];

export default routes;
