import Link from 'next/link';

const DashboardSideBarItem = (props) => {
  return (
    <>
      <Link href={props.slug}>
        <a>
          <div className="item">{props.name}</div>
        </a>
      </Link>
      <style jsx>
        {`
          .item {
            padding: 15px 0;
            border-bottom: 1px solid rgb(155, 155, 155);
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
