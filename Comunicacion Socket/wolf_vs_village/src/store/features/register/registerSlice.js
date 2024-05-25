import { createSlice } from '@reduxjs/toolkit'
import { Basic_Problem_Manager, problem_manager } from './dataValid'

const initialState = {
  user: "",
  email: "",
  password: "",
  problem_manager: Basic_Problem_Manager
};

export const registerSlice = createSlice({
  name: 'register',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.problem_manager = Basic_Problem_Manager;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
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
    resetStateRegister: (state) => {
      return initialState;
    }
  }
})

export const { setUser, setEmail, setPassword, setPM, postStatus, resetStateRegister } = registerSlice.actions;

export default registerSlice.reducer;