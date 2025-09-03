import { Box, Button, Container, Flex, Text } from "@radix-ui/themes";
import { BookmarkIcon, TimerIcon, PieChartIcon } from "@radix-ui/react-icons";

export default function FeaturesPage() {
    return (
        <Container>
            <Box className="mt-[3rem]">
                <Text as="p" className="font-bold text-4xl">
                    Powerful features to keep you moving
                </Text>
                <Text as="p" className="font-light text-gray-400 mt-1">
                    Prioritize, set deadlines, and collaborate effortlessly.
                    Explore what you can do with Task Tracker.
                </Text>
            </Box>

            <Flex className="mt-[5rem]" gap={"5"}>
                <Box className="border-1 border-gray-700 w-[25rem] h-[13rem] rounded-2xl bg-gray-900">
                    <Text
                        className="p-3 text-gray-400 font-bold text-[.9rem]"
                        as="p"
                    >
                        Browse
                    </Text>
                    <Flex className="px-4" gap={"2"} direction={"column"}>
                        <Button size={"3"} variant="outline" asChild>
                            <a href="prioritization">
                                <BookmarkIcon />
                                Prioritization
                            </a>
                        </Button>
                        <Button size={"3"} variant="outline" asChild>
                            <a href="reminders">
                                <TimerIcon />
                                Deadline reminders
                            </a>
                        </Button>{" "}
                        <Button size={"3"} variant="outline" asChild>
                            <a href="prioritization">
                                <PieChartIcon />
                                Progress analytics
                            </a>
                        </Button>
                    </Flex>
                </Box>
                <Flex className="w-full">
                    <Box className="border-1 border-gray-700 bg-gray-900 rounded-2xl w-full h-[35rem]">
                        box 2
                    </Box>
                </Flex>
            </Flex>
        </Container>
    );
}
