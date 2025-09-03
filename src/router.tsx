import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import LandingPage from "./page/LandingPage";
import FeaturesPage from "./page/FeaturesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "features", element: <FeaturesPage /> },
        ],
    },
]);

export default router;
