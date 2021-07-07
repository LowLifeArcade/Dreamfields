import Link from 'next/link';

const DashboardSideBarItem = (props) => {
  return (
    <>
      <Link href={props.slug}>
        <a>
          <div className="menu-item">
            <div className="icon">{props.icon}</div>
            <div className="name">{props.name}</div>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .menu-item {
            color: rgb(80, 80, 80);
            display: flex;
            padding: 15px 0;
            padding-left: 15px;
          }
          .menu-item:hover {
            background: #fff;
          }
          .icon {
            padding-right: 10px;
          }
          .item {
            //border-bottom: 1px solid rgb(155, 155, 155);
          }
          .item ::after {
            border-bottom: none;
          }
        `}
      </style>
    </>
  );
};

export default DashboardSideBarItem;
