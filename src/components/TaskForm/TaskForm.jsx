import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text"
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
