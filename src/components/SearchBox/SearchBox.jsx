import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector(state => state.filters.name);
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={selectNameFilter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
