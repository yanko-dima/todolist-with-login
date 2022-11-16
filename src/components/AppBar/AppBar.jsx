import css from './AppBar.module.css';
import { TaskCouner } from 'components/TaskCounter/TaskCounter';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';

export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <TaskCouner />
      <StatusFilter />
    </header>
  );
};
