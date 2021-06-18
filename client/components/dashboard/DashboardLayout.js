import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = ({ title, children, items, ...restProps }) => {
  return (
    <div>
      <h1 className="miniJumboTron">{title}</h1>
      <div className="container">
        <div className="leftSideContainer">
          <DashboardSidebar items={items} />{' '}
        </div>
        <div className="pageContainer">{children}</div>
        <div className="rightSideContainer"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
