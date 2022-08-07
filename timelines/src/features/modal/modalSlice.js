import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  content: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state, { payload }) => {
      state.isOpen = true;
      state.content = payload;
    },
    modalClose: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { modalOpen, modalClose } = modalSlice.actions;
export default modalSlice.reducer;
