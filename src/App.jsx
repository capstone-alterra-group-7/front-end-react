// ** Import Layouts
import LayoutDashboard from "./layouts/LayoutDashboard";

// ** Import Route Map
import { routeLogin, routes } from "./schema/route";

// ** Import Other
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path={routeLogin.path} element={<routeLogin.element />} />

      <Route element={<LayoutDashboard />}>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
