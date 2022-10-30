import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    name: "ashik",
    email: "ak21@mail.com",
  },
  {
    id: nanoid(),
    name: "rahman",
    email: "ka21@mail.com",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const getExistingUser = state.find((user) => user.id === id);
      if (getExistingUser) {
        getExistingUser.name = name;
        getExistingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const getExistingUser = state.find((user) => user.id === id);
      if (getExistingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
