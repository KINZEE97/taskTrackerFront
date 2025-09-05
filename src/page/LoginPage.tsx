import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { Form, Toast } from "radix-ui";
import { EnterIcon } from "@radix-ui/react-icons";
import { useState, type FormEvent } from "react";
import { useAppContext } from "../hook/useAppContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const { login } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await login(email, password);
            setEmail("");
            setPassword("");
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            setOpen(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Toast.Provider swipeDirection="right">
            <Flex
                className="min-h-full"
                align={"center"}
                justify={"center"}
                height={"80vh"}
            >
                <Box className="border-1 rounded-2xl border-gray-700 p-2 w-[28rem] h-[20rem] bg-gray-900 ">
                    <Flex
                        className="p-4 inline-block"
                        direction={"row"}
                        align={"center"}
                        gap={"2"}
                    >
                        <EnterIcon width={25} height={25} />
                        <Text as="p" className="font-bold text-2xl">
                            Welcome back
                        </Text>
                    </Flex>
                    <Text
                        as="p"
                        className="text-gray-400 font-light text-sm px-4"
                    >
                        Sign in to manage your task and stay on the top of your
                        day.
                    </Text>

                    <Form.Root
                        className="w-full mt-2 px-4"
                        onSubmit={handleSubmit}
                    >
                        <Form.Field name="email">
                            <Flex justify={"between"}>
                                <Form.Label className="mb-2">Email:</Form.Label>
                                <Form.Message
                                    className="text-sm opacity-80 mr-[7rem]"
                                    match="valueMissing"
                                >
                                    Please enter your email
                                </Form.Message>
                                <Form.Message
                                    className="text-sm opacity-80 mr-[7rem]"
                                    match="typeMismatch"
                                >
                                    Please provide a valid Email
                                </Form.Message>
                            </Flex>
                            <Form.Control asChild>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@email.com"
                                    className="w-full max-w-[20rem] p-1 bg-gray-800 border-1 rounded-xl border-gray-700"
                                    required
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name="password" className="mt-3">
                            <Flex justify={"between"}>
                                <Form.Label className="mb-2">
                                    Password:
                                </Form.Label>
                                <Form.Message
                                    className="text-sm opacity-80  mr-[7rem]"
                                    match="valueMissing"
                                >
                                    Please enter your password
                                </Form.Message>
                            </Flex>
                            <Form.Control asChild>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full max-w-[20rem] p-1 bg-gray-800 border-1 rounded-xl border-gray-700 mb-4"
                                    placeholder="Enter your password"
                                    required
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Submit asChild>
                            <Button size={"3"} loading={loading} type="submit">
                                Login
                            </Button>
                        </Form.Submit>
                    </Form.Root>
                </Box>
            </Flex>

            <Toast.Root
                open={open}
                onOpenChange={setOpen}
                duration={3000}
                className="grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-red-700 p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
            >
                <Toast.Title>Credentials are incorrect</Toast.Title>
                <Toast.Description>Please try again</Toast.Description>
            </Toast.Root>
            <Toast.Viewport className="fixed bottom-0 right-0 p-4" />
        </Toast.Provider>
    );
}
