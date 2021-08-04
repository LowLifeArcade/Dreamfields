import { useState, useContext, useEffect } from 'react';
import SideBarItem from './SideBarItem';
import SideBarItemAdd from './SideBarItemAdd';
import axios from 'axios';
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
];

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
  // {
  //   id: '',
  //   avatarImg:
  //     'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=838&q=80',
  //   title: 'Treasure',
  //   slug: '',
  // },
];

const SideBar = ({ onLogoClick, showSideMenu }) => {
  const [clicked, setClicked] = useState(false);
  const [projects, setProjects] = useState(initialProjects);
  const [favorites, setFavorites] = useState(initialFavorites);
  const [fields, setFields] = useState([]);

  useEffect(() => {
    loadFields();
  }, []);

  const loadFields = async () => {
    const { data } = await axios.get('/api/creator-fields');
    setFields(data);
  };

  console.log('fields', fields);

  return (
    <>
      <Style />
      <div className="sideBarSmall">
        <div className="top">
          <span>
            <div className="home" onClick={() => onLogoClick(!showSideMenu)}>
              <i
                
                class="far fa-caret-square-right fa-2x"></i>{' '}
            </div>
          </span>
          <div className="topContent">
            {fields.map((project, i) => (
              <>
                <div key={i} className="sideBarImageName">
                  {project.title}
                </div>
                <SideBarItem
                  index={Math.floor(Math.random() * 20)}
                  {...project}
                />
              </>
            ))}
            <SideBarItemAdd />
          </div>
        </div>
        {/* <div>
            <div
              className={clicked ? `bottomTitle` : `hide`}
            >
              Short Cuts
            </div>
          </div> */}
        <div className="bottomContent">
          <div className="bottom-item">
            <span>
              <i class="fas fa-palette fa-2x"></i>
            </span>
          </div>

          <div className="bottom-item">
            <span>
              <i class="fas fa-cog fa-2x"></i>
            </span>
          </div>
          {/* {favorites.map((project, i) => (
              <>
                <SideBarItem key={i}  {...project} />
              </>
            ))} */}
        </div>
      </div>
    </>
  );
};

export default SideBar;

const Style = () => {
  return (
    <style jsx>{`
      .home {
        color: rgb(107, 107, 107);
        padding-bottom: 10px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgb(197, 194, 173);
        cursor: pointer;
      }
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
        border-right: 1px solid rgb(197, 194, 173);
      }

      .sideBarSmall {
        display: flex;
        flex-direction: column;
        // justify-content: center;
        // align-items: center;
        height: 100vh;
        padding: 0px 0px;
        flex: 0 1 55px;
        position: sticky;
        top: 0;
        /* transition: .2s ease-in-out; */
        // background: rgb(34, 36, 37);
        background: #dedfe0;
        // background: rgb(240, 237, 230);
        border-right: 1px solid rgb(167, 167, 167);
        // border-right: 1px solid #a1a2a3;
      }

      // .sideBarItem:hover + .sideBarImageName {
      //   display: block;
      // }

      .sideBarImageName {
        display: none;
        position: absolute;
        left: 30px;
        background: #999;
        border-radius: 3px;
        padding: 2px;
      }

      .topContent {
        height: 70vh;
        width: 100%;
        padding-top: 10px;
        // border-bottom: 1px solid rgb(230, 230, 230);
        // margin-bottom: 10px;
        overflow-y: scroll;
      }

      /* hides scroll bar */
      .topContent::-webkit-scrollbar {
        display: none;
      }

      .topContent {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .topContent {
        display: flex;
        flex-direction: column;
        // justify-content: center;
      }
      .bottomTitle {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 10px;
        // margin-top: 10px;
      }
      .bottomContent {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding-top: 40px;
        height: 25vh;
        width: 100%;
        overflow: scroll;
        border-top: 1px solid rgb(197, 194, 173);
      }
      .bottom-item {
        color: rgb(82, 82, 82);
        padding-top: 20px;
      }
      .sideBarItem {
        display: flex;
        align-items: center;
        padding: 6px 4px;
      }

      // .sideBarItem:hover {
      //   background-color: rgb(233, 231, 231);
      //   border-radius: 4px;
      // }
      .sideBarImage {
        /* padding: 4px 4px; */
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-size: cover;
        /* background-position: top center; */
      }
      .sideBarAdd {
        font-size: 0.85rem;
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
        transition: 0.2s ease-in-out;
      }

      @media (max-width: 400px) {
        .sideBar {
          display: none;
        }
        .sideBarSmall {
          display: none;
        }
      }

      @media (max-width: 1168px) {
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
  );
};
