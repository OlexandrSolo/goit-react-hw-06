import { configureStore, createAction } from "@reduxjs/toolkit"

export const newContact = createAction("contact/newContact")
export const deleteContact = createAction("contact/deleteContact")
export const searchContact = createAction('filters/searchContact')
export const filterList = createAction('filters/filterList')


const initialValues = {
    contacts: {
        items: [{
            "id": "id-1",
            "name": "Rosie Simpson",
            "number": "459-12-56"
        },
        {
            "id": "id-2",
            "name": "Hermione Kline",
            "number": "443-89-12"
        },
        {
            "id": "id-3",
            "name": "Eden Clements",
            "number": "645-17-79"
        },
        {
            "id": "id-4",
            "name": "Annie Copeland",
            "number": "227-91-26"
        }]
    },
    filters: {
        name: ""
    }
}


const rootReducer = (state = initialValues, action) => {
    switch (action.type) {
        case "contact/newContact":
            return {
                ...state,
                contacts: {
                    items: [...state.contacts.items, action.payload]
                }
            }
        case "contact/deleteContact":
            return {
                ...state,
                contacts: {
                    items: state.contacts.items.filter(contact => contact.id !== action.payload)
                }
            }
        case "filters/searchContact":
            return {
                ...state,
                filters: {
                    name: action.payload
                    // contacts: {
                    //     items: state.contacts.items.filter(contact => contact.id === action.payload)
                    // }
                }
            }

        case "filters/filterList": {
            return {
                ...state,
                contact: {
                    items: state.contacts.items.filter(contact => contact.name.toLowerCase() === action.payload.toLowerCase())
                }
            }
        }
        default:
            return state;
    };


}

export const store = configureStore({
    reducer: rootReducer
})