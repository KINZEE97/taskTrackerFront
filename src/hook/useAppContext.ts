import { useContext } from "react";
import { AuthContext } from "../context";

export const useAppContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("Some error occured");
    return context;
};
