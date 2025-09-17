/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid } from "@radix-ui/themes";
import AddTaskButton from "../components/AddTaskButton";
import GenericCard from "../components/GenericCard";
import { useAppContext } from "../hook/useAppContext";
import { useEffect, useState } from "react";
import type { Task } from "../utils/taskUtils";
import AOS from "aos";

export default function Dashboard() {
    const { getAllTasks } = useAppContext();
    const [tasks, setTasks] = useState<Task[]>([]);

    const fetchTasks = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;
        try {
            const response = await getAllTasks(token);
            setTasks(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        fetchTasks();
    }, []);

    function onDelete(id: string) {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }

    return (
        <Box className="mt-4" data-aos="fade-in">
            <AddTaskButton onChange={fetchTasks} />
            <Grid
                gap={"5"}
                columns={{ initial: "1", sm: "2", md: "4" }}
                px={"4"}
                className="mt-4"
                data-aos="fade-up"
                data-aos-delay="2000"
            >
                <GenericCard
                    data={tasks}
                    status="PENDING"
                    onDelete={onDelete}
                    onChange={fetchTasks}
                />
                <GenericCard
                    data={tasks}
                    status="IN_PROGRESS"
                    onDelete={onDelete}
                    onChange={fetchTasks}
                />
                <GenericCard
                    data={tasks}
                    status="LATE"
                    onDelete={onDelete}
                    onChange={fetchTasks}
                />
                <GenericCard
                    data={tasks}
                    status="DONE"
                    onDelete={onDelete}
                    onChange={fetchTasks}
                />
            </Grid>
        </Box>
    );
}
