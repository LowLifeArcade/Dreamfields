import { useEffect, useContext } from 'react';
import { Context } from '../../context';
import UserRoute from '../../components/routes/userRoute';

const UserIndex = () => {
  const { state: user } = useContext(Context);

  return (
    <UserRoute>
      <h1 className="jumboTron">
        <pre>{JSON.stringify(user, null, 4)}</pre>{' '}
      </h1>
      
    </UserRoute>
  );
};

export default UserIndex;
