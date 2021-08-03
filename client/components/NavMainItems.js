import styles from '../styles/NavBar.module.css';
import Link from 'next/link';

const NavMainItems = ({
  className,
  setCurrent,
  iconName,
  location,
  active,
}) => {
  return (
    <>
      <div
        key={location || ''}
        onClick={(e) => setCurrent(e.key)}
        className={`item ${active && 'active'} + ${styles.links}`}>
        <Link href={location || ''}>
          <a>
            <span>
              <i className={iconName}></i>
            </span>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .item {
          //color: rgb(168, 171, 172);
          font-size: 0.8rem;
        }
        .active {
          color: rgb(5, 137, 224);
          transition: 0.4s ease-in;
        }
      `}</style>
    </>
  );
};

export default NavMainItems;
