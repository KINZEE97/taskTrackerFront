import type { ReactNode } from "react";
import { AuthContext } from ".";
import api from "../api/axios";

export interface Props {
    children: ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
    const login = async (email: string, password: string) => {
        try {
            const response = await api.post("/login", {
                email,
                password,
            });
            console.log(response);
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
