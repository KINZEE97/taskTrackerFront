import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode;
}

export default function PublicRoutes({ children }: Props) {
    const token = localStorage.getItem("token");
    if (token) {
        return <Navigate to={"/dashboard"} replace />;
    }

    return <>{children}</>;
}
