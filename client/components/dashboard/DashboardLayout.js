import DashboardSidebar from './DashboardSidebar';
const DashboardLayout = ({ title, children, ...restProps }) => {
  // TODO: fix scrolling issue 
  return (
    <div>
      {/* <h1 className="mini-jumboTron">{title}</h1> */}
      <div className="layout-container">
        {/* <DashboardSidebar  items={items} />{' '} */}
        {/* <div className="page-container"> */}
          <div className="main-content">{children}</div>
        {/* </div> */}
        {/* <div className="right-side-container"></div> */}
      </div>
      <style jsx>{`
        .layout-container {
          display: flex;
          //position: fixed;
          width: 100%;
          background: rgb(209, 209, 209);
          justify-content: space-between;
        }
        .page-container {
          position: sticky;
          overflow: scroll;
          background: rgb(204, 204, 204);
          //display: flex;
          //width: 800px;
          width: 100%;
          height: 100vh;
          //flex: 0 0 800px;
        }
        .main-content {
          //background: rgb(255, 255, 255);
          overflow-y: scroll;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          // justify-content: flex-start;
          //width: 60vw;
          /* border-left: solid 1px rgb(173, 173, 173); */
          /*border-right: solid 1px rgb(173, 173, 173); */
          height: 100%;
          // padding: 10px 20px;
        }

        /* hides scroll bar */
        .main-content::-webkit-scrollbar {
          display: none;
        }

        .main-content {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .right-side-container {
          background: rgb(218, 218, 218);
          width: 20vw;
          border-left: solid 1px rgb(173, 173, 173);
          display: flex;
          aflex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
        .right-box {
          padding: 30px;
          width: 260px;
          background: #fff;
          margin: 20px;
          height: 500px;
          border-radius: 3px;
          box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
        }
        .right-side-item {
          padding: 15px 0;
        }
        @media (max-width: 1250px) {
          .layout-container {
            align-items: flex-start;
          }
          .right-side-container {
            display: none;
          }
          .left-side-container {
          }
          .page-container {
            width: 100%;
          }
        }

        @media (max-width: 1080px) {
          .page-container {
            flex: 0 1 100%;
          }
        }
        @media (max-width: 860px) {
          .left-side-container {
            display: none;
          }

          .page-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
