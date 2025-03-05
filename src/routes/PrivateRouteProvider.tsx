import { Navigate, Outlet } from 'react-router-dom'
import { Routes } from './routes'

const PrivateRouteProvider = () => {

  //TODO write your condition for private routes

  if (!true) {
    return <Navigate to={Routes.PUBLIC.LOGIN.path} replace />
  }

  return <Outlet />
}

export default PrivateRouteProvider
