import { useState, useContext } from 'react';
import { Context } from '../context';
import NavBar from './NavBar';
import SideBar from './SideBar';

const Layout = (props) => {
  const [sideBarSize, setSideBarSize] = useState();

  const {
    state: { user },
  } = useContext(Context);
  return (
    <>
      {<NavBar sideBarSize={sideBarSize} onLogoClick={setSideBarSize} />}
      <div className="layoutContainer">
        <div className="flex-layout">
          {props.showSideBar && user && 
            <div className='sidebar'>

            <SideBar size={sideBarSize} />
            </div>
          }
          <div className="content">{props.children}</div>
        </div>
      </div>

      <style jsx>{`
        .layoutContainer {
          width: 100%;
        }

        .sidebar {
          width: 65px;
          height: 100%;
        }
        .flex-layout {
          //top: 49px;

         position: fixed; // this did it
          display: flex;
          height: 94%;
          width: inherit;

        }
        .content {
          width: 100%
          height: 94vh;
          overflow-y: scroll;
          flex: 0 1 100%;
        }
      `}</style>
    </>
  );
};

export default Layout;
