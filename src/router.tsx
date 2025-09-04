import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import LandingPage from "./page/LandingPage";
import FeaturesPage from "./page/FeaturesPage";
import Login from "./page/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "features", element: <FeaturesPage /> },
            { path: "login", element: <Login /> },
        ],
    },
]);

export default router;
