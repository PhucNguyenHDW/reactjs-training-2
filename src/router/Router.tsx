import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import App from './../App';
import BaseComponent from '../components/HelloWorldComponents/BaseComponent';
import Page404 from './../components/UtilityPage/Page404'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
		errorElement: <Page404 />,
    children: [
    ],
	},
	{
    path: "/components",
    element: <BaseComponent />,
		errorElement: <Page404 />,
  }
]);

export default router
