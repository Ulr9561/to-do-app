import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TurboLoaderProps } from "../../types";
import { RootState } from "../store";

const initialState: TurboLoaderProps = {
    isLoading: false,
    color: "#FAFAFA",
};
const turboLoaderSlice = createSlice({
    name: "turboLoader",
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setColor(state, action: PayloadAction<string>) {
            state.color = action.payload;
        }
    }
});

export const selectIsLoading = (state: RootState) => state.turboLoader.isLoading;
export const selectColor = (state: RootState) => state.turboLoader.color;
export const { setIsLoading } = turboLoaderSlice.actions;
export default turboLoaderSlice.reducer;
