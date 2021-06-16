import { useState } from 'react';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';

// TODO: add hide password eye icon and functionality
// Also add social login button

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });

      toast.warning('Registration successfull', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data, {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container background">
        <form onSubmit={handleSubmit} className="form" action="submit">
          <Card
            title="Register"
            imgTitle="Dream Fields"
            imgSubTitle="If you come, they will build it."
            img="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
          >
            <FormInput
              value={name}
              onChange={setName}
              htmlFor="Name"
              type="text"
              // placeholder="Enter Name"
            />
            <FormInput
              value={email}
              onChange={setEmail}
              htmlFor="Email"
              type="text"
              // placeholder="Enter Email"
            />
            <FormInput
              value={password}
              onChange={setPassword}
              htmlFor="Password"
              type="new-password"
              // placeholder="Enter New Password"
            />
            <FormInput
              value={confirmPassword}
              onChange={setConfirmPassword}
              htmlFor="Confirm Password"
              type="new-password"
              // placeholder="Confirm Password"
            />
            <div className="btn">
              <Button
                disabled={!name || !email || !password || loading}
                buttonName="Submit"
              />
            </div>
            <div className='loginlink' >
              <p>
                Already registered? &nbsp;
                <Link href="/login">
                  <a  className='login' >Login</a>
                </Link>
              </p>
            </div>
          </Card>
        </form>
        <style jsx>
          {`
            .btn {
              margin-top: 14px;
            }
            .background {
              background: rgb(192, 192, 192);
              height: 120vh;
            }
            .loginlink {
              font-size: .8rem;
              margin-top: 15px;
            }

            .login {
              color: rgb(55, 155, 155);
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Register;
