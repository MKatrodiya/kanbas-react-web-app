import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    _id: "",
    username: "",
    email: "",
    role: "",
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
