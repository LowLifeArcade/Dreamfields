import { useContext, useState } from 'react';
import { Context } from '../../context';
import Button from '../../components/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
// import UserRoute from '../../components/routes/UserRoute';
import router from 'next/router';

const BecomeCreator = () => {
  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);

  const becomeCreator = () => {
      setLoading(true)
      axios.post('/api/make-creator')
      .then((res) => {
        console.log(res)
        window.location.href = res.data
      })
      .catch((err) => {
        console.log(err.response.status)
        // toast.error('Stripe onboarding failed')
        setLoading(false)
      })
  }
  return (
    <div>
      <div className="container">
        <div className="pageContainer">
          <h1>Become Creator</h1>
          <i className="fas fa-user fa-3x"></i>
          <div className="">
            <p> Set up payments</p>
            <Button onClick={becomeCreator} buttonName='Payout Setup' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeCreator;
