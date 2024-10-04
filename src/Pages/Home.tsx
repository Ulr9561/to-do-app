import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectTasks } from "../app/slices/taskSlice";
import { clearUser, selectUser } from "../app/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { selectOpen, selectType } from "../app/slices/dialogSlice";
import Dialog from "../components/Dialog";
import { ITask } from "../types";

const Home: React.FC = () => {
    const tasks = useAppSelector(selectTasks);
    const user = useAppSelector(selectUser);
    const isOpen = useAppSelector(selectOpen);
    const type = useAppSelector(selectType);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [selectedFilter, setSelectedFilter] = useState<string>("all");
    const [filteredTasks, setFilteredTasks] = useState<ITask[]>(tasks);

    useEffect(() => {
        if (!user.email) {
            return navigate("/");
        }
    }, [navigate, user]);

    useEffect(() => {
        setFilteredTasks(
            tasks.filter((task) => {
                if (selectedFilter === "completed")
                    return task.completed === true;
                if (selectedFilter === "incomplete")
                    return task.completed === false;
                return true;
            }),
        );
    }, [selectedFilter, tasks]);

    return (
        <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary ">
            <header className="bg-bg-secondary p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Task Manager</h1>
                <Button
                    className="text-white bg-accent-secondary rounded p-2 hover:bg-accent-secondary/80"
                    type="logout"
                    onClick={() => dispatch(clearUser())}
                    text="Deconnexion"
                />
            </header>
            <main className="flex-grow p-4">
                <h2 className="text-3xl mb-4">Bienvenue, {user.name}</h2>
                <div className="bg-bg-secondary p-4 rounded-lg shadow-lg">
                    <h3 className="my-3 text-2xl">Liste des taches</h3>

                    <TaskForm />
                    <div className="mb-4">
                        <select
                            className="bg-bg-primary text-white p-2 rounded"
                            value={selectedFilter}
                            onChange={(e) => setSelectedFilter(e.target.value)}
                        >
                            <option value="all">Toutes les taches</option>
                            <option value="completed">Taches completes</option>
                            <option value="incomplete">
                                Taches incompletes
                            </option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <TaskList tasks={filteredTasks} />
                    </div>
                </div>
            </main>
            <Dialog isOpen={isOpen} task={tasks[0]} type={type} />
        </div>
    );
};

export default Home;
