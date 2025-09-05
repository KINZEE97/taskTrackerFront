import { createContext } from "react";

export interface AuthContextType {
    login: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);
