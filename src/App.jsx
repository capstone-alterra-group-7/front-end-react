// ** Import Components
import PrivateRoute from "./components/PrivateRoute";

// ** Import Layouts
import LayoutDashboard from "./layouts/LayoutDashboard";

// ** Import Route Map
import { routeLogin, routes } from "./schema/route";

// ** Import Jotai

// ** Import Other
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useAtomValue } from "jotai";
import { auth } from "./jotai/auth";

const App = () => {
  // ** Jotai State
  const { token: temporaryToken } = useAtomValue(auth);

  const token = sessionStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      token === null ? temporaryToken : token
    }`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }

  return (
    <Routes>
      <Route path={routeLogin.path} element={<routeLogin.element />} />

      <Route element={<PrivateRoute />}>
        <Route element={<LayoutDashboard />}>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
