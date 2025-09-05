import { Box, Button, Card, Container, Flex, Text } from "@radix-ui/themes";
import {
    BookmarkIcon,
    TimerIcon,
    PieChartIcon,
    CheckIcon,
    ArrowRightIcon,
    CalendarIcon,
    ReloadIcon,
    BellIcon,
    ClockIcon,
    BarChartIcon,
    ListBulletIcon,
    ArrowUpIcon,
} from "@radix-ui/react-icons";
import React, { useRef, useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

export default function FeaturesPage() {
    const prioritizationRef = useRef<HTMLDivElement>(null);
    const remindersRef = useRef<HTMLDivElement>(null);
    const analyticsRef = useRef<HTMLDivElement>(null);

    const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    });

    return (
        <Container>
            <Box className="mt-[3rem]" data-aos="fade-right">
                <Text as="p" className="font-bold text-4xl">
                    Powerful features to keep you moving
                </Text>
                <Text as="p" className="font-light text-gray-400 mt-1">
                    Prioritize, set deadlines, and collaborate effortlessly.
                    Explore what you can do with Task Tracker.
                </Text>
            </Box>

            <Flex className="mt-[5rem]" gap={"5"}>
                <div className="max-w-[25rem] hidden md:block">
                    <Box
                        className=" border-1 border-gray-700 w-[25rem] h-[13rem] rounded-2xl bg-gray-900"
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        <Text
                            className="p-3 text-gray-400 font-bold text-[.9rem]"
                            as="p"
                        >
                            Browse
                        </Text>
                        <Flex className="px-4" gap={"2"} direction={"column"}>
                            <Button
                                size={"3"}
                                variant="outline"
                                onClick={() => scrollTo(prioritizationRef)}
                            >
                                <BookmarkIcon />
                                Prioritization
                            </Button>
                            <Button
                                size={"3"}
                                variant="outline"
                                onClick={() => scrollTo(remindersRef)}
                            >
                                <TimerIcon />
                                Deadline reminders
                            </Button>{" "}
                            <Button
                                size={"3"}
                                variant="outline"
                                onClick={() => scrollTo(analyticsRef)}
                            >
                                <PieChartIcon />
                                Progress analytics
                            </Button>
                        </Flex>
                    </Box>
                </div>

                <Flex direction={"column"} gap={"8"} className="w-full">
                    <Box
                        className="border-1 border-gray-700 bg-gray-900 rounded-2xl w-full min-h-[35rem]"
                        ref={prioritizationRef}
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <Box className="p-5" id="prioritization">
                            <Text as="p" className="font-bold text-2xl">
                                Task Prioritization
                            </Text>
                            <Text
                                as="p"
                                className="text-gray-400 font-light text-sm "
                            >
                                Rank task by priority and focus on what matters.
                                Use tags, labels, and colored indicators to stay
                                organized.
                            </Text>
                            <Flex
                                className="mt-4 flex-wrap md:flex-nowrap"
                                gap={"2"}
                            >
                                <Card>
                                    <Box className="bg-blue-950 p-2 rounded-full max-w-[2rem] mb-2">
                                        <BookmarkIcon />
                                    </Box>
                                    <Text className="font-bold" as="p">
                                        Priority Levels
                                    </Text>
                                    <Text
                                        as="p"
                                        className="font-light text-gray-400 text-sm"
                                    >
                                        Mark Task as Low, Medium and High.
                                    </Text>
                                </Card>
                                <Card>
                                    <Box className="bg-blue-950 p-2 rounded-full max-w-[2rem] mb-2">
                                        <TimerIcon />
                                    </Box>
                                    <Text className="font-bold" as="p">
                                        Labels & Tags
                                    </Text>
                                    <Text
                                        as="p"
                                        className="font-light text-gray-400 text-sm"
                                    >
                                        Group tasks by context, project or
                                        urgency.
                                    </Text>
                                </Card>
                                <Card>
                                    <Box className="bg-blue-950 p-2 rounded-full max-w-[2rem] mb-2">
                                        <PieChartIcon />
                                    </Box>
                                    <Text className="font-bold" as="p">
                                        Focus Mode
                                    </Text>
                                    <Text
                                        as="p"
                                        className="font-light text-gray-400 text-sm"
                                    >
                                        See only today's high impact tasks.
                                    </Text>
                                </Card>
                            </Flex>

                            <Box className="mt-4 mb-4 border-1 border-gray-700 rounded-2xl">
                                <img
                                    className="w-full max-h-[20rem] object-cover object-center p-4"
                                    src="https://images.unsplash.com/photo-1642543492457-39a2ce63bb59?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="to-do table"
                                />
                            </Box>

                            <Flex gap={"2"}>
                                <Button size={"3"}>
                                    <CheckIcon className="mr-[0] " />
                                    <Link to={"/login"} className="font-light">
                                        Start Free
                                    </Link>
                                </Button>
                                <Button
                                    size={"3"}
                                    variant="outline"
                                    color="gray"
                                    onClick={() => scrollTo(remindersRef)}
                                >
                                    <ArrowRightIcon className="mr-[0] " />
                                    See reminders
                                </Button>
                            </Flex>
                        </Box>
                    </Box>

                    <Box
                        className="border-1 border-gray-700 bg-gray-900 rounded-2xl w-full min-h-[35rem]"
                        ref={remindersRef}
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <Box className="p-5">
                            <Text as="p" className="font-bold text-2xl">
                                Deadline Reminders
                            </Text>
                            <Text
                                as="p"
                                className="text-gray-400 font-light text-sm "
                            >
                                Set due dates, recurring schedules, and receive
                                timely reminders so nothing slips through the
                                cracks.
                            </Text>
                            <Flex
                                className="mt-4 flex-wrap md:flex-nowrap"
                                gap={"2"}
                            >
                                <Card>
                                    <Box className="bg-blue-950 p-2 rounded-full max-w-[2rem] mb-2">
                                        <CalendarIcon />
                                    </Box>
                                    <Text className="font-bold" as="p">
                                        Due dates
                                    </Text>
                                    <Text
                                        as="p"
                                        className="font-light text-gray-400 text-sm"
                                    >
                                        Add dates and times with timezone
                                        support.
                                    </Text>
                                </Card>
                                <Card>
                                    <Box className="bg-blue-950 p-2 rounded-full max-w-[2rem] mb-2">
                                        <ReloadIcon />
                                    </Box>
                                    <Text className="font-bold" as="p">
                                        Recurring tasks
                                    </Text>
                                    <Text
                                        as="p"
                                        className="font-light text-gray-400 text-sm"
                                    >
                                        Repeat daily, weekly or costum
                                        schedules.
                                    </Text>
                                </Card>
                                <Card>
                                    <Box className="bg-blue-950 p-2 rounded-full max-w-[2rem] mb-2">
                                        <BellIcon />
                                    </Box>
                                    <Text className="font-bold" as="p">
                                        Smart alerts
                                    </Text>
                                    <Text
                                        as="p"
                                        className="font-light text-gray-400 text-sm"
                                    >
                                        Get notified before you're at risk of
                                        missing a deadline
                                    </Text>
                                </Card>
                            </Flex>

                            <Box className="mt-4 mb-4 border-1 border-gray-700 rounded-2xl">
                                <img
                                    className="w-full max-h-[20rem] object-cover object-center p-4"
                                    src="https://images.unsplash.com/photo-1586943759207-dc5640be1bb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="to-do table"
                                />
                            </Box>

                            <Flex
                                gap={"2"}
                                className="flex-wrap min-[855px]:flex-nowrap"
                            >
                                <Button size={"3"}>
                                    <ClockIcon className="mr-[0] " />
                                    <Link to={"/login"} className="font-light">
                                        Try Reminders
                                    </Link>
                                </Button>
                                <Button
                                    size={"3"}
                                    variant="outline"
                                    color="gray"
                                    onClick={() => scrollTo(analyticsRef)}
                                >
                                    <ArrowRightIcon className="mr-[0] " />
                                    Progress Analytics
                                </Button>
                            </Flex>
                        </Box>
                    </Box>

                    <Box
                        className="border-1 border-gray-700 bg-gray-900 rounded-2xl w-full min-h-[35rem]"
                        ref={analyticsRef}
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <Box className="p-5" id="reminders">
                            <Text as="p" className="font-bold text-2xl">
                                Progress Analytics
                            </Text>
                            <Text
                                as="p"
                                className="text-gray-400 font-light text-sm "
                            >
                                Track your productivity with clear stats. See
                                tasks by status (pending, in Progress, late or
                                done) and identify bottlenecks.
                            </Text>
                            <Flex
                                className="mt-4 flex-wrap md:flex-nowrap"
                                gap={"2"}
                            >
                                <Card className="max-w-[16rem]">
                                    <Box className="bg-blue-950 p-2 rounded-full max-w-[2rem] mb-2">
                                        <PieChartIcon />
                                    </Box>
                                    <Text className="font-bold" as="p">
                                        Status breakdown
                                    </Text>
                                    <Text
                                        as="p"
                                        className="font-light text-gray-400 text-sm"
                                    >
                                        Visualize how many tasks are you
                                        pending, in progress, late or done.
                                    </Text>
                                </Card>
                                <Card>
                                    <Box className="bg-blue-950 p-2 rounded-full max-w-[2rem] mb-2">
                                        <BarChartIcon />
                                    </Box>
                                    <Text className="font-bold" as="p">
                                        Completion trends
                                    </Text>
                                    <Text
                                        as="p"
                                        className="font-light text-gray-400 text-sm"
                                    >
                                        Spot tracks and dips to improve your
                                        routine.
                                    </Text>
                                </Card>
                                <Card>
                                    <Box className="bg-blue-950 p-2 rounded-full max-w-[2rem] mb-2">
                                        <TimerIcon />
                                    </Box>
                                    <Text className="font-bold" as="p">
                                        Time to complete
                                    </Text>
                                    <Text
                                        as="p"
                                        className="font-light text-gray-400 text-sm"
                                    >
                                        Estimate how long tasks typically take
                                        you.
                                    </Text>
                                </Card>
                            </Flex>

                            <Box className="mt-4 mb-4 border-1 border-gray-700 rounded-2xl">
                                <img
                                    className="w-full max-h-[20rem] object-cover object-center p-4"
                                    src="https://plus.unsplash.com/premium_photo-1661270415926-37a9d24aff30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="to-do table"
                                />
                            </Box>

                            <Flex gap={"2"}>
                                <Button size={"3"}>
                                    <ListBulletIcon className="mr-[0] " />
                                    <Link to={"/login"} className="font-light">
                                        Explore Analytics
                                    </Link>
                                </Button>
                                <Button
                                    size={"3"}
                                    variant="outline"
                                    color="gray"
                                    onClick={() => scrollTo(prioritizationRef)}
                                >
                                    <ArrowUpIcon className="mr-[0] " />
                                    Back to top
                                </Button>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Container>
    );
}
