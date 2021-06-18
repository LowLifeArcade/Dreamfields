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
          iconName="far fa-newspaper fa-2x"
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
        {/* far fa-edit fa-2x */}
        <NavMainItems
          setCurrent={setCurrent}
          iconName="fas fa-satellite fa-2x"
          location="/login"
        />
        <NavMainItems
          setCurrent={setCurrent}
          iconName="far fa-id-badge fa-2x"
          location="/user"
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
