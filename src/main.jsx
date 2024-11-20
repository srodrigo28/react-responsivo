import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { Home } from './Home/index.jsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

/* Exemplo 1 */ 
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "home", element: <Home /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
