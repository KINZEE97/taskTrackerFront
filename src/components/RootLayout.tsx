import { Box, Button, Container, Flex } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "radix-ui";
import { Link, Outlet } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

export default function RootLayout() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    });
    return (
        <Container className="p-4">
            <header>
                <Flex justify="between" align="center">
                    <Box data-aos="fade-right">
                        <Link
                            to={"/"}
                            className="text-4xl font-extrabold text-blue-400"
                        >
                            Task Tracker
                        </Link>
                    </Box>
                    <Box data-aos="fade-left">
                        <nav className="hidden md:flex">
                            <Flex gap="4" align={"center"}>
                                <Link
                                    to={"/"}
                                    className="font-bold text-gray-500 hover:text-white"
                                >
                                    Home
                                </Link>
                                <Link
                                    to={"/features"}
                                    className="font-bold text-gray-500 hover:text-white"
                                >
                                    Features
                                </Link>
                                <Link
                                    to={"/register"}
                                    className="font-bold text-gray-500 hover:text-white"
                                >
                                    Sign Up
                                </Link>
                                <Link to={"/login"}>
                                    <Button variant="soft">Login</Button>
                                </Link>
                            </Flex>
                        </nav>

                        <div className="md:hidden">
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger asChild>
                                    <Button>
                                        <HamburgerMenuIcon />
                                    </Button>
                                </DropdownMenu.Trigger>

                                <DropdownMenu.Portal>
                                    <DropdownMenu.Content
                                        className="DropdownMenuContent bg-white p-2 rounded-xs"
                                        sideOffset={5}
                                        align="center"
                                    >
                                        <DropdownMenu.Item className="DropdownMenuItem text-gray-700">
                                            <Link to={"/login"}>Login</Link>
                                        </DropdownMenu.Item>

                                        <DropdownMenu.Item className="text-gray-700">
                                            <Link to={"/register"}>
                                                Sign Up
                                            </Link>
                                        </DropdownMenu.Item>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Root>
                        </div>
                    </Box>
                </Flex>
            </header>

            <main className="my-10 min-h-screen">
                <Outlet />
            </main>

            <footer>
                <Box className="text-center text-gray-500">
                    &copy; {new Date().getFullYear()} Task Tracker. All rights
                    reserved
                </Box>
            </footer>
        </Container>
    );
}
