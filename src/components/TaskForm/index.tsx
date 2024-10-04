import { useState } from "react";
import Button from "../Button";
import { useAppDispatch } from "../../app/hooks";
import { addTask } from "../../app/slices/taskSlice";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { ITask } from "../../types";

const TaskForm: React.FC = React.memo(() => {
    const [title, setTitle] = useState("");

    const dispatch = useAppDispatch();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title) {
            const newTask: ITask = { id: uuidv4(), title, completed: false };
            dispatch(addTask(newTask));
            setTitle("");
        }
    };

    return (
        <form
            id="task-form"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-between items-center mb-4 shadow-lg p-4 rounded bg-bg-primary w-full min-w-28"
        >
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-12 p-3 mb-4 sm:mb-0 sm:mr-4 text-lg rounded outline-none border-none w-full sm:w-3/4 lg:w-1/2"
                placeholder="Entrez le titre de la tâche"
                aria-placeholder="Entrez le titre de la tâche"
            />
            <Button
                className="w-full sm:w-auto text-white bg-accent-primary rounded p-3 hover:bg-accent-primary/80"
                text="Ajouter une tâche"
                type="add"
            />
        </form>
    );
});

export default TaskForm;
