import { Box, Grid } from "@radix-ui/themes";
import AddTaskButton from "../components/AddTaskButton";
import GenericCard from "../components/GenericCard";
import { useAppContext } from "../hook/useAppContext";
import { useEffect, useState } from "react";
import type { Task } from "../utils/taskUtils";

export default function Dashboard() {
    const { getAllTasks } = useAppContext();
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        const fetchTasks = async () => {
            try {
                const response = await getAllTasks(token);
                console.log(response);
                setTasks(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTasks();
    }, [getAllTasks]);

    return (
        <Box className="mt-4">
            <AddTaskButton />
            <Grid columns={"4"} gap={"5"} className="mt-4">
                <GenericCard data={tasks} status="PENDING" />
                <GenericCard data={tasks} status="IN_PROGRESS" />
                <GenericCard data={tasks} status="LATE" />
                <GenericCard data={tasks} status="DONE" />
            </Grid>
        </Box>
    );
}
