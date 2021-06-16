import {useState} from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

const Layout = (props) => {
  const [sideBarSize, setSideBarSize] = useState();
  return (
    <>
      {<NavBar sideBarSize={sideBarSize} onLogoClick={setSideBarSize} />}
      <div className="flex-layout">


        {props.showSideBar && <SideBar size={sideBarSize} />}

        <div className='content'>
        {props.children}
        </div>
      </div>

      <style jsx>{`
        .flex-layout {
          min-height: 100vh;
          display: flex;
          height: 100vh;
        }
        .content {
          width: 100%;

        }
      `}</style>
    </>
  );
};

export default Layout;
