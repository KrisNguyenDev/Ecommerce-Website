import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import MainLayout from './layouts/MainLayouts'
import Profile from './pages/Profile'
import useAppStore from './store/useAppStore'

function ProtectedRoute() {
  const { accessToken } = useAppStore()
  return accessToken ? <Outlet /> : <Navigate to="/login" />
}

function RejectedRoute() {
  const { accessToken } = useAppStore()
  return accessToken ? <Navigate to="/" /> : <Outlet />
}

export default function Route() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
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
      ],
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          ),
        },
      ],
    },
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      ),
    },
  ])

  return routeElements
}
