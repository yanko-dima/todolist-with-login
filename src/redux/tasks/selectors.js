import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from 'redux/constants';
import { selectStatusFilter } from 'redux/filter/selectors';

export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;

export const selectTaskCount = createSelector([selectTasks], tasks => {
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }

      return acc;
    },
    { active: 0, completed: 0 }
  );

  return count;
});

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);
