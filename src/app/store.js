//import store
import { configureStore } from "@reduxjs/toolkit";


//import reducer
import userDetailSlice from "../features/userDetailSlice";


//export store
export const store = configureStore({
    reducer : {
     app :  userDetailSlice,
    }
})