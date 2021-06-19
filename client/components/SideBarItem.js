import {useState} from 'react';
import styles from '../styles/SideBar.module.css';
import Link from 'next/link';

const SideBarItem = ({ size, slug, avatarImg, title, clicked, ...rest }) => {
  return (
    <Link href={slug || ''}>
      <a>
        <div className={styles.sideBarItem}>
          <div>
            {avatarImg ? (
              <img className={styles.sideBarImage} src={avatarImg} alt="Proj" />
            ) : (
              <div className={styles.sideBarAdd}>
                <i class="fas fa-plus fa-2x"></i>
              </div>
            )}
          </div>
          {avatarImg && <div className={size ? `${styles.sideBarContent}` : `${styles.hide}`}>{title}</div>}
        </div> 
        
      </a>
    </Link>
  );
};

export default SideBarItem;
