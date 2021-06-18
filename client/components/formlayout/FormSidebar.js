import { useState } from 'react';
import FormSideBarItem from './FormSidebarItem';
// TODO: make groupings of items. arrays in arrays. sections basically

const FormSidebar = (props) => {
  return (
    <>
      <div className="left-dash-container">
        <div className="side-bar">
          {props.items &&
            props.items.map((item, i) => (
              <>
                <FormSideBarItem {...item} key={i} name={item.name} />
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
          overflow: scroll;
          top: 0;
          transition: 0.2s ease-in-out;
          background: rgb(240, 240, 240);
          border-right: 1px solid rgb(197, 194, 173);
        }
        .left-dash-container {
          width: 220px;
          top: 0;
          flex-shrink: 0;
          transition: 0.3s ease-in;
        }
        .item {
        }
        @media (max-width: 860px) {
          .left-dash-container {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default FormSidebar;
