import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../types";
import { RootState } from "../store";

const initialState: ITask[] = JSON.parse(localStorage.getItem("tasks") || "[]");

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<ITask>): void {
            state.push(action.payload);
            localStorage.setItem("tasks", JSON.stringify(state));
        },
        editTask(state, action: PayloadAction<ITask>): void {
            const taskIndex = state.findIndex(
                (task) => task.id === action.payload.id,
            );
            if (taskIndex !== -1) {
                state[taskIndex] = action.payload;
                localStorage.setItem("tasks", JSON.stringify(state));
            }
        },
        deleteTask(state, action: PayloadAction<string>): void {
            const taskIndex = state.findIndex(
                (task) => task.id = action.payload,
            );
            if(taskIndex !== -1) {
                state.splice(taskIndex, 1);
                localStorage.setItem("tasks", JSON.stringify(state));
                console.log(state);
            }
        },
        toggleTaskCompletion(state, action: PayloadAction<string>): void {
            const taskIndex = state.findIndex(
                (task) => task.id === action.payload,
            );
            if (taskIndex !== -1) {
                state[taskIndex].completed = !state[taskIndex].completed;
                localStorage.setItem("tasks", JSON.stringify(state));
            }
        },
    },
});

export const selectTasks = (state: RootState) => state.tasks;
export const { addTask, toggleTaskCompletion, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
