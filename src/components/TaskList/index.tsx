import React from "react";
import TaskBox from "../TaskBox";
import { ITask } from "../../types";

type TaskListProps = {
    tasks: ITask[];
};

const TaskList: React.FC<TaskListProps> = React.memo(({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <TaskBox
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    completed={task.completed}
                />
            ))}
        </>
    );
});

export default TaskList;
