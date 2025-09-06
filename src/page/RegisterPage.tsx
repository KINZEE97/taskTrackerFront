import { ReaderIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { Form, Toast } from "radix-ui";
import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import { useAppContext } from "../hook/useAppContext";
import { AxiosError } from "axios";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const { register } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await register(name, email, password);
            setName("");
            setEmail("");
            setPassword("");
            setOpen(true);

            setTimeout(() => {
                navigate("/login");
            }, 2 * 1000);
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.Message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Toast.Provider>
            <Flex className="items-center h-[15rem]" justify={"center"}>
                <Box
                    data-aos="fade-up"
                    className="border-1 rounded-2xl border-gray-700 bg-gray-900 h-[27rem] w-[30rem] mt-[20rem] min-h-auto"
                >
                    <Flex
                        className="inline-block p-4"
                        align={"center"}
                        justify={"center"}
                        direction={"row"}
                        gap={"2"}
                    >
                        <ReaderIcon width={"2rem"} height={"2rem"} />
                        <Text as="p" className="text-2xl font-bold">
                            Register
                        </Text>
                    </Flex>

                    <Form.Root onSubmit={handleSubmit}>
                        <Form.Field name="name" className="px-20">
                            <Flex justify={"between"}>
                                <Form.Label>Name:</Form.Label>
                                <Form.Message
                                    match={"valueMissing"}
                                    className="text-red-500 font-light text-sm"
                                >
                                    Please Enter a Name
                                </Form.Message>
                            </Flex>
                            <Form.Control asChild>
                                <input
                                    type="text"
                                    className="bg-gray-800 mt-4 p-1 w-[20rem] rounded-xl border-1 border-gray-700"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name="email" className="px-20 mt-4">
                            <Flex justify={"between"}>
                                <Form.Label>Email:</Form.Label>
                                <Form.Message
                                    match={"valueMissing"}
                                    className="text-red-500 font-light text-sm"
                                >
                                    Please Enter a Email
                                </Form.Message>
                                <Form.Message
                                    match={"typeMismatch"}
                                    className="text-red-500 font-light text-sm"
                                >
                                    Please enter a valid Email
                                </Form.Message>
                            </Flex>
                            <Form.Control asChild>
                                <input
                                    type="email"
                                    className="bg-gray-800 mt-4 p-1 w-[20rem] rounded-xl border-1 border-gray-700"
                                    placeholder="example@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name="password" className="px-20 mt-4">
                            <Flex justify={"between"}>
                                <Form.Label>Password:</Form.Label>
                                <Form.Message
                                    match={"valueMissing"}
                                    className="text-red-500 font-light text-sm"
                                >
                                    Please Enter a Password
                                </Form.Message>
                            </Flex>
                            <Form.Control asChild>
                                <input
                                    type="password"
                                    className="bg-gray-800 mt-4 p-1 w-[20rem] rounded-xl border-1 border-gray-700"
                                    placeholder="******"
                                    min={"8"}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </Form.Control>
                        </Form.Field>

                        <Flex
                            direction={"column"}
                            justify={"between"}
                            className="py-5 px-20 items-center w-full"
                        >
                            <Form.Submit>
                                <Button loading={loading} size={"3"}>
                                    Register
                                </Button>
                            </Form.Submit>
                            <Link
                                to={"/login"}
                                className="text-gray-500 font-light text-sm hover:text-white transition mt-4"
                            >
                                Already have an account? Login.
                            </Link>
                        </Flex>
                    </Form.Root>
                </Box>
            </Flex>
            <Toast.Root
                open={open}
                onOpenChange={setOpen}
                duration={3000}
                className="grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-green-700 p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
            >
                <Toast.Title>Ok!</Toast.Title>
                <Toast.Description>successfully registered</Toast.Description>
            </Toast.Root>
            <Toast.Viewport className="fixed bottom-0 right-0 p-4" />
        </Toast.Provider>
    );
}
