import { configureStore } from "@reduxjs/toolkit";
import editModeReducer from "../slices/editModeSlice";

export const store = configureStore({
     reducer: {
          editMode: editModeReducer,
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;