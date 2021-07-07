import { useState, useContext } from 'react';
import { Context } from '../context';
import NavBar from './NavBar';
import SideBar from './SideBar';
import DashboardSideBar from './dashboard/DashboardSidebar';

const Layout = (props) => {
  const [showSideMenu, setShowSideMenu] = useState(); // lifted and shared state for sidebar and navbar

  const {
    state: { user },
  } = useContext(Context);
  return (
    <>
      {<NavBar showSideMenu={showSideMenu} onLogoClick={setShowSideMenu} />}
      <div className="layout-container">
        <div className="flex-layout">
          {props.showSideBar && user && (
            <>

            <div className="sidebar">
              <SideBar />
            </div>
              <DashboardSideBar showSideMenu={showSideMenu} items1={props.sideMenuItems} />
            </>
          )}
          <div className="content">{props.children}</div>
        </div>
      </div>

      <style jsx>{`
        .layout-container {
          width: 100%;
        }

        .sidebar {
          height: 100%;
        }
        .flex-layout {
          position: fixed; // this did it
          display: flex;
          height: 94%;
          width: inherit;
        }
        .content {
          // width: 80vw;
          height: 100%;
          overflow-y: scroll;
          flex: 0 1 100%;
        }
      `}</style>
    </>
  );
};

export default Layout;
