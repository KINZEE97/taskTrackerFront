import { Box } from "@radix-ui/themes";
import AddTaskButton from "../components/AddTaskButton";

export default function Dashboard() {
    return (
        <Box className="mt-4">
            <AddTaskButton />
        </Box>
    );
}
