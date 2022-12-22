import {createSlice} from "@reduxjs/toolkit"

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state + action.payload;
    },
    removeContact: (state, action) => {
      state + action.payload;
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;