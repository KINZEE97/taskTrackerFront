import { Box, Grid } from "@radix-ui/themes";
import AddTaskButton from "../components/AddTaskButton";
import GenericCard from "../components/GenericCard";
import database from "../../database.json";

export default function Dashboard() {
    return (
        <Box className="mt-4">
            <AddTaskButton />
            <Grid columns={"4"} gap={"5"} className="mt-4">
                <GenericCard data={database} status="pending" />
            </Grid>
        </Box>
    );
}
