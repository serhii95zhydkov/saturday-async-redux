import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUsers } from 'redux/users/usersSelectors';

const UsersList = () => {
  const users = useSelector(selectUsers);
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
