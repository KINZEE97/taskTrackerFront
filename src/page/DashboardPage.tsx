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
                setTasks(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTasks();
    }, [tasks]);

    function onDelete(id: string) {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }

    return (
        <Box className="mt-4">
            <AddTaskButton />
            <Grid columns={"4"} gap={"5"} className="mt-4">
                <GenericCard
                    data={tasks}
                    status="PENDING"
                    onDelete={onDelete}
                />
                <GenericCard
                    data={tasks}
                    status="IN_PROGRESS"
                    onDelete={onDelete}
                />
                <GenericCard data={tasks} status="LATE" onDelete={onDelete} />
                <GenericCard data={tasks} status="DONE" onDelete={onDelete} />
            </Grid>
        </Box>
    );
}
