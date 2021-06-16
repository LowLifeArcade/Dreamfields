import styles from '../styles/NavBar.module.css';
import Link from 'next/link';

const NavMainItems = ({setCurrent, iconName, location}) => {
  return (
    <>
      <div key={location || ''} onClick={(e) => setCurrent(e.key)} className={styles.links}>
        <Link href={location || ''}>
          <a>
            <span>
             <i className={iconName}></i>
            </span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default NavMainItems;
