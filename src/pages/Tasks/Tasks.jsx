import { TasksList } from 'components/TasksList/TasksList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { selectIsLoading } from 'redux/tasks/selectors';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TasksBar } from 'components/TasksBar/TasksBar';

const Tasks = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks);
  }, [dispatch]);

  return (
    <>
      <TasksBar />
      <TaskForm />
      <div>{isLoading && 'Loading...'}</div>
      <TasksList />
    </>
  );
};

export default Tasks;
