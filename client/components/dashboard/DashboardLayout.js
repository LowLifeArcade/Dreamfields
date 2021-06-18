import DashboardSidebar from './DashboardSidebar';
const DashboardLayout = ({ title, children, items, ...restProps }) => {
  return (
    <div>
      {/* <h1 className="mini-jumboTron">{title}</h1> */}
      <div className="layout-container">
        <div className="left-side-container ">
          <DashboardSidebar items={items} />{' '}
        </div>
        <div className="page-container">
          <div className="main-content">{children}</div>
        </div>
        <div className="right-side-container"></div>
      </div>
      <style jsx>{`
        .mini-jumboTron {
          color: rgb(109, 102, 96);
          font-family: 'Anton', sans-serif;
          display: flex;
          flex-direction: column;
          height: 80px;
          background: url('https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')
            rgb(219, 195, 150) no-repeat center center/cover;
          width: 100%;
          background-size: 800px;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0px 0px 20px rgba(35, 40, 54, 0.6);
        }

        .mini-jumboTron > img {
        }

        .mini-jumboTron > h1 {
          color: aliceblue;
          font-size: 3rem;
          padding: 20px;
          box-shadow: 0, 3px, 3px, rgba(0, 0, 0, 0.6);
          /* outline: solid 1px; */
        }
        .mini-jumboTron > p {
          margin-top: 1rem;
          font-style: italic;
        }
        .layout-container {
          position: fixed;
          display: flex;
          /* align-items: center; */
          justify-content: flex-start;
          background: rgb(209, 209, 209);
        }

        .page-container {
          background: rgb(204, 204, 204);
          display: flex;
          justify-content: space-evenly;
          width: 100%;
          /* border-left: solid 1px rgb(173, 173, 173); */
          /*border-right: solid 1px rgb(173, 173, 173); */
          height: 100vh;
        }
        .main-content {
          background: rgb(255, 255, 255);
          overflow-y: scroll;
          // justify-content: flex-start;
          //width: 60vw;
          flex: 0 0 800px;
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
        .left-side-container {
          width: 220px;
          top: 0;
          //position: sticky;
          
          flex-shrink: 0;
          transition: 0.3s ease-in;
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
          .main-content  {
            flex: 0 0 100%;
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
