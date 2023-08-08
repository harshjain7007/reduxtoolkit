import { configureStore } from "@reduxjs/toolkit";
import { firstReducer } from "./reducer";
import { secondReducer } from "./reducer";

const store = configureStore({
    reducer:{
        first: firstReducer,
        second: secondReducer
    }
})

export default store