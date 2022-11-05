import { type RouteObject, createBrowserRouter, redirect } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import ComponentsLayout from '@/layouts/ComponentsLayout';
import MyComponents, { myComponentsList } from './MyComponents';

const pageObject: RouteObject = {
  path: '/',
  element: <AppLayout />,
  children: [
    {
      index: true,
      loader: async () => redirect('/components'),
    },
    {
      path: 'components',
      element: <ComponentsLayout />,
      children: [
        {
          index: true,
          element: <MyComponents />,
        },
        ...myComponentsList,
      ],
    },
  ],
};

export default createBrowserRouter([pageObject], {
  basename: '/react-components',
});
