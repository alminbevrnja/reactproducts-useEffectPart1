import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage'
import SingleProductPage from './pages/SingleProductPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/about',
        element: <AboutPage/>
      },
      {
        path: '/singleProduct/:id',
        element: <SingleProductPage/>
      },
      {
        path: '/products',
        element: <ProductsPage/>
      }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
