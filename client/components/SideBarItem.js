import Link from 'next/link';
import { useContext } from 'react';
import { setProjectContext } from '../contexts/SceneMachineProviders';
import axios from 'axios';

const SideBarItem = ({ index,slug, image, title, clicked, ...rest }) => {
  const dispatch = useContext(setProjectContext);

  console.log('slug ',slug)

  const loadField = async () => {
    const { data } = await axios.get(`/api/field/${slug}`);
    // setField(data);
    dispatch(['LOAD_PROJECT', data])
  };
  return (
    <>
      <Style />
      {/* <Link href={`/creator/field/view/${slug}` || ''}> */}
        {/* <a> */}
          <div className="sideBarItem">
            <div>
              {image ? (
                <img
                  className="sideBarImage"
                  src={image.Location}
                  alt="Proj"
                  onClick={loadField}
                />
              ) : (
                <div className="sideBarAdd">
                  <img
                  className="sideBarImage"
                  src={`https://picsum.photos/id/${80}/50`}
                  alt="Proj"
                />
                </div>
              )}
            </div>
            {/* {avatarImg && ( 
              <div
                className={size ? `sideBarContent` : `hide`}
              >
                {title}
              </div>
            )} */}
          </div>
        {/* </a> */}
      {/* </Link> */}
    </>
  );
};

export default SideBarItem;

const Style = () => {
  return <style jsx>{`
  .sideBarItem {
    display: flex;
    align-items: center;
    padding: 6px 4px;
   cursor: pointer;
  }
  
  .sideBarItem:hover img {
    border-radius: 4px;
    transition: ease-in-out 0.2s;
  }

  .sideBarImage {
    /* padding: 4px 4px; */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-size: cover;
    
    transition: ease-in-out 0.1s;
    /* background-position: top center; */
  }
  .sideBarAdd {
    font-size: .85rem;
    padding: 4px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-size: cover;
    background: #f3f3f3;
    border: solid 1px;
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
    transition: .2s ease-in-out;
  }`}</style>;
};
