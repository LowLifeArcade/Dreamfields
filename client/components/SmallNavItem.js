import Link from "next/link";
import router from "next/router";

const SmallNavItem = ({ onClick, ...props }) => {
  return (
    <>
      <div className="rightItem">
        <span onClick={onClick}>
          {props.text} &nbsp; <i className={props.iconName}></i>
        </span>
      </div>
      <style jsx>
        {`
          .rightItem {
            padding: 0 0.5rem;
            cursor: pointer;
          }

          .rightItem:hover {
            color: #f1c056;
          }
        `}
      </style>
    </>
  );
};

export default SmallNavItem;
