import React from "react";
import Button from "../Button";
import { DialogProps } from "../../types";
import { useAppDispatch } from "../../app/hooks";
import { deleteTask, editTask } from "../../app/slices/taskSlice";
import { setClose } from "../../app/slices/dialogSlice";

const Dialog: React.FC<DialogProps> = ({ isOpen, task, type }) => {
    const [taskTitle, setTaskTitle] = React.useState(task?.title || "");
    const [taskCompleted, setTaskCompleted] = React.useState(
        task?.completed || false,
    );
    const dispatch = useAppDispatch();

    const handleAction = () => {
        if (task) {
            console.log(task);
            dispatch(
                type === "delete"
                    ? deleteTask(task.id)
                    : type === "edit"
                      ? editTask({
                            id: task?.id,
                            title: taskTitle,
                            completed: taskCompleted,
                        })
                      : setClose(true),
            );
            dispatch(setClose(true));
        }
    };
    const handleCancel = () => {
        console.log("cancel");
        dispatch(setClose(true));
    };
    return (
        isOpen && (
            <div className="inset-0 fixed bg-bg-primary bg-opacity-80 flex justify-center items-center flex-col">
                <div className="bg-bg-secondary rounded-lg p-6 shadow-lg max-w-md w-full">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
                        {task?.title}
                    </h1>
                    {type === "edit" ? (
                        <form
                            onSubmit={handleAction}
                            className="flex flex-col justify-center gap-4"
                        >
                            <input
                                type="text"
                                value={taskTitle}
                                name="taskTitle"
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className="p-2 border border-gray-300 rounded text-base"
                            />
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={taskCompleted}
                                    onChange={() =>
                                        setTaskCompleted(!taskCompleted)
                                    }
                                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                                <label className="text-text-primary">
                                    Tâche complétée
                                </label>
                            </div>
                            <div className="flex justify-center gap-2">
                                <Button
                                    type="submit"
                                    text="Soumettre"
                                    className=" text-white p-2 rounded transition duration-200"
                                />
                                <Button
                                    type="cancel"
                                    text="Annuler"
                                    onClick={handleCancel}
                                    className=" text-white p-2 rounded transition duration-200 bg-red-600 bg- hover:bg-red-600/80"
                                />
                            </div>
                        </form>
                    ) : type === "delete" ? (
                        <div className="flex flex-col gap-4 justify-center">
                            <h2>Voulez-vous supprimer cette tâche ?</h2>
                            <div className="flex justify-center gap-2">
                                <Button
                                    text="Supprimer"
                                    type="delete"
                                    onClick={handleAction}
                                />
                                <Button
                                    text="Annuler"
                                    type="cancel"
                                    className=" text-white p-2 rounded transition duration-200 bg-emerald-600 bg- hover:bg-emerald-600/80"
                                    onClick={handleCancel}
                                />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        )
    );
};

export default Dialog;
