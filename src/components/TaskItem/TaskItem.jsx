import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/tasks/operations';
import { MdClose } from 'react-icons/md';
import css from './TaskItem.module.css';

export const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleCompleted(task));
  };

  return (
    <li className={css.listItem}>
      <div className={css.wrapper}>
        <input
          type="checkbox"
          className={css.checkbox}
          checked={task.completed}
          onChange={handleToggle}
        />
        <p className={css.text}>{task.text}</p>
        <button className={css.btn} onClick={handleDelete}>
          <MdClose size={22} />
        </button>
      </div>
    </li>
  );
};
