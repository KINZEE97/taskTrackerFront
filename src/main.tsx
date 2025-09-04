import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import AuthContextProvider from "./context/provider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Theme appearance="dark">
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </Theme>
    </StrictMode>
);
