import { Pencil1Icon, CheckIcon } from "@radix-ui/react-icons";
import { Badge, Button, Card, Flex, Text } from "@radix-ui/themes";
import database from "../../database.json";

// now i have to set a dinamic color card for status and priority

const priorityColorsMap: Record<string, string> = {
    high: "red",
    medium: "yellow",
    low: "green",
};

export default function InProgressCard() {
    const pendingTasks = database.filter(
        (task) => task.status === "in progress"
    );
    return (
        <div className="flex flex-col gap-2">
            {pendingTasks.map((task) => (
                <Card className="w-[270px]" key={task.id}>
                    <Flex align={"center"} gap={"2"}>
                        <Text as="div" className="font-bold text-[18px]">
                            {task.title}{" "}
                            <Badge color="gray">{task.status}</Badge>
                        </Text>
                    </Flex>
                    <Flex align={"center"} gap={"2"}>
                        <Text as="div">
                            {task.description}{" "}
                            <Badge
                                color={
                                    priorityColorsMap[task.priority] as
                                        | "red"
                                        | "yellow"
                                        | "green"
                                }
                            >
                                {task.priority}
                            </Badge>
                        </Text>
                    </Flex>
                    <Flex
                        align={"center"}
                        justify={"between"}
                        className="px-1 mt-4"
                    >
                        <Button color="green">
                            <CheckIcon />
                            Start
                        </Button>
                        <Button>
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
