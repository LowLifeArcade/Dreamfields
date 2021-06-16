import styles from '../../styles/NavBar.module.css';
import Link from 'next/link';
import NavMainItems from '../NavMainItems';
import NavMainPlaceholder from '../NavMainPlaceholder';

const NavMainSection = ({ setCurrent, loggedIn }) => {
  return (
    <>
      <div className={styles.mainNavItems}>
        {loggedIn ? <>
        <NavMainItems
          setCurrent={setCurrent}
          iconName="fas fa-home fa-2x"
          location="/"
        />
        <NavMainItems
          setCurrent={setCurrent}
          iconName="fas fa-briefcase fa-2x"
          location="/projects"
        />
        <NavMainItems
          setCurrent={setCurrent}
          iconName="far fa-edit fa-2x"
          location="/edit"
        />
        <NavMainItems
          setCurrent={setCurrent}
          iconName="fas fa-sign-in-alt fa-2x"
          location="/login"
        />
        <NavMainItems
          setCurrent={setCurrent}
          iconName="far fa-id-badge fa-2x"
          location="/register"
        />
        </> : <NavMainPlaceholder
          setCurrent={setCurrent}
          name="Dream Fields"
          location="/register"
        />}
      </div>
    </>
  );
};

export default NavMainSection;
