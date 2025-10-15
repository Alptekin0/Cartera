import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     value: false
}


export const editModeReducer = createSlice({
     name: "editModeReducer",
     initialState,
     reducers: {
          toggleEditMode: (state) => {
               state.value = !state.value;
          },
          setEditMode: (state, action) => {
               state.value = action.payload;
          },

     }

})

export default editModeReducer.reducer
export const { toggleEditMode, setEditMode } = editModeReducer.actions;