import { useState, useContext, useEffect } from 'react';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { Context } from '../context';
import router, {useRouter} from 'next/router'

// TODO: add hide password eye icon and functionality
// Also add social login button

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // context state
  const {state, dispatch} = useContext(Context)
  const {user} = state 

  useEffect(() => {

    user && router.push('/')

  }, [user]);

  console.log('STATE', state)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });

      // dispatch to context for globale state
      dispatch({
        type: "LOGIN",
        payload: data,
      })

      // save in local storage
      window.localStorage.setItem('user', JSON.stringify(data))

      // redirect
      router.push('/')

      toast.warning('Login successfull', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log('LOGIN RES', data);
      // setLoading(false);
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
      {/* <div className="background">
        <style jsx>
          {`
            .background {
              background: url('https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')
                rgb(192, 192, 192) center center/cover;
              height: 120vh;
              filter: blur(4px);
              transform: scale(1.1);
            }
          `}
        </style>
      </div> */}
      <div className="container">
        <form onSubmit={handleSubmit} className="form" action="submit">
          <Card
            title="Login"
            imgTitle="Enter The Fields"
            imgSubTitle="If you come, they will build it."
            img="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
          >
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
            <div className="btn">
              <Button
                disabled={!email || !password || loading}
                buttonName="Submit"
              />
            </div>
            <div className="loginlink">
              <p>
                Not yet registered? &nbsp;
                <Link href="/register">
                  <a className="login">Register</a>
                </Link>
              </p>
            </div>
          </Card>
        </form>
            {/* .form {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            } */}
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
    </>
  );
};

export default Login;
