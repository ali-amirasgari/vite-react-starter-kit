import Dashboard from "../pages/dashboard";
import { Routes } from "./routes";

export const protectedRoutes = [
  {
    path: Routes.PROTECTED.DASHBOARD.path,
    component: Dashboard,
  },
];
