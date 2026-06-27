import MoneyTrackingDashboard from "./pages/dashboard/MoneyTrackingDashboard";
import Expenses from "./pages/expenses/Expenses";
import Income from "./pages/income/Income";
import Reports from "./pages/reports/Reports";

export const moneyTrackingRoutes = [
  {
    path: "/money-tracking/dashboard",
    element: <MoneyTrackingDashboard />,
  },
  {
    path: "/money-tracking/income",
    element: <Income />,
  },
  {
    path: "/money-tracking/expenses",
    element: <Expenses />,
  },
  {
    path: "/money-tracking/reports",
    element: <Reports />,
  }
];