import { Dialog, Form } from "radix-ui";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Box, Button, Flex } from "@radix-ui/themes";
import React, { useState } from "react";
import { useAppContext } from "../hook/useAppContext";

interface Props {
    id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    onChange: () => void;
}

export default function UpdateTaskButton({
    id,
    title,
    description,
    status: initialStatus,
    priority: initialPriority,
    onChange,
}: Props) {
    const [loading, setLoading] = useState(false);
    const [taskTitle, setTaskTitle] = useState(title);
    const [taskDescription, setTaskDescription] = useState(description);
    const [taskStatus, setTaskStatus] = useState(initialStatus);
    const [taskPriority, setTaskPriority] = useState(initialPriority);

    const { updateTask } = useAppContext();

    const handleUpdateTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) throw new Error("no token provided");

        try {
            const response = await updateTask(
                id,
                {
                    title: taskTitle,
                    description: taskDescription,
                    status: taskStatus,
                    priority: taskPriority,
                },
                token
            );
            onChange();
            return response;
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Box className="text-end">
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <Button variant="outline">
                            <Pencil1Icon /> Edit
                        </Button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 data-[state=open]:animate-overlayShow" />
                        <Dialog.Content className="fixed border-1 border-gray-700 left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-900 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
                            <Dialog.Title className="m-0 text-[17px] font-medium">
                                Edit Task
                            </Dialog.Title>
                            <Dialog.Description className="text-gray-500 text-sm font-light">
                                Edit your task to make thing more clear
                            </Dialog.Description>
                            <Form.Root onSubmit={handleUpdateTask}>
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
                                            required
                                            className="bg-gray-700 w-[20rem] p-1 rounded-2xl"
                                            value={taskTitle}
                                            onChange={(e) =>
                                                setTaskTitle(e.target.value)
                                            }
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
                                            className="w-[20rem] p-1 rounded-xl bg-gray-700"
                                            value={taskDescription}
                                            onChange={(e) =>
                                                setTaskDescription(
                                                    e.target.value
                                                )
                                            }
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
                                                    value={"LOW"}
                                                    checked={
                                                        taskPriority === "LOW"
                                                    }
                                                    onChange={(e) =>
                                                        setTaskPriority(
                                                            e.target.value
                                                        )
                                                    }
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
                                                    checked={
                                                        taskPriority ===
                                                        "MEDIUM"
                                                    }
                                                    onChange={(e) =>
                                                        setTaskPriority(
                                                            e.target.value
                                                        )
                                                    }
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
                                                    value={"HIGH"}
                                                    checked={
                                                        taskPriority === "HIGH"
                                                    }
                                                    onChange={(e) =>
                                                        setTaskPriority(
                                                            e.target.value
                                                        )
                                                    }
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
                                                    checked={
                                                        taskStatus === "PENDING"
                                                    }
                                                    onChange={(e) =>
                                                        setTaskStatus(
                                                            e.target.value
                                                        )
                                                    }
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
                                                    value={"IN_PROGRESS"}
                                                    checked={
                                                        taskStatus ===
                                                        "IN_PROGRESS"
                                                    }
                                                    onChange={(e) =>
                                                        setTaskStatus(
                                                            e.target.value
                                                        )
                                                    }
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
                                                    name="status"
                                                    value={"DONE"}
                                                    checked={
                                                        taskStatus === "DONE"
                                                    }
                                                    onChange={(e) =>
                                                        setTaskStatus(
                                                            e.target.value
                                                        )
                                                    }
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
                                                    name="status"
                                                    value={"LATE"}
                                                    checked={
                                                        taskStatus === "LATE"
                                                    }
                                                    onChange={(e) =>
                                                        setTaskStatus(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Flex>

                                <Form.Submit className="mt-[25px]" asChild>
                                    <button
                                        className="bg-blue-700 cursor-pointer rounded-xl p-2"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        Edit task
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
