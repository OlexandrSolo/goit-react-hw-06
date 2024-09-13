import { configureStore } from "@reduxjs/toolkit"

const initialValues = {
    contacts: {
        items: []
    },
    filters: {
        name: ""
    }
}


const rootReducer = (state = initialValues, action) => {
    return state
}

export const store = configureStore({
    reducer: rootReducer
})