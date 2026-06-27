import { Routes, Route } from "react-router-dom";

import { moneyTrackingRoutes } from "../projects/moneyTracking/routes";
import { gymRoutes } from "../projects/gym/routes";
import { carrierRoutes } from "../projects/carrier/routes";

const allRoutes = [
  ...moneyTrackingRoutes,
  ...gymRoutes,
  ...carrierRoutes,
];

const AppRoutes = () => {
  return (
    <Routes>
      {allRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;