import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { fetchList, updateList, receiveUpdateList } from '../../redux/actions';
import { getList, getListStatus, getListError } from '../../redux/selectors';

// components
import LoadingSpinner from '../../components/LoadingSpinner';

// constants
import { FETCHING, IDLE } from '../../constants/fetchStatusTypes';

const List = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch, fetchList]);

  // callbacks
  const handleChange = useCallback(
    (e) => {
      e.preventDefault();
      setValue(e.target.value);
    },
    [setValue]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(receiveUpdateList({ title: value }));
      setValue('');
    },
    [dispatch, receiveUpdateList, value, setValue]
  );

  // selectors
  const status = useSelector(getListStatus);
  const error = useSelector(getListError);
  const list = useSelector(getList);

  const fetching = status === IDLE || status === FETCHING;

  if (fetching) return <LoadingSpinner />;
  if (error) return <div>Error</div>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button>Add item</button>
        {list.map((item) => (
          <div>{item.title}</div>
        ))}
      </form>
    </div>
  );
};

export default List;
