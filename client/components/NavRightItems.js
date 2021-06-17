import router from 'next/router';
import SmallNavItem from './SmallNavItem';
import SmallNavLoginItem from './SmallNavLoginItem'

const NavRightItems = ({ loggedIn, setCurrent, logOut }) => {
  return (
    <>
      <div className="rightNavItems">
        {loggedIn && (
          <div className="rightLoggedInNavItems">
            <SmallNavItem onClick={() => router.push('/user')} iconName="fas fa-user-astronaut" />
            <SmallNavItem iconName="fas fa-plus" />
            <SmallNavItem iconName="far fa-comments" />
            <SmallNavItem iconName="far fa-bell" />
          </div>
        )}
        {!loggedIn && (
          <p className="rightTitle">Alright signed up?&nbsp;&nbsp;</p>
        )}
        <SmallNavLoginItem
          location="/"
          loggedIn={loggedIn}
          setCurrent={setCurrent}
          logOut={logOut}
          text={loggedIn ? 'Logout' : 'Login'}
          iconName="fas fa-caret-down"
        />
      </div>
      <style jsx>{`
        .rightNavItems {
          display: flex;
          flex-grow: 1;
          align-items: center;
          justify-content: flex-end;
          color: rgb(95, 95, 95);
        }
        .rightLoggedInNavItems {
          display: flex;
          flex-grow: 1;
          align-items: center;
          justify-content: flex-end;
          color: rgb(95, 95, 95);
        }
        @media(max-width: 1060px) {
          .rightLoggedInNavItems {
            display: none;
          }
        @media(max-width: 860px) {
          .rightTitle {
            display: none;
          }
        @media(max-width: 576px) {
          .rightNavItems {
            display: none;
          }
          
        `}</style>
    </>
  );
};

export default NavRightItems;
