import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { RootState } from "../store";

const initialState: IUser = JSON.parse(localStorage.getItem("user") || "{}");

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state = action.payload;
            localStorage.setItem("user", JSON.stringify(state));
        },
        clearUser() {
            localStorage.removeItem("user");
            return {} as IUser;
        },
    },
});

export const selectUser = (state: RootState) => state.user;
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
