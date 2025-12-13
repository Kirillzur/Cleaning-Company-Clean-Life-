import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.tsx'
import Home from './features/Pages/Home.tsx'
import './index.css'


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      { path: '/', element: <Home /> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
