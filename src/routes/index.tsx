import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { protectedRoutes } from "./protectedRoutes";
import PrivateRouteProvider from "./PrivateRouteProvider";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route element={<PrivateRouteProvider />}>
          {protectedRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
