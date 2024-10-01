import { useRoutes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import RegisterLayout from './layouts/Registerlayout'

export default function Route() {
  const routeElements = useRoutes([
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      ),
    },
    {
      path: '/products',
      element: <ProductList />,
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      ),
    },
  ])

  return routeElements
}
