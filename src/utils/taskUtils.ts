export type TaskStatus = "DONE" | "IN_PROGRESS" | "PENDING" | "LATE";

export type Task = {
    id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
};

export interface Tasks {
    tasks: Task[];
    status: TaskStatus;
}
