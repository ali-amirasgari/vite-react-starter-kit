export const Routes = {
  PUBLIC: {
    HOME: { path: '/', name: 'Home' },
    ABOUT: { path: '/about', name: 'About' },
    LOGIN: { path: '/login', name: 'Login' },
  },
  PROTECTED: {
    DASHBOARD: { path: '/dashboard', name: 'Dashboard' },
    PROFILE: { path: '/profile', name: 'Profile' },
  },
}