import { problem_manager, Basic_Problem_Manager } from './dataValid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: "",
  password: "",
  problem_manager: Basic_Problem_Manager
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
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
    },
    resetStateLogin: (state) => {
      return initialState;
    }
  }
})

export const { setUser, setPassword, setPM, postStatus, resetStateLogin } = loginSlice.actions;

export default loginSlice.reducer;