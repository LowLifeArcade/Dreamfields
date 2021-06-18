import { useEffect, useContext } from 'react';
import { Context } from '../../context';
import UserRoute from '../../components/routes/UserRoute';
import Button from '../../components/Button';

const UserIndex = () => {
  const { state: {user} } = useContext(Context);

  return (
    <UserRoute>
      <h1 className="miniJumboTron">Dashboard</h1>
      <div className="container">
        <div className="leftSideContainer"></div>
        <div className="pageContainer">
        <h1>Welcome back {user && user.name}</h1>
          {user && user.role.includes('creator') ? <Button color="#276a72" buttonName="New Field" /> : <Button color="#276a72" buttonName="Become Creator" /> }
        </div>
        <div className="rightSideContainer"></div>
      </div>
    </UserRoute>
  );
};

export default UserIndex;
