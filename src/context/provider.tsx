/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, type ReactNode } from "react";
import { AuthContext } from ".";
import api from "../api/axios";

export interface Props {
    children: ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem("token");
        if (!storedToken) {
            return null;
        }
        return storedToken;
    });
    const login = async (email: string, password: string) => {
        try {
            const response = await api.post("/login", {
                email,
                password,
            });

            localStorage.setItem("token", response.data.token);
            setToken(response.data.token);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const methods = {
        login,
    };

    return (
        <AuthContext.Provider value={methods}>{children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;
