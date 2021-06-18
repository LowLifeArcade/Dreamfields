import styles from '../../styles/NavBar.module.css';
import Link from 'next/link';
import NavMainItems from '../NavMainItems';
import NavMainPlaceholder from '../NavMainPlaceholder';
import { Context } from '../../context';
import { useContext , useState} from 'react';

const NavMainSection = ({ setCurrent, loggedIn, current }) => {
  // const [currentLocation, setCurrentLocation] = useState('');
  const {
    state: { user },
  } = useContext(Context);
  return (
    <>
      <div className={styles.mainNavItems}>
        {loggedIn ? (
          <>
            <NavMainItems
              active={current === '/' && true}
              setCurrent={setCurrent}
              iconName="far fa-newspaper fa-2x"
              location="/"
            />
            <NavMainItems
              active={current === '/projects' && true}
              setCurrent={setCurrent}
              iconName="fas fa-briefcase fa-2x"
              location="/projects"
            />
            <NavMainItems
              active={current === '/edit' && true}
              setCurrent={setCurrent}
              iconName="far fa-edit fa-2x"
              location={
                (user && !user.role.includes('Creator') && '/edit') ||
                (user.role.includes('Creator') && '/edit/creator')
              }
            />
            {/* far fa-edit fa-2x */}
            <NavMainItems
              active={current === '/login' && true}
              setCurrent={setCurrent}
              iconName="fas fa-satellite fa-2x"
              location="/login"
            />
            <NavMainItems
              active={current === '/user' || current === '/creator' || current === '/creator/field/create' }
              setCurrent={setCurrent}
              iconName="far fa-id-badge fa-2x"
              location={
                (user && !user.role.includes('Creator') && '/user') ||
                (user.role.includes('Creator') && '/creator')
              }
            />
          </>
        ) : (
          <NavMainPlaceholder
            setCurrent={setCurrent}
            name="Dream Fields"
            location="/register"
          />
        )}
      </div>
    </>
  );
};

export default NavMainSection;
