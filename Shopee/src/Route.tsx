import { useRoutes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import MainLayout from './layouts/MainLayouts'

export default function Route() {
  const routeElements = useRoutes([
    {
      path: '/login',
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: '/register',
      element: (
        <AuthLayout>
          <Register />
        </AuthLayout>
      ),
    },
    {
      path: '/products',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      ),
    },
  ])

  return routeElements
}
