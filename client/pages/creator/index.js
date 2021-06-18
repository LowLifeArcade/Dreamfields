import CreatorRoute from '../../components/routes/CreatorRoute'
import { useEffect, useContext } from 'react';
import { Context } from '../../context';
import UserRoute from '../../components/routes/UserRoute';
import Button from '../../components/Button';
import router from 'next/router';

const CreatorIndex = () => {
  const { state: {user} } = useContext(Context);

  return (
    <CreatorRoute>
      <h1 className="miniJumboTron">Creator Dashboard</h1>
      <div className="container">
        <div className="leftSideContainer"></div>
        <div className="pageContainer">
        <h1>Welcome back {user && user.name}</h1>
          <Button color="#276a72" onClick={() => router.push('/creator/field/create')} buttonName="New Field" /> 
        </div>
        <div className="rightSideContainer"></div>
      </div>
    </CreatorRoute>
  );
};

export default CreatorIndex;
