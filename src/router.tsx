import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import RootLayout from "./components/RootLayout";
import LandingPage from "./page/LandingPage";
import FeaturesPage from "./page/FeaturesPage";
import Login from "./page/LoginPage";
import Dashboard from "./page/DashboardPage";
import PublicRoutes from "./components/PublicRoutes";
import LogedLayout from "./components/LogedLayout";
import RegisterPage from "./page/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "features", element: <FeaturesPage /> },
            { path: "register", element: <RegisterPage /> },
            {
                path: "login",
                element: (
                    <PublicRoutes>
                        <Login />
                    </PublicRoutes>
                ),
            },
        ],
    },
    {
        path: "dashboard",
        element: <LogedLayout />,
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

export default router;
