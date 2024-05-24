import { problem_manager, Basic_Problem_Manager } from './dataValid';
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: "",
    password: "",
    problem_manager: Basic_Problem_Manager
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.problem_manager = Basic_Problem_Manager;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
      state.problem_manager = Basic_Problem_Manager;
    },
    setPM: (state) => {
      state.problem_manager = problem_manager(state);
    },
    postStatus: (state, action) => {
      state.problem_manager = {status: action.payload,  type_error: "connection"};
    }
  }
})

export const { setUser, setPassword, setPM, postStatus } = loginSlice.actions;

export default loginSlice.reducer;