import { useEffect, useContext } from 'react';
import { Context } from '../../context';
import UserRoute from '../../components/routes/UserRoute';
import Button from '../../components/Button';
import router from 'next/router';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import FormCard from '../../components/formlayout/FormCard';

const UserIndex = () => {
  const { state: {user} } = useContext(Context);

  return (
    <UserRoute>
      <DashboardLayout title='Artist Dashboard'>
    <FormCard>

        <h1>Welcome back {user && user.name}</h1>
          {user && user.role.includes('creator') ? <Button color="#276a72" buttonName="New Field" /> : <Button color="#276a72" onClick={() => router.push('/user/become-creator')} buttonName="Become Creator" /> }
    </FormCard>
      </DashboardLayout>

    </UserRoute>
  );
};

export default UserIndex;
