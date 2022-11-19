import { useSelector } from 'react-redux';
import { selectTaskCount } from 'redux/tasks/selectors';
import css from './TaskCounter.module.css';

export const TaskCouner = () => {
  const count = useSelector(selectTaskCount);

  const { active, completed } = count;

  return (
    <div className={css.tasksCounter}>
      <h2 className={css.title}>Tasks:</h2>
      <ul className={css.tasksCounterList}>
        <li>Active: {active}</li>
        <li>Complited: {completed}</li>
      </ul>
    </div>
  );
};
