import { HomeIcon } from "@radix-ui/react-icons";
import { Box, Container, Text } from "@radix-ui/themes";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return (
                <Container className="h-screen w-full flex items-center justify-center">
                    <Box className="border-1 border-gray-700 bg-gray-900 p-9 rounded-2xl ">
                        <Text
                            as="p"
                            className="text-2xl font-bold text-center text-shadow-2xs text-shadow-amber-50"
                        >
                            {" "}
                            Oops.. 404 Not Found!
                        </Text>

                        <Text
                            as="p"
                            className="font-light text-2xl text-center"
                        >
                            {" "}
                            Just go back to the homepage
                        </Text>
                        <Link to={"/"} replace>
                            <HomeIcon className="text-amber-500 h-10 animate-pulse flex items-center justify-center w-full" />
                        </Link>
                    </Box>
                </Container>
            );
        } else if (error.status === 500)
            return (
                <Container className="h-screen w-full flex items-center justify-center">
                    <Box className="border-1 border-gray-700 bg-gray-900 p-9 rounded-2xl ">
                        <Text
                            as="p"
                            className="text-2xl font-bold text-center text-shadow-2xs text-shadow-amber-50"
                        >
                            {" "}
                            Oops.. 500 Server Error!
                        </Text>

                        <Text
                            as="p"
                            className="font-light text-2xl text-center"
                        >
                            {" "}
                            Just go back to the homepage
                        </Text>
                        <Link to={"/"} replace>
                            <HomeIcon className="text-amber-500 h-10 animate-pulse flex items-center justify-center w-full" />
                        </Link>
                    </Box>
                </Container>
            );
    }
}
