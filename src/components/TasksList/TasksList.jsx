import { useSelector } from 'react-redux';
import { TaskItem } from 'components/TaskItem/TaskItem';
import { selectVisibleTasks } from 'redux/tasks/selectors';
import css from './TasksList.module.css';

export const TasksList = () => {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
