import { useState } from 'react';
import DashboardSideBarItem from './DashboardSidebarItem';
// TODO: make groupings of items. arrays in arrays. sections basically
const DashboardSidebar = (props) => {
  return (
    <>
      <div className={`left-dash-container ${props.showSideMenu && 'hidden'}`}>
        {props.items1 && (
          <div className="side-bar">
            {props.items1.map((item, i) => (
              <>
                <DashboardSideBarItem {...item} key={i} />
              </>
            ))}
          </div>
        )}
        {props.items2 && (
          <div className="side-bar">
            {props.items2.map((item, i) => (
              <>
                <DashboardSideBarItem {...item} key={i} />
              </>
            ))}
          </div>
        )}
        {props.items3 && (
          <div className="side-bar">
            {props.items3.map((item, i) => (
              <>
                <DashboardSideBarItem {...item} key={i} />
              </>
            ))}
          </div>
        )}

        <style jsx>{`
          .left-dash-container.hidden {
            display: none;
          }
          .left-dash-container {
            width: 220px;
            top: 0;
            flex-shrink: 0;
            transition: 0.3s ease-in;
            height: 100vh;
            background: rgb(240, 240, 240);
            overflow: scroll;
            position: sticky;
            border-right: 1px solid rgb(197, 194, 173);
          }
          .side-bar {
            // padding: 10px 7px;
            flex: 0 1 75px;
            // overflow: scroll;
            top: 0;
            transition: 0.2s ease-in-out;
            padding: 10px 0;
            border-bottom: solid 1px rgb(197, 194, 173);
          }

          .item {
          }
          @media (max-width: 860px) {
            .left-dash-container {
              display: none;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default DashboardSidebar;
