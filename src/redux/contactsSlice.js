import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [{
            id: "39231-ds423-32414332",
            name: "Dmytrii",
            number: "3806638123189",
        },
        ],
    },
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (value) => {
                return {
                    payload: {
                        id: crypto.randomUUID(),
                        ...value,
                    }
                }
            }
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
