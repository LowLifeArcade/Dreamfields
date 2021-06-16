import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import NavSection from './NavSection/index.js';

// TODO: added current page location to set highlight to current nav link corresponding to page. I need to set the glowing class up.

const NavBar = (props) => {
  const [current, setCurrent] = useState('')
  console.log(current)
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])
  return (
    <>
      <head className="notranslate">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <meta http-equiv="content-language" content="en" />
        <meta name="google" content="notranslate" />
      </head>
      <div className={styles.navbar}>
        <NavSection /> 
        <div className={styles.leftNavItems}>
          <h1 onClick={() => props.onLogoClick(!props.sideBarSize)}>DF </h1>
          <div className={styles.input}>
            <i class="fab fa-searchengin"></i> &nbsp;{' '}
            <input type="search" placeholder="Search" />
          </div>
        </div>

        <div className={styles.mainNavItems}>
          <div key='/' onClick={e => setCurrent(e.key)} className={styles.links}>
            <Link href="/">
              <a>
                <span>
                  <i className="fas fa-home fa-2x"></i>
                </span>
              </a>
            </Link>
          </div>
          <div key='/projects' onClick={e => setCurrent(e.key)} className={styles.links}>
            <Link href="/projects">
              <a>
                <span>
                  <i class="fas fa-briefcase fa-2x"></i>{' '}
                </span>
              </a>
            </Link>
          </div>
          <div key='/edit' onClick={e => setCurrent(e.key)} className={styles.links}>
            <Link href="/edit">
              <a>
                <span>
                  <i class="far fa-edit fa-2x"></i>
                </span>
              </a>
            </Link>
          </div>
          {/* Is !Auth  */}
          <div key='/login' onClick={e => setCurrent(e.key)} className={styles.links}>
            <Link href="/login">
              <a>
                <span>
                  <i class="fas fa-sign-in-alt fa-2x"></i>{' '}
                </span>
              </a>
            </Link>
          </div>
          <div key='/register' onClick={e => setCurrent(e.key)} className={styles.links}>
            <Link href="/register">
              <a>
                <span>
                  <i class="far fa-id-badge fa-2x"></i>{' '}
                </span>
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.rightNavItems}>
          <div className={styles.rightItem}>
            {/* <Avatar /> */}
            <span>
              <i class="fas fa-user-astronaut"></i>
            </span>
          </div>
          <div className={styles.rightItem}>
            <span>
              <i class="fas fa-plus"></i>
            </span>
          </div>
          <div className={styles.rightItem}>
            <span>
              <i class="far fa-comments"></i>
            </span>
          </div>
          <div className={styles.rightItem}>
            <span>
              <i class="far fa-bell"></i>
            </span>
          </div>
          <div className={styles.rightItem}>
            <span>
              <i class="fas fa-caret-down"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
