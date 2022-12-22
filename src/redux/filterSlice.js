import {createSlice} from "@reduxjs/toolkit"

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, action) => {
      state + action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;