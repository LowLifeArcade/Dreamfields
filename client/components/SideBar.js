import { useState, useContext } from 'react';
import SideBarItem from './SideBarItem';
import SideBarShortcuts from './SideBarShortcuts';
import styles from '../styles/SideBar.module.css';
import Size from '../contexts/SideBarSize';

const SideBar = (props) => {
  const [clicked, setClicked] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      title: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1603344204980-4edb0ea63148?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      title: 'Intentionally ',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      title: 'Pizza',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1546624538-0a85938a4f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80',
      title: 'Zuccini',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=838&q=80',
      title: 'Treasure',
      slug: '',
    },
    {
      id: '',
      avatarImg: '',
      title: 'Add New',
      slug: '',
    },
  ]);
  const [favorites, setFavorites] = useState([
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      title: 'Pizza',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1546624538-0a85938a4f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80',
      title: 'Zuccini',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=838&q=80',
      title: 'Treasure',
      slug: '',
    },
  ]);
  return (
    <>

        <div
          className={props.size ? `${styles.sideBar}` : `${styles.sideBarSmall}`}
        >
          <div className={styles.top}>
            <div className={styles.topContent}>
              {projects.map((project, i) => (
                <>
                  <div key={i} className={styles.sideBarImageName}>
                    {project.title}
                  </div>
                  <SideBarItem size={props.size} {...project} />
                </>
              ))}
            </div>
          </div>
          <div>
            <div
              className={clicked ? `${styles.bottomTitle}` : `${styles.hide}`}
            >
              Short Cuts
            </div>
          </div>
          <div className={styles.bottomContent}>
            {favorites.map((project) => (
              <>
                <SideBarItem  size={props.size} {...project} />
              </>
            ))}
          </div>
        </div>

    </>
  );
};

export default SideBar;
