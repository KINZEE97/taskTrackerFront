import { createContext } from "react";
import type { INewTask } from "./provider";

export interface AuthContextType {
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    addNewTask: (task: INewTask, token: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);
