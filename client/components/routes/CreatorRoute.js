import { useEffect, useState } from 'react';
// import { Context } from '../../context';
import axios from 'axios';
import router from 'next/router';

const CreatorRoute = ({ children }) => {
  // state
  const [ok, setOk] = useState(false);
  // router

  useEffect(() => {
    fetchCreator();
  }, []);

  const fetchCreator = async () => {
    try {
      const { data } = await axios.get('/api/current-creator');
      data.ok && setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push('/');
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

export default CreatorRoute;
