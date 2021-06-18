import DashboardSidebar from './DashboardSidebar';
// TODO: pull class names from global into this file along with media query
// TODO: media query right side away first at like 1000 then later left side
const DashboardLayout = ({ title, children, items, ...restProps }) => {
  return (
    <div>
      <h1 className="miniJumboTron">{title}</h1>
      <div className="container">
        <div className="left-side-container ">
          <DashboardSidebar items={items} />{' '}
        </div>
        <div className="pageContainer">{children}</div>
        <div className="rightSideContainer"></div>
      </div>
      <style jsx>{`
        .left-side-container {
          width: 20vw;
          top: 0;
          position: sticky;
        }
        `}</style>
    </div>
  );
};

export default DashboardLayout;
