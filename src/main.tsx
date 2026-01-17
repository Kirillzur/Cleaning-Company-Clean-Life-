import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.tsx'
import Home from './features/Pages/Home.tsx'
import './index.css'
import Kotisiivous from './features/Pages/Kotisiivous.tsx'
import Muuttosiivous from './features/Pages/Muuttosiivous.tsx'
import Toimistosiivous from './features/Pages/ToimistoSiivous.tsx'


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/Kotisiivous', element: <Kotisiivous /> },
      { path: '/Toimistosiivous', element: <Toimistosiivous /> },
      { path: '/Muuttosiivous', element: <Muuttosiivous /> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
