import { Dialog, Form } from "radix-ui";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex } from "@radix-ui/themes";
import React, { useState } from "react";
import { useAppContext } from "../hook/useAppContext";

export default function AddTaskButton() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("PENDING");
    const [priority, setPriority] = useState("MEDIUM");
    const token = localStorage.getItem("token");

    const { addNewTask } = useAppContext();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!token) throw new Error("No token provided");

        try {
            const response = await addNewTask(
                {
                    title,
                    description,
                    status,
                    priority,
                },
                token
            );

            setTitle("");
            setDescription("");
            setStatus("PENDING");
            setStatus("MEDIUM");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Box className="text-end px-4">
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <Button>
                            <PlusCircledIcon /> Add new task
                        </Button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 data-[state=open]:animate-overlayShow" />
                        <Dialog.Content className="fixed border-1 border-gray-700 left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-900 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
                            <Dialog.Title className="m-0 text-[17px] font-medium">
                                New Task
                            </Dialog.Title>
                            <Dialog.Description className="text-gray-500 text-sm font-light">
                                Add your task, so you don't get lost in your
                                activities
                            </Dialog.Description>
                            <Form.Root onSubmit={handleSubmit}>
                                <Form.Field name="title" className="mt-4">
                                    <Flex
                                        justify={"between"}
                                        align={"baseline"}
                                        className="mb-1 mr-20"
                                    >
                                        <Form.Label className="text-sm">
                                            Title:
                                        </Form.Label>
                                        <Form.Message
                                            match={"valueMissing"}
                                            className="text-gray-500 text-sm font-light"
                                        >
                                            Please enter a title
                                        </Form.Message>
                                    </Flex>
                                    <Form.Control asChild>
                                        <input
                                            type="text"
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                            value={title}
                                            required
                                            className="bg-gray-700 w-[20rem] p-1 rounded-2xl"
                                        />
                                    </Form.Control>
                                </Form.Field>
                                <Form.Field
                                    name="description"
                                    className="mt-4 border-gray-600"
                                >
                                    <Flex
                                        justify={"between"}
                                        align={"baseline"}
                                        className="mb-1 mr-20"
                                    >
                                        <Form.Label className="text-sm">
                                            Description:
                                        </Form.Label>
                                        <Form.Message
                                            match={"valueMissing"}
                                            className="text-gray-500 text-sm font-light"
                                        >
                                            Please enter a description
                                        </Form.Message>
                                    </Flex>
                                    <Form.Control asChild>
                                        <textarea
                                            required
                                            onChange={(e) =>
                                                setDescription(e.target.value)
                                            }
                                            value={description}
                                            className="w-[20rem] p-1 rounded-xl bg-gray-700"
                                        />
                                    </Form.Control>
                                </Form.Field>

                                <hr className="my-4" />

                                <Flex justify={"between"} className="px-5">
                                    <Box>
                                        <Flex direction={"column"} gap={"2"}>
                                            <Box>
                                                <label
                                                    htmlFor="LOW"
                                                    className="text-sm mr-4 text-green-700"
                                                >
                                                    Low
                                                </label>
                                                <input
                                                    type="radio"
                                                    id="LOW"
                                                    name="priority"
                                                    onChange={(e) =>
                                                        setPriority(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={"LOW"}
                                                />
                                            </Box>
                                            <Box>
                                                <label
                                                    htmlFor="MEDIUM"
                                                    className="text-sm mr-4 text-yellow-300"
                                                >
                                                    Medium
                                                </label>
                                                <input
                                                    type="radio"
                                                    id="MEDIUM"
                                                    name="priority"
                                                    value={"MEDIUM"}
                                                    onChange={(e) =>
                                                        setPriority(
                                                            e.target.value
                                                        )
                                                    }
                                                    defaultChecked
                                                />
                                            </Box>
                                            <Box>
                                                <label
                                                    htmlFor="HIGH"
                                                    className="text-sm mr-4 text-red-700"
                                                >
                                                    High
                                                </label>
                                                <input
                                                    type="radio"
                                                    id="HIGH"
                                                    name="priority"
                                                    onChange={(e) =>
                                                        setPriority(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={"HIGH"}
                                                />
                                            </Box>
                                        </Flex>
                                    </Box>
                                    <Box>
                                        <Flex direction={"column"} gap={"2"}>
                                            <Box>
                                                <label
                                                    htmlFor="pending"
                                                    className="text-sm mr-4 text-white-700"
                                                >
                                                    Pending
                                                </label>
                                                <input
                                                    type="radio"
                                                    id="pending"
                                                    name="status"
                                                    value={"PENDING"}
                                                    onChange={(e) =>
                                                        setStatus(
                                                            e.target.value
                                                        )
                                                    }
                                                    defaultChecked
                                                />
                                            </Box>
                                            <Box>
                                                <label
                                                    htmlFor="IN_PROGRESS"
                                                    className="text-sm mr-4 text-white-700"
                                                >
                                                    In Progress
                                                </label>
                                                <input
                                                    type="radio"
                                                    id="IN_PROGRESS"
                                                    name="status"
                                                    onChange={(e) =>
                                                        setStatus(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={"IN_PROGRESS"}
                                                />
                                            </Box>
                                            <Box>
                                                <label
                                                    htmlFor="DONE"
                                                    className="text-sm mr-4 text-white-700"
                                                >
                                                    Done
                                                </label>
                                                <input
                                                    type="radio"
                                                    id="DONE"
                                                    onChange={(e) =>
                                                        setStatus(
                                                            e.target.value
                                                        )
                                                    }
                                                    name="status"
                                                    value={"DONE"}
                                                />
                                            </Box>
                                            <Box>
                                                <label
                                                    htmlFor="LATE"
                                                    className="text-sm mr-4 text-white-700"
                                                >
                                                    Late
                                                </label>
                                                <input
                                                    type="radio"
                                                    id="LATE"
                                                    onChange={(e) =>
                                                        setStatus(
                                                            e.target.value
                                                        )
                                                    }
                                                    name="status"
                                                    value={"LATE"}
                                                />
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Flex>

                                <Form.Submit className="mt-[25px]" asChild>
                                    <button
                                        className="bg-blue-700 cursor-pointer rounded-xl p-2"
                                        type="submit"
                                    >
                                        Add New Task
                                    </button>
                                </Form.Submit>
                                <Dialog.Close className="mt-4 bg-gray-600 cursor-pointer p-2 rounded-xl ml-2">
                                    Cancel
                                </Dialog.Close>
                            </Form.Root>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </Box>
        </>
    );
}
