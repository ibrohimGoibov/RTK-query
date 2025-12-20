import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './pages/home/home'
import About from './pages/about/about'
import AboutById from './pages/about/aboutById'
import Todo from './pages/todo/todo'
import TodoById from './pages/todo/todoById'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'aboutById/:id',
          element: <AboutById />
        },
        {
          path: 'todo',
          element: <Todo />
        },
        {
          path: 'todoById/:id',
          element: <TodoById />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App