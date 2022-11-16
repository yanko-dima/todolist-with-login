import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectVisibleTasks } from 'redux/selectors';
import css from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};
