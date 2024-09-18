import { createSlice } from "@reduxjs/toolkit"
import contactsData from "../data/contacts.json";

const INITIAL_STATE = {
    items: contactsData,
};

const slice = createSlice({
    name: "contacts", initialState: INITIAL_STATE,
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload)
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})
export const { addContact, deleteContact } = slice.actions
export const selectContact = (state) => state.contacts.items;
export default slice.reducer
