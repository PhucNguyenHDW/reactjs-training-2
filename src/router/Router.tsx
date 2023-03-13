import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './../App'
// learn class/function component
import BaseComponent from '../components/HelloWorldComponents/BaseComponent'
// this page is use when router meet error
import Page404 from './../components/UtilityPage/Page404'
// learn context in component
import ContextComponent from './../components/ContextComponents/ContextComponents'
// learn auth with context
import Login from '../components/Auth/Login'
// learn useEffect hook
import UseEffectComponent from '../components/UseEffectComponent/UseEffectComponent'
// todo app
import TodoApp from '../components/TodoApp/TodoApp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: 'components',
        element: <BaseComponent />,
        errorElement: <Page404 />
      },
      {
        path: 'context',
        element: <ContextComponent />,
        errorElement: <Page404 />
      },
      {
        path: '/use-effect-learning',
        element: <UseEffectComponent />,
        errorElement: <Page404 />
      },
      {
        path: '/todo-app',
        element: <TodoApp />,
        errorElement: <Page404 />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Page404 />
  }
])

export default router
