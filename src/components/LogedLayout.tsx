import { ExitIcon } from "@radix-ui/react-icons";
import { Box, Button, Container, Flex, Text, Tabs } from "@radix-ui/themes";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function LogedLayout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <Container>
            <header className="border-b-1 border-gray-700 ">
                <Flex justify={"between"} align={"center"} className="py-10">
                    <Text as="p" className="text-3xl font-bold text-blue-400">
                        Welcome to Task Tracker
                    </Text>

                    <Box className="flex gap-4">
                        <Flex gap={"4"}>
                            <Tabs.Root defaultValue="dashboard">
                                <Tabs.List>
                                    <Tabs.Trigger value="dashboard">
                                        <Link to={"/dashboard"}>Dashboard</Link>
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="profile">
                                        <Link to={"/dashboard/profile"}>
                                            Go to Profile
                                        </Link>
                                    </Tabs.Trigger>
                                </Tabs.List>
                            </Tabs.Root>
                            <Button variant="outline" onClick={handleLogout}>
                                Logout <ExitIcon />
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </header>

            <main>
                <Outlet />
            </main>
        </Container>
    );
}
