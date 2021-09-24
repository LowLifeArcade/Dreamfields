import React, { useState, useEffect, useContext } from 'react';
import NavMainSection from './NavMainSection/index.js';
import { Context } from '../context';
import axios from 'axios';
// import { toast } from 'react-toastify';
import router from 'next/router';
import NavRightItems from './NavRightItems';

// TODO: added current page location to set highlight to current nav link corresponding to page. I need to set the glowing class up.

const NavBar = ({ onLogoClick, showSideMenu }) => {
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
    // toast.warn(data.message);
    router.push('/login'); // instead of const router = useRouter()
  };
  return (
    <>
      <head className="notranslate">
        <meta httpEquiv="content-language" content="en" />
        <meta name="google" content="notranslate" />
      </head>

      <div className="navbar">
        <div className="leftNavItems">
          {/* <h1 onClick={() => onLogoClick(!showSideMenu)}>DF </h1> */}
          <div className="input">
            <i className="fas fa-search"></i> &nbsp;{' '}
            <input type="search" placeholder="Search" />
          </div>
        </div>

        <NavMainSection
          loggedIn={user}
          current={current}
          setCurrent={setCurrent}
        />
        <NavRightItems
          loggedIn={user}
          logOut={logout}
          setCurrent={setCurrent}
        />
      </div>
      <Style />
    </>
  );
};

export default NavBar;

const Style = () => {
  return (
    <style jsx>{`
      .navbar {
        color: #4e6985;
        display: flex;
        padding: 0.55rem 0.75rem;
        height: 43px;
        justify-content: space-between;
        width: 100%;
        position: absolute;
        background: #f2f3f5;
        // background: rgb(40, 42, 43);
        // background: rgb(252, 248, 237);
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
        z-index: 1;
        top: 0;
        overflow-x: hidden;
      }

      .leftNavItems > h1 {
        margin-right: 10px;
        font-size: 1.4rem;
        border: solid 1px;
        padding: 3px 8px;
        cursor: pointer;
      }

      .leftNavItems {
        flex-grow: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .input {
        display: flex;
        align-items: center;
        background: #e9ecee;
        padding: 0.4rem;
        margin-left: 0.6rem;
        border-radius: 0.2rem;
        box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.212),
          inset 0px 0px 1px rgba(0, 0, 0, 0.5);
      }

      .input > i {
        color: rgb(150, 150, 150);
      }
      .input > input {
        border: none;
        outline-width: 0;
        background-color: transparent;
      }

      @media (max-width: 860px) {
        .input {
          display: none;
        }
      }
    `}</style>
  );
};
