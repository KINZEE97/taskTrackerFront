export type TaskStatus = "done" | "in progress" | "pending" | "late";

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
