import { configureStore } from "@reduxjs/toolkit";
import editModeReducer from "../slices/editModeSlice";
import { create } from "zustand";


export const useStore = create(() => ({
     cardName: "YAPIKREDİ",
}));


export const store = configureStore({
     reducer: {
          editMode: editModeReducer,
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;