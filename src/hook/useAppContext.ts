import { useContext } from "react";
import { AuthContext } from "../context";

export const useAppContext = () => {
    const context = useContext(AuthContext);
    return context;
};
