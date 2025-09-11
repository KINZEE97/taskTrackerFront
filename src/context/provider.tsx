/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, type ReactNode } from "react";
import { AuthContext } from ".";
import api from "../api/axios.ts";
import { AxiosError } from "axios";
import type { TaskStatus } from "../utils/taskUtils.ts";

export interface Props {
    children: ReactNode;
}

export interface INewTask {
    title: string;
    description: string;
    status: string;
    priority: string;
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

            console.log(response);

            localStorage.setItem("token", response.data.token);
            setToken(response.data.token);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message);
            }
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            const reponse = await api.post("/register", {
                name,
                email,
                password,
            });

            console.log(reponse);
            return reponse.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message);
            }
        }
    };

    const addNewTask = async (task: INewTask, token: string) => {
        try {
            const response = await api.post("/tasks", task, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message);
            }
        }
    };

    const getAllTasks = async (token: string) => {
        try {
            const response = await api.get("/tasks", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });

            return response.data.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message);
            }
        }
    };

    const handleDeleteTask = async (id: string, token: string) => {
        try {
            const response = await api.delete(`/tasks/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            console.log(response);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message);
            }
        }
    };

    const updateTaskStatus = async (
        id: string,
        task: TaskStatus,
        token: string
    ) => {
        try {
            const response = await api.put(
                `/tasks/${id}`,
                { status: task },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message);
            }
        }
    };

    const methods = {
        login,
        register,
        addNewTask,
        getAllTasks,
        handleDeleteTask,
        updateTaskStatus,
        token,
    };

    return (
        <AuthContext.Provider value={methods}>{children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;
