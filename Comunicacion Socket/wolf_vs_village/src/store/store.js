import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/login/loginSlice'; 
import registerReducer from './features/register/registerSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer
  }
})