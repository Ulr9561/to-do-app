import React from "react";
import Button from "../Button";
import { useAppDispatch } from "../../app/hooks";
import { toggleTaskCompletion } from "../../app/slices/taskSlice";
import { ITask } from "../../types";
import { setIsOpen } from "../../app/slices/dialogSlice";

const TaskBox: React.FC<ITask> = React.memo(({ id, title, completed }) => {
    const dispatch = useAppDispatch();
    const handleAction = (type: "edit" | "delete") => {
        dispatch(
            setIsOpen({
                type: type,
                isOpen: true,
                task: { id, title, completed },
            }),
        );
    }
    return (
        <div
            className={`flex items-center justify-between p-2 rounded ${completed ? "bg-accent-primary bg-opacity-20" : "bg-bg-primary"}`}
        >
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => dispatch(toggleTaskCompletion(id))}
                    className="mr-2 h-5 w-5 text-accent cursor-pointer"
                />
                <span
                    className={`text-text-primary ${completed ? "line-through text-text-secondary" : ""}`}
                >
                    {title}
                </span>
            </div>
            <div className="flex">
                <Button
                    type="edit"
                    text="Modifier"
                    className="mr-2"
                    onClick={() => handleAction("edit")}
                />
                <Button
                    type="delete"
                    className="mr-2"
                    text="Supprimer"
                    onClick={() => handleAction("delete")}
                />
            </div>
        </div>
    );
});

export default TaskBox;
