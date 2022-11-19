import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from 'redux/constants';

const filterInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
