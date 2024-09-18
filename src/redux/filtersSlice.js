import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: "filters", initialState: {
        name: ""
    }, reducers: {
        filters: (state, action) => {
            state.name = action.payload
        }
    }
})
export const selectFilter = (state) => state.filters.name
export const { filters } = slice.actions

export default slice.reducer