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
          {props.showSideBar && user && <SideBar size={sideBarSize} />}
          <div className="content">{props.children}</div>
        </div>
      </div>

      <style jsx>{`
        .layoutContainer {
          width: 100%;
        }
        .flex-layout {
          top: 49px;

          position: fixed;
          display: flex;
          height: 100vh;
          width: inherit;

        }
        .content {
          width: 100%
          height: 100vh;
          overflow-y: scroll;
          flex: 0 1 100%;
        }
      `}</style>
    </>
  );
};

export default Layout;
