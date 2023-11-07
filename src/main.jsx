import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from "./Routes/Routes.jsx"
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Firebase/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
