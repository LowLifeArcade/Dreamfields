import { useState, useContext } from 'react';
import { Context } from '../context';
import NavBar from './NavBar';
import SideBar from './SideBar';
import DashboardSideBar from './dashboard/DashboardSidebar';
import { ProjectContext } from '../contexts/SceneMachineProviders';

const Style = () => {
  return (
    <style jsx>{`
      .layout-container {
        width: 100%;
      }
      .flex-layout {
        position: fixed;
        display: flex;
        // height: 100vh;
        // width: inherit;
        justify-content: stretch;
        width: 100%;
      }
      .sidebar {
        height: 100%;
      }

      .content {
        overflow-y: scroll;
        flex: 0 1 100%;
        height: 100vh;
      }
    `}</style>
  );
};

const Layout = (props) => {
  const project = useContext(ProjectContext)
  console.log('PROJECT IN APP', project)
  const fakeMenuItems = [
    { slug: '/', icon: <i class="fas fa-home"></i>, name: 'Home' },
    { slug: '/edit/creator', icon: <i class="far fa-edit"></i>, name: 'Scene Machine' },
    { slug: '/creator', icon: <i class="fas fa-cog"></i>, name: 'Settings' },
    ,
  ];
  const fakeMenuItems2 = [
    { slug: '/projects', icon: <i class="fas fa-photo-video"></i>, name: 'Library' },
    { slug: `/creator/field/view/${project?.slug}`, icon: <i class="fas fa-phone-square-alt"></i>, name: 'Field' },
    { slug: '/creator', icon: <i class="fas fa-poll"></i>, name: 'Stats' },
    { slug: '/creator/field/create', icon: <i class="far fa-plus-square"></i>, name: 'Create New' }
  ];
  const [showSideMenu, setShowSideMenu] = useState(true); // lifted and shared state for sidebar and navbar

  const {
    state: { user },
  } = useContext(Context);
  return (
    <>
      <div className="layout-container">
        <div className="flex-layout">
          {!user && <NavBar showSideMenu={showSideMenu} onLogoClick={setShowSideMenu} />}
          {props.showSideBar && user && (
            <>
              <div className="sidebar">
                <SideBar
                  showSideMenu={showSideMenu}
                  onLogoClick={setShowSideMenu}
                  />
              </div>

              
              <DashboardSideBar
                showSideMenu={showSideMenu}
                items1={fakeMenuItems}
                items2={fakeMenuItems2}
              />
            </>
          )}

          <div className="content">{props.children}</div>
          <div></div>
        </div>
      </div>

      <Style />
    </>
  );
};

export default Layout;
