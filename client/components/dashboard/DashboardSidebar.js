import { useState } from 'react';
import DashboardSideBarItem from './DashboardSidebarItem';

const DashboardSidebar = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div
        className='side-bar'
      >
        <div className='content'>
          {props.items &&
            props.items.map((item, i) => (
              <>
                <DashboardSideBarItem {...item} key={i} name={item.name} />
              </>
            ))}
        </div>
      </div>
      <style jsx>{`
        .side-bar {
          height: 100vh;
          padding: 10px 7px;
          flex: 0 1 75px;
          position: sticky;
          top: 0;
          transition: 0.2s ease-in-out;
          background: rgb(240, 240, 240);
          border-right: 1px solid rgb(197, 194, 173);
        }
        .content {
        }
        .item {
        }
      `}</style>
    </>
  );
};

export default DashboardSidebar;
