import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DialogProps, ITask } from "../../types";

const initialState: DialogProps = {
    isOpen: false,
    type: "edit",
    task: undefined,
};
const dialogSlice = createSlice({
    name: "dialog",
    initialState,
    reducers: {
        setIsOpen(
            state,
            action: PayloadAction<{
                type: "edit" | "delete";
                task?: ITask;
                isOpen: boolean;
            }>,
        ) {
            state.isOpen = action.payload.isOpen;
            state.type = action.payload.type;
            state.task = action.payload.task;
        },
        setClose(state, action: PayloadAction<boolean>) {
            state.isOpen = !action.payload;
        }
    },
});

export const selectOpen = (state: RootState) => state.dialog.isOpen;
export const selectType = (state: RootState) => state.dialog.type;
export const selectTask = (state: RootState) => state.dialog.task;
export const { setIsOpen, setClose } = dialogSlice.actions;
export default dialogSlice.reducer;
