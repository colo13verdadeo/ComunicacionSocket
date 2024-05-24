import registerReducer from './features/register/registerSlice';
import loginReducer from './features/login/loginSlice'; 
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  }
})