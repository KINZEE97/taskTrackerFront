import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import {
    RocketIcon,
    PlusCircledIcon,
    TimerIcon,
    BarChartIcon,
    CheckIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Container } from "@radix-ui/themes/src/index.js";

export default function LandingPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    });
    return (
        <Container>
            <Flex
                align="center"
                justify="between"
                className="min-h-100 p-4 md:flex-row flex-col"
                gap={"4"}
            >
                <Box data-aos="fade-up">
                    <Text as="p" size={"9"} className="font-bold">
                        Organize Your life, One Task at the time.
                    </Text>
                    <Text as="p" className="py-4 text-gray-400">
                        Your ultimate to-do list and task management solution
                    </Text>
                    <Link to={"/login"}>
                        <Button size={"3"}>
                            <RocketIcon />
                            Get Started Now
                        </Button>
                    </Link>
                </Box>
                <Box
                    className="border-1 rounded-2xl bg-gray-900"
                    data-aos="fade-left"
                    data-aos-delay="300"
                >
                    <Box>
                        <img
                            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="todo-img-glenn"
                            className="w-[35rem] h-[20rem] p-4 rounded-3xl md:shrink-0"
                        />
                    </Box>
                </Box>
            </Flex>

            <Box
                className=" bg-gray-900 p-[5rem] rounded-2xl border-1 border-gray-700"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-once="true"
            >
                <Text as="p" className="text-4xl font-bold">
                    Everything you need to stay on top of your tasks
                </Text>
                <Text as="p" className="text-gray-400 py-2 text-sm">
                    Plan smarter, Prioritize better, and get more done with Task
                    tracker.
                </Text>
                <Flex
                    gap={"3"}
                    className="mt-5 flex-nowrap max-[567px]:flex-wrap"
                >
                    <Card>
                        <PlusCircledIcon
                            color="blue"
                            className="w-8 h-10 mb-4"
                        />
                        <Text as="div" className="font-bold">
                            Easy Task Creation
                        </Text>
                        <Text as="p" size={"1"} color="gray">
                            Add tasks in seconds with clean, intuitive inputs
                            and quick-add shortcuts.
                        </Text>
                    </Card>
                    <Card>
                        <TimerIcon color="blue" className="w-8 h-10 mb-4" />
                        <Text as="div" className="font-bold">
                            Set Reminders
                        </Text>
                        <Text as="p" size={"1"} color="gray">
                            Never miss a deadline with due dates, reminders, and
                            recurring schdules.
                        </Text>
                    </Card>
                    <Card>
                        <BarChartIcon color="blue" className="w-8 h-10 mb-4" />
                        <Text as="div" className="font-bold">
                            Progress Insights
                        </Text>
                        <Text as="p" size={"1"} color="gray">
                            Add tasks in seconds with clean, intuitive inputs
                            and quick-add shortcuts.
                        </Text>
                    </Card>
                </Flex>
            </Box>

            <Box
                className=" bg-gray-900 border-1 border-gray-700 rounded-2xl min-h-[13rem] mt-10 max-w-[800px] mx-auto"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-once="true"
            >
                <Flex
                    align={"center"}
                    justify={"between"}
                    gap={"5"}
                    className="h-full px-10 py-20 flex-col sm:flex-row "
                >
                    <Box>
                        <Text as="p" className="text-2xl font-bold">
                            Focus on what matters. We'll handle the rest.
                        </Text>
                    </Box>
                    <Button size={"4"} className="w-auto">
                        <CheckIcon />
                        <Link
                            to={"/login"}
                            className="font-light text-sm w-50 text-start"
                        >
                            Start Managing your tasks today
                        </Link>
                    </Button>
                </Flex>
            </Box>
        </Container>
    );
}
