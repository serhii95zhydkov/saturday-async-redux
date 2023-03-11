import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUsers } from 'redux/users/usersOperations';

import UsersList from 'components/UsersList/UsersList';

const UsersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <UsersList />
    </>
  );
};

export default UsersPage;
