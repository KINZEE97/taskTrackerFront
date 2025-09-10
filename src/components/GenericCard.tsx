import { Badge, Card, Text } from "@radix-ui/themes";
import type { Task, TaskStatus } from "../utils/taskUtils";

interface Props {
    data: Task[];
    status: TaskStatus;
}

export default function GenericCard({ data, status }: Props) {
    const filterTask = data.filter((task) => task.status === status);

    return (
        <div>
            {filterTask.map((task) => (
                <Card className="w-[270px] mt-4" key={task.id}>
                    <Text>{task.title}</Text>
                </Card>
            ))}
        </div>
    );
}
