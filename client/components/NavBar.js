import { useState, useEffect, useContext } from 'react';

import styles from '../styles/NavBar.module.css';
import NavMainSection from './NavMainSection/index.js';
import { Context } from '../context';
import axios from 'axios';
import { toast } from 'react-toastify';
import router from 'next/router';
import NavRightItems from './NavRightItems';

// TODO: added current page location to set highlight to current nav link corresponding to page. I need to set the glowing class up.

const NavBar = (props) => {
  const [current, setCurrent] = useState('');
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: 'LOGOUT' });
    window.localStorage.removeItem('user');
    const { data } = await axios.get('/api/logout');
    toast.warn(data.message);
    router.push('/login'); // instead of const router = useRouter()
  };
  return (
    <>
      <head className="notranslate">
        <meta http-equiv="content-language" content="en" />
        <meta name="google" content="notranslate" />
      </head>
      <div className={styles.navbar}>
        <div className={styles.leftNavItems}>
          <h1 onClick={() => props.onLogoClick(!props.sideBarSize)}>DF </h1>
          <div className={styles.input}>
            <i class="fab fa-searchengin"></i> &nbsp;{' '}
            <input type="search" placeholder="Search" />
          </div>
        </div>

        <NavMainSection loggedIn={user} setCurrent={setCurrent} />
        <NavRightItems loggedIn={user} logOut={logout} setCurrent={setCurrent} />
      </div>
    </>
  );
};

export default NavBar;
