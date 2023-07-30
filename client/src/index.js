import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import MernPage from './pages/MernPage';
import ReactPage from './pages/ReactPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "ReactPage",
    element: <ReactPage />,
  },
  {
    path: "MernPage",
    element: <MernPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
