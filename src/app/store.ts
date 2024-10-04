import { combineReducers, configureStore } from "@reduxjs/toolkit";
import turboLoaderReducer from "./slices/turboLoaderslice";
import taskSliceReducer from "./slices/taskSlice";
import userSliceReducer from "./slices/userSlice";
import dialogSliceReducer from "./slices/dialogSlice";

const rootReducer = combineReducers({
    turboLoader: turboLoaderReducer,
    tasks: taskSliceReducer,
    user: userSliceReducer,
    dialog: dialogSliceReducer,
});
export const store = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
