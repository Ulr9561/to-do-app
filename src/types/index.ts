export interface IUser {
    name: string;
    username: string;
    email: string;
}

export interface ITask {
    id: string;
    title: string;
    completed: boolean;
}

export type TurboLoaderProps = {
    isLoading: boolean;
    color?: string;
};

export type ButtonProps = {
    text?: string;
    className?: string;
    onClick?: () => void;
    type?: "add" | "edit" | "delete" | "logout" | "cancel" | "submit";
}

export type DialogProps = {
    isOpen: boolean;
    task?: ITask;
    type: "edit" | "delete";
}
