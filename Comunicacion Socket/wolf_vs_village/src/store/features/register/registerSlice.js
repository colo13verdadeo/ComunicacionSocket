import { createSlice } from '@reduxjs/toolkit'

function userValid(user){
  return true;
}

function passwordValid(password){
  return true;
}

function emailValid(password){
    return true;
  }

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user: "",
    email: "",
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
    setEmail: (state, action) => {
        state.email = action.payload
      },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    postRegister: (state) => {
      if(userValid(state.user) && passwordValid(state.password) && emailValid(state.email)){
        // TODO: usar axios para enviar los datos a backend
      } else {
        // TODO: problem_manager.status = "ERROR"
      }
    }
  }
})

export const { setUser, setEmail, setPassword, postRegister } = registerSlice.actions;

export default registerSlice.reducer;