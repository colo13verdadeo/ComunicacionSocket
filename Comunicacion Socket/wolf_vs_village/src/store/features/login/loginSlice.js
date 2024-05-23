import { createSlice } from '@reduxjs/toolkit'

function userValid(user){
  return true;
}

function passwordValid(password){
  return true;
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: "",
    password: "",
    problem_manager: {
      status: "INIT",
      type_error: "",
      error: ""
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    postLogin: (state) => {
      if(userValid(state.user) && passwordValid(state.password)){
        // TODO: usar axios para enviar los datos a backend
      } else {
        // TODO: problem_manager.status = "ERROR"
      }
    }
  }
})

export const { setUser, setPassword, postLogin } = loginSlice.actions;

export default loginSlice.reducer;