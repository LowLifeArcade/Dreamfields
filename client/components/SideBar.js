import { useState, useContext } from 'react';
import SideBarItem from './SideBarItem';
import styles from '../styles/SideBar.module.css';


// setup endpoint that just gets basic info about project OR using context get only basic info to use here.
const initialProjects = [
  {
    id: '',
    avatarImg:
      'https://cdnb.artstation.com/p/assets/images/images/020/562/285/large/sonny-sortzen-illustration136.jpg?1568253414',
    title: 'Paul Saves All',
    slug: '/creator/field/view/paul-saves-all',
  },
  {
    id: '',
    avatarImg:
      'https://images.unsplash.com/photo-1603344204980-4edb0ea63148?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Intentionally ',
    slug: '/creator/field/view/test-2',
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
]

const initialFavorites = [
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
]

const SideBar = () => {
  const [clicked, setClicked] = useState(false);
  const [projects, setProjects] = useState(initialProjects);
  const [favorites, setFavorites] = useState(initialFavorites);

  return (
    <>
<Style />
        <div
          className="sideBarSmall"
        >
          <div className="top">
            <div className="topContent">
              {projects.map((project, i) => (
                <>
                  <div key={i} className="sideBarImageName">
                    {project.title}
                  </div>
                  <SideBarItem  {...project} />
                </>
              ))}
            </div>
          </div>
          <div>
            <div
              className={clicked ? `bottomTitle` : `hide`}
            >
              Short Cuts
            </div>
          </div>
          <div className="bottomContent">
            {favorites.map((project, i) => (
              <>
                <SideBarItem key={i}  {...project} />
              </>
            ))}
          </div>
        </div>

    </>
  );
};

export default SideBar;


const Style = () => {
  return <style jsx>{`
  .sideBar {
    padding: 10px 2px;
    /* flex: 0 1 360px; */
    position: sticky;
    height: 100%;
    top: 0;
    width: 250px;
    /* height: 100vh; */
    /* transition: .3s ease-in-out; */
    background: rgb(240, 237, 230);
    border-right: 1px solid rgb(197, 194, 173)
  }
  
  .sideBarSmall {
    height: 100%;
    padding: 10px 2px;
    flex: 0 1 55px;
    position: sticky;
    top: 0;
    /* transition: .2s ease-in-out; */
    background: rgb(240, 237, 230);
    border-right: 1px solid rgb(197, 194, 173)
  }
  
  .sideBarItem:hover + .sideBarImageName {
    display: block;
  }
  
  .sideBarImageName {
    display: none;
    position: absolute;
    left: 30px;
    background: #999;
    border-radius: 3px;
    padding: 2px;
  }
  
  .top {
    height: 40vh;
    width: 100%;
    border-bottom: 1px solid rgb(230, 230, 230);
    margin-bottom: 10px;  
    overflow-y: scroll;
  }
  
  /* hides scroll bar */
  .top::-webkit-scrollbar {
    display: none;
  }
  
  .top {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .topContent {
  }
  .bottomTitle {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .bottomContent {
    padding-top: 10px;
    height: 40vh;
    width: 100%;
    overflow: scroll;
    border-top: 1px solid rgb(197, 194, 173)
  }
  .sideBarItem {
    display: flex;
    align-items: center;
    padding: 6px 4px;
  }
  
  .sideBarItem:hover {
    background-color: rgb(233, 231, 231);
    border-radius: 4px;
  }
  .sideBarImage {
    /* padding: 4px 4px; */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-size: cover;
    /* background-position: top center; */
  }
  .sideBarAdd {
    font-size: .85rem;
    padding: 4px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-size: cover;
    background: #f3f3f3;
    border: solid 1px;
    color: #333;
  }
  
  .sideBarContent {
    margin-left: 12px;
    font-weight: 600;
    padding: 17px 0;
    visibility: visible;
    transition: 1s ease-in-out;
  }
  
  .hide {
    display: none;
    /* visibility: hidden; */
    transition: .2s ease-in-out;
  }
  
  @media(max-width: 400px) {
    .sideBar {
      display: none;
    }
    .sideBarSmall {
      display: none;
    }
  }
  
  @media(max-width: 1168px) {
    .sideBar {
      /* display: none; */
      flex: 1 0 75px;
    }
  
    .sideBarContent {
      display: none;
    }
    .sideBarSmall {
      /* display: none; */
    }
  }
  
  `}</style>
}