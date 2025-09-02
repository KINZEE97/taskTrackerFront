import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import LandingPage from "./page/LandingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{ index: true, element: <LandingPage /> }],
    },
]);

export default router;
