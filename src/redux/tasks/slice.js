import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState: tasksInitialState,
    extraReducers: {
      // FetckTasks Reducers
      [fetchTasks.pending]: handlePending,
      [fetchTasks.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      [fetchTasks.rejected]: handleRejected,
  
      // AddTask Reducers
      [addTask.pending]: handlePending,
      [addTask.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      },
      [addTask.rejected]: handleRejected,
  
      // DeleteTask Reducers
      [deleteTask.pending]: handlePending,
      [deleteTask.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      },
      [deleteTask.rejected]: handleRejected,
  
      //ToggleCompleted reduserc
      [toggleCompleted.pending]: handlePending,
      [toggleCompleted.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      },
      [toggleCompleted.rejected]: handleRejected,
    },
  });
  
  export const tasksReducer = taskSlice.reducer;
  