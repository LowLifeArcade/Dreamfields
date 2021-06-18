import DashboardSidebar from './DashboardSidebar';
const DashboardLayout = ({ title, children, items, ...restProps }) => {
  return (
    <div>
      {/* <h1 className="mini-jumboTron">{title}</h1> */}
      <div className="layout-container">
        <DashboardSidebar  items={items} />{' '}
        <div className="page-container">
          <div className="main-content">{children}</div>
        </div>
        <div className="right-side-container"></div>
      </div>
      <style jsx>{`
        .layout-container {
          display: flex;
          //position: fixed;
          background: rgb(209, 209, 209);
          justify-content: space-between;
        }
        .page-container {
          background: rgb(204, 204, 204);
          //display: flex;
          width: 800px;
          height: 100vh;
          flex: 0 0 800px;
        }
        .main-content {
          background: rgb(255, 255, 255);
          overflow-y: scroll;
          // justify-content: flex-start;
          //width: 60vw;
          /* border-left: solid 1px rgb(173, 173, 173); */
          /*border-right: solid 1px rgb(173, 173, 173); */
          height: 100%;
          padding: 10px 20px;
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
          align-items: center;
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
