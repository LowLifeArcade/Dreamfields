import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { setProjectContext, ProjectContext } from '../contexts/SceneMachineProviders';
import axios from 'axios';

const SideBarItem = ({ index,slug, image, title, clicked, ...rest }) => {
  const dispatch = useContext(setProjectContext);
  const  project  = useContext(ProjectContext);


  

  // useEffect(() => {
  //   const loadFieldFromLocalStorage = async (slug) => {
  //     const { data } = await axios.get(`/api/field/${slug}`);
  //     dispatch(['LOAD_PROJECT', data])
  //   };
    
  //  const slug = localStorage.getItem('projectslug');
  //  console.log('SLUG IN SIDEBAR ITEM',slug)
  //  if (slug) {
  //   loadFieldFromLocalStorage(slug);
  //  }
  // }, []);

  // TODO: change to dispatch and use the action to load the project by slug
  const loadField = async () => {
    const { data } = await axios.get(`/api/field/${slug}`);
    dispatch(['LOAD_PROJECT', {data, slug}])
    localStorage.setItem('projectslug', JSON.stringify(slug));
  };
  return (
    <>
      <Style />
      {/* <Link href={`/creator/field/view/${slug}` || ''}> */}
        {/* <a> */}
          <div className={`sideBarItem`}>
            <div>
              {image ? (
                <img
                  className={`sideBarImage ${project?.slug === slug && ' active'}`}
                  src={image.Location}
                  alt="Proj"
                  onClick={loadField}
                />
              ) : (
                <div className="sideBarAdd">
                  <img
                  className={`sideBarImage ${project?.slug === slug && ' active'}`}
                  src={`https://picsum.photos/id/${80}/50`}
                  alt="Proj"
                  onClick={loadField}
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
    border-radius: 15px;
    transition: ease-in 0.2s;
  }


  .sideBarItem  img:active {
    border-radius: 20px;
  }
  .sideBarItem  img.active {
    border-radius: 10px;
  }

  .sideBarImage {
    /* padding: 4px 4px; */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-size: cover;
    
    transition: ease-in 0.1s;
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
