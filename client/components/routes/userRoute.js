import { useEffect, useState } from 'react';
// import { Context } from '../../context';
import axios from 'axios';
import router from 'next/router';

const UserRoute = ({ children }) => {
  // state
  const [ok, setOk] = useState(false);
  // router

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/api/current-user');
      data.ok && setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push('/login');
    }
  };

  return (
    <>
      {!ok ? (
        <div className="glimmer">
          'GLIMMER
          <style jsx>{`
            .glimmer {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default UserRoute;
