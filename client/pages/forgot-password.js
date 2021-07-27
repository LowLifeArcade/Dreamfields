import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/dist/client/link';
import { Context } from '../context';
import router from 'next/router';
import CardPlain from '../components/CardPlain';
import FormInput from '../components/formlayout/FormInput';
import Button from '../components/Button';

const forgotPassword = () => {
  // State
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const [loading, setLoading] = useState('');
  const [submitted, setSubmitted] = useState(false)

  // context
  const {
    state: { user },
  } = useContext(Context);

  // redirect
  useEffect(() => {
    user && router.push('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/forgot-password`, { email });
      setSuccess(true);
      // toast.warn('Check email for further instructions');
      setLoading(false)
    } catch (err) {
      setLoading(false);
      // toast(err.response.data);
    }
  };

  const handleRestPassword = async (e) => {
      e.preventDefault()
      try {
        setLoading(true)
        const { data}= await axios.post('/api/reset-password', {
          email, code, newPassword
        })
        setEmail('')
        setCode('')
        setNewPassword('')
        setSubmitted(true)
        // toast.success('Your password has been changed');
        router.push('/login')
      } catch (err) {
        setLoading(false);
      // toast(err.response.data);
      }
  }
  return (
    <div>
      <div className="container">
        <form action="submit" onSubmit={success ? handleRestPassword : handleSubmit}>
          <CardPlain title="Forgot Password">
            <FormInput
              value={email}
              onChange={setEmail}
              htmlFor="Email"
              type="text"
              disabled={success}
              // placeholder="Enter Email"
            />
            {success && (
              <>
                <FormInput
                  value={code}
                  onChange={setCode}
                  htmlFor="Enter Reset Code"
                  type="text"
                  // placeholder="Enter Email"
                />
                <FormInput
                  value={newPassword}
                  onChange={setNewPassword}
                  htmlFor="New Password"
                  type="password"
                  // placeholder="Enter New Password"
                />
                <FormInput
                  value={repeatNewPassword}
                  onChange={setRepeatNewPassword}
                  htmlFor="Repeat New Password"
                  type="password"
                  // placeholder="Enter New Password"
                />
              </>
            )}
            <div className="btn">
              <Button disabled={submitted ? true : success ? !newPassword || !code :  !email || loading} buttonName="Submit" />
            </div>
          </CardPlain>
        </form>
        <style jsx>
          {`
            .form {
            }
            .btn {
              margin-top: 14px;
            }
            .background {
              background: url('https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')
                rgb(192, 192, 192) center center/cover;
              height: 120vh;
              filter: blur(4px);
            }
            .loginlink {
              font-size: 0.8rem;
              margin-top: 15px;
            }

            .login {
              color: rgb(55, 155, 155);
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default forgotPassword;
