import { Suspense, lazy } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import useAppStore from './store/useAppStore'
import Loader from './components/Loader'

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
          path: '/login',
          element: (
            <Suspense fallback={<Loader />}>
              <AuthLayout>
                <Login />
              </AuthLayout>
            </Suspense>
          ),
        },
        {
          path: '/register',
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
          path: '/profile',
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
      path: '/',
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
