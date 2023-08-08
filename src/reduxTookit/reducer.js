import { createReducer } from "@reduxjs/toolkit";


export const firstReducer = createReducer({
    count: 0
}, {
    increment: (state, action) => {
       state.count += action.payload
    },
    decrement: (state, action) => {
        state.count -= action.payload
    }
})

export const secondReducer = createReducer({val : 1}, {
    multiply: (state, action) => {
        state.val *= action.payload
    },
    divide: (state, action) => {
        state.val /= action.payload
    }
})


