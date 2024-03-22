import { createBrowserRouter, redirect } from "react-router-dom";
import React from "react";
import { PrivateRoutes } from "./PrivateRoutes";
import { MainLayout } from "./layout";

const Dashboard = React.lazy(async () => import("./pages/DashboardPage"));
const Classification = React.lazy(
  async () => import("./pages/classifications/ClassificationPage")
);
const LoginPage = React.lazy(async () => import("./pages/LoginPage"));

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/", element: <Dashboard /> },
          {
            path: "/classifications",
            children: [{ path: "", element: <Classification /> }],
          },
          { path: "*", action: () => redirect("/") },
        ],
      },
    ],
  },
  { path: "*", element: <div>Not Found</div> }, // TODO: create a NotFound component
]);

export default router;
