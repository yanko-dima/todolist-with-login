import css from './TasksBar.module.css';
import { TaskCouner } from 'components/TaskCounter/TaskCounter';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';

export const TasksBar = () => {
  return (
    <div className={css.wrapper}>
      <TaskCouner />
      <StatusFilter />
    </div>
  );
};
