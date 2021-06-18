import styles from '../styles/NavBar.module.css';
import Link from 'next/link';

const NavMainItems = ({setCurrent, iconName, location, active}) => {
  return (
    <>
      <div key={location || ''} onClick={(e) => setCurrent(e.key)} className={`${active && 'active'}  + ${styles.links}`}>
        <Link href={location || ''}>
          <a>
            <span>
             <i className={iconName}></i>
            </span>
          </a>
        </Link>
      </div>
      <style jsx>{`
          .active {
            color: rgb(5, 137, 224);
            transition: .4s ease-in;
          }
        `}</style>
    </>
  );
};

export default NavMainItems;
