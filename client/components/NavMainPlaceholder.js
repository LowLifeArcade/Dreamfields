import styles from '../styles/NavBar.module.css';
import Link from 'next/link';

const NavMainPlaceholder = ({setCurrent, iconName, location, name}) => {
  return (
    <>
      <div key={location || ''} onClick={(e) => setCurrent(e.key)} className={styles.links}>
        <Link href={location || ''}>
          <a>
            <span>
             {name && <div className='name'> {name} </div> } <i className={iconName}></i>
            </span>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .name {
          font-size: 2rem;
          border: solid 1px;
          padding: 3px 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default NavMainPlaceholder;
