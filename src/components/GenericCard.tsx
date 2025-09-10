import { Badge, Button, Card, Flex, Text } from "@radix-ui/themes";
import type { Task, TaskStatus } from "../utils/taskUtils";
import { CheckIcon, Pencil1Icon } from "@radix-ui/react-icons";

interface Props {
    data: Task[];
    status: TaskStatus;
}

const colorPriorityMap: Record<string, string> = {
    high: "red",
    medium: "yellow",
    low: "green",
};

const colorStatusMap: Record<string, string> = {
    done: "green",
    in_progress: "blue",
    pending: "yellow",
    late: "red",
};

export default function GenericCard({ data, status }: Props) {
    const filterTask = data.filter((task) => task.status === status);

    return (
        <div>
            {filterTask.map((task) => (
                <Card className="w-[270px] min-h-[125px] mt-4" key={task.id}>
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
                            {task.status === "pending" ? (
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
                        <Button color="red" variant="outline">
                            Delete
                        </Button>
                    </Flex>
                </Card>
            ))}
        </div>
    );
}
