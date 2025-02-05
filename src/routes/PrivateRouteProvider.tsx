import { Navigate, Outlet } from 'react-router-dom'
import { Routes } from './routes'

const PrivateRouteProvider = () => {

  if (!true) {
    return <Navigate to={Routes.PUBLIC.LOGIN.path} replace />
  }

  return <Outlet />
}

export default PrivateRouteProvider
