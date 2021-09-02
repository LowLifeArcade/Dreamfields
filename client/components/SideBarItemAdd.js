import Link from 'next/link';

const SideBarItem = () => {
  return (
    <>
      <Style />
      <Link href={`/creator/field/create`}>
        <a>
          <div className="sideBarItem">
            <div>
              <div className="sideBarAdd">
                <span>
                  <i class="fas fa-plus fa-2x"></i>
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default SideBarItem;

const Style = () => {
  return (
    <style jsx>{`
      .sideBarItem {
        display: flex;
        align-items: center;
        padding: 6px 4px;
      }

      // .sideBarImage:hover {
      //   background-color: rgb(233, 231, 231);
      //   border-radius: 4px;
      // }
      .sideBarImage {
        /* padding: 4px 4px; */
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-size: cover;
        /* background-position: top center; */
      }
      .sideBarAdd {
        font-size: 0.85rem;
        padding: 4px 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-size: cover;
        background: #f3f3f3;
        border: solid 1px #889296;
        color: #333;
      }

      .sideBarContent {
        margin-left: 12px;
        font-weight: 600;
        padding: 17px 0;
        visibility: visible;
        transition: 1s ease-in-out;
      }

      .hide {
        display: none;
        /* visibility: hidden; */
        transition: 0.2s ease-in-out;
      }
    `}</style>
  );
};
