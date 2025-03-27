import { Suspense, lazy } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import useAppStore from './store/useAppStore'
import Loader from './components/Loader'
import { PATH } from '@/constants/path'

// Lazy load pages
const Register = lazy(() => import('./pages/Register'))
const Login = lazy(() => import('./pages/Login'))
const ProductList = lazy(() => import('./pages/ProductList'))
const Profile = lazy(() => import('./pages/Profile'))

// Lazy load layouts
const AuthLayout = lazy(() => import('./layouts/AuthLayout/AuthLayout'))
const MainLayout = lazy(() => import('./layouts/MainLayouts'))

function ProtectedRoute() {
  const { isAuthenticated } = useAppStore()
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

function RejectedRoute() {
  const { isAuthenticated } = useAppStore()
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />
}

export default function Route() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: PATH.LOGIN,
          element: (
            <Suspense fallback={<Loader />}>
              <AuthLayout>
                <Login />
              </AuthLayout>
            </Suspense>
          ),
        },
        {
          path: PATH.REGISTER,
          element: (
            <Suspense fallback={<Loader />}>
              <AuthLayout>
                <Register />
              </AuthLayout>
            </Suspense>
          ),
        },
      ],
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: PATH.PROFILE,
          element: (
            <Suspense fallback={<Loader />}>
              <MainLayout>
                <Profile />
              </MainLayout>
            </Suspense>
          ),
        },
      ],
    },
    {
      path: PATH.HOME,
      index: true,
      element: (
        <Suspense fallback={<Loader />}>
          <MainLayout>
            <ProductList />
          </MainLayout>
        </Suspense>
      ),
    },
  ])

  return routeElements
}
