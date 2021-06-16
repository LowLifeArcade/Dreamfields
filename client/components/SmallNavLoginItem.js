import Link from "next/link";
import router from "next/router";

const SmallNavLoginItem = ({ loggedIn, setCurrent, logOut, location, ...props }) => {
  return (
    <>
      <div className="rightItem">
        <span onClick={loggedIn ? logOut :()=> router.push('/login') }>
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

export default SmallNavLoginItem;
