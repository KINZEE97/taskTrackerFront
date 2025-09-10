import { Badge, Button, Card, Flex, Text } from "@radix-ui/themes";
import type { Task, TaskStatus } from "../utils/taskUtils";
import { CheckIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { useAppContext } from "../hook/useAppContext";
import { useState } from "react";

interface Props {
    data: Task[];
    status: TaskStatus;
    onDelete: (id: string) => void;
}

const colorPriorityMap: Record<string, string> = {
    HIGH: "red",
    MEDIUM: "yellow",
    LOW: "green",
};

const colorStatusMap: Record<string, string> = {
    DONE: "green",
    IN_PROGRESS: "blue",
    PENDING: "yellow",
    LATE: "red",
};

export default function GenericCard({ data, status, onDelete }: Props) {
    const filterTask = data.filter((task) => task.status === status);
    const { handleDeleteTask } = useAppContext();
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(false);

    const handleDeleteButton = async (id: string) => {
        if (!token) throw new Error("no token provided");
        setLoading(true);
        try {
            const response = await handleDeleteTask(id, token);
            onDelete(id);
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {filterTask.map((task) => (
                <Card
                    className="w-[270px] min-h-[125px] mt-4"
                    key={task.id}
                    id={task.id}
                >
                    <Text className="font-bold text-[18px] flex justify-between">
                        {task.title}
                        <Badge
                            color={
                                (colorStatusMap[task.status] as
                                    | "green"
                                    | "blue"
                                    | "yellow"
                                    | "red") || "gray"
                            }
                        >
                            {task.status}
                        </Badge>
                    </Text>
                    <Text className="mt-2 text-sm flex justify-between">
                        {task.description}
                        <Badge
                            color={
                                (colorPriorityMap[task.priority] as
                                    | "red"
                                    | "yellow"
                                    | "green") || "gray"
                            }
                        >
                            {task.priority}
                        </Badge>
                    </Text>

                    <Flex align={"center"} justify={"between"} className="mt-4">
                        <Button color="green">
                            {task.status === "PENDING" ? (
                                <>
                                    <CheckIcon />
                                    Start
                                </>
                            ) : (
                                "Complete"
                            )}
                        </Button>
                        <Button variant="outline">
                            <Pencil1Icon />
                            Edit
                        </Button>
                        <Button
                            color="red"
                            variant="outline"
                            id={task.id}
                            onClick={() => handleDeleteButton(task.id)}
                            loading={loading}
                        >
                            Delete
                        </Button>
                    </Flex>
                </Card>
            ))}
        </div>
    );
}
