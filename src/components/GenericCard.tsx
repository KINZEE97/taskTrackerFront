import { Badge, Button, Card, Flex, Text } from "@radix-ui/themes";
import type { Task, TaskStatus } from "../utils/taskUtils";
import { CheckIcon } from "@radix-ui/react-icons";
import { useAppContext } from "../hook/useAppContext";
import { useState } from "react";
import UpdateTaskButton from "./UpdateTaskButton";

interface Props {
    data: Task[];
    status: TaskStatus;
    onDelete: (id: string) => void;
    onChange: () => void;
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

const statusOnCapitalizeCase: Record<string, string> = {
    DONE: "Done",
    IN_PROGRESS: "In Progress",
    PENDING: "Pending",
    LATE: "Late",
};

export default function GenericCard({
    data,
    status,
    onDelete,
    onChange,
}: Props) {
    const filterTask = data.filter((task) => task.status === status);
    const { handleDeleteTask, updateTaskStatus } = useAppContext();
    const token = localStorage.getItem("token");
    const [idLoading, setIdLoading] = useState<string | null>(null);

    const handleDeleteButton = async (id: string) => {
        if (!token) throw new Error("no token provided");
        setIdLoading(id);
        try {
            const response = await handleDeleteTask(id, token);
            onDelete(id);
            onChange();
            return response;
        } catch (error) {
            console.log(error);
        } finally {
            setIdLoading(null);
        }
    };

    const handleStatusButton = async (task: Task) => {
        if (!token) {
            throw new Error("no token provided");
        }

        let newStatus: TaskStatus;
        if (task.status === "PENDING") newStatus = "IN_PROGRESS";
        else if (task.status === "IN_PROGRESS") newStatus = "DONE";
        else return;

        try {
            setIdLoading(task.id);
            const updateTask = await updateTaskStatus(
                task.id,
                newStatus,
                token
            );

            onChange();
            return updateTask;
        } catch (error) {
            console.log(error);
        } finally {
            setIdLoading(null);
        }
    };

    return (
        <div>
            <Badge color="gray" size={"3"}>
                {statusOnCapitalizeCase[status]}
            </Badge>
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
                        <Button
                            color="green"
                            onClick={() => handleStatusButton(task)}
                            loading={idLoading === task.id}
                            id={task.id}
                        >
                            {task.status === "PENDING" ? (
                                <>
                                    <CheckIcon />
                                    Start
                                </>
                            ) : (
                                "Complete"
                            )}
                        </Button>
                        <UpdateTaskButton
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            status={task.status}
                            priority={task.priority}
                            onChange={onChange}
                        />
                        <Button
                            color="red"
                            variant="outline"
                            id={task.id}
                            onClick={() => handleDeleteButton(task.id)}
                            loading={idLoading === task.id}
                        >
                            Delete
                        </Button>
                    </Flex>
                </Card>
            ))}
        </div>
    );
}
