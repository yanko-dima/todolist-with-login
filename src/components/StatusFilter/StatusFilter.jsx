import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { useSelector } from 'react-redux';
import { selectStatusFilter } from 'redux/selectors';
import { statusFilters } from 'redux/constants';
import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = value => {
    dispatch(setStatusFilter(value));
  };

  return (
    <div className={css.statusFilter}>
      <h2 className={css.title}>Filter by status:</h2>
      <div className={css.wrapper}>
        <Button
          selected={filter === statusFilters.all}
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          All
        </Button>
        <Button
          selected={filter === statusFilters.active}
          onClick={() => handleFilterChange(statusFilters.active)}
        >
          Active
        </Button>
        <Button
          selected={filter === statusFilters.completed}
          onClick={() => handleFilterChange(statusFilters.completed)}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};
