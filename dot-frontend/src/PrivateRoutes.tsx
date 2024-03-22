import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateRoutes: React.FC = () => {
  const location = useLocation();
  const localStorageToken = localStorage.getItem("token");

  return localStorageToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
};
