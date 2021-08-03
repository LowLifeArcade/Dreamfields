import { useEffect } from 'react';
import FormSidebar from './FormSidebar';
import Link from 'next/link'
/**
 * @param {Object} rightBoxItems object fills out the:
 *
 * @param {String} Title field uses `object.name`.
 * @param {String} Description field uses `object.description`
 * @param {String} Category field uses`object.category`
 * @returns JSX for Format Layout
 */
const FormLayout = ({ children, rightBoxItems }) => {
  
  return (
    <>
      {/* <h1 className="mini-jumboTron">{title}</h1> */}
      <div className="layout-container">
        {/* <FormSidebar items={items} />{' '} */}
        <div className="page-container">
          <div className="main-content">
            <div>
            {children}
            </div>
          </div>
        </div>

        
        <div className="right-side-container">
          <div className="right-box">
            <div className="right-side-item">
              {rightBoxItems && rightBoxItems.name ? <h2>{rightBoxItems.name}</h2> :<h2>Title Card</h2>}
            </div>
            <hr />
            <div className="right-side-item">
              <span className='box-item'>Description:</span> {rightBoxItems && rightBoxItems.description}
            </div>
            <div className="right-side-item">
              <span className='box-item'>Script:</span> {rightBoxItems && rightBoxItems.script.Location && <>
              <Link href={rightBoxItems.script.Location} >
              <a target='_blank' style={{'color': 'blue'}}>Script Link</a>
              </Link>
              </> }
            </div>
            <div className="right-side-item">
              <span className='box-item'>Category:</span> {rightBoxItems && rightBoxItems.category}
            </div>
            <hr />
            <div className="right-side-item">
              <span className='box-item'>Production:</span> {rightBoxItems && rightBoxItems.production}
            </div>
            <div className="right-side-item">
              <span className='box-item'>Frame Rate: </span>{rightBoxItems && rightBoxItems.frameRate}
            </div>
            <div className="right-side-item">
              <span className='box-item'>Aspect Ratio: </span>{rightBoxItems && rightBoxItems.aspectRatio}
            </div>
            <hr />
            <div className="right-side-item">
            <span className='box-item'>Funded: </span>
              {rightBoxItems && rightBoxItems.funding.funded === true ? 'Funded' : 'Not Funded'}
            </div>
            {rightBoxItems.funding.funded && <div className="right-side-item">
            <span className='box-item'>Amount: </span>
              {rightBoxItems && rightBoxItems.funding.amount}
            </div>}
          </div>
        </div>
        
      {style}
      </div>
    </>
  );
};

export default FormLayout;

const style = (
  <style jsx>{`
    .layout-container {
      width: 100%;
      display: flex;
      // position: fixed;
      background: rgb(209, 209, 209);
      justify-content: space-between;
    }
    .box-item {
      color: rgb(110, 110, 110);
    }
    .page-container {
      // display: flex;
      // align-items: center;
      background: rgb(209, 209, 209);
      // width: 800px;
      width: 100%;
      // padding: 0 100px ;
      display: flex;
      justify-content: center;
      height: 100vh;
      // flex: 0 0 800px;
    }
    .main-content {
      //background: rgb(255, 255, 255);
      overflow-y: scroll;
      display: flex;
      justify-content: center;
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      width: 100%;
      // justify-content: flex-start;
      //width: 60vw;
      /* border-left: solid 1px rgb(173, 173, 173); */
      /*border-right: solid 1px rgb(173, 173, 173); */
      height: 100%;
      //padding: 10px 20px;
    }

    /* hides scroll bar */
    .main-content::-webkit-scrollbar {
      display: none;
    }

    .main-content {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .right-side-container {
      background: rgb(218, 218, 218);
      // width: 20vw;
      border-left: solid 1px rgb(173, 173, 173);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    .right-box {
      padding: 30px;
      width: 260px;
      background: #fff;
      margin: 20px;
      height: 500px;
      border-radius: 3px;
      box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
    }
    .right-side-item {
      padding: 15px 0;
    }
    @media (max-width: 1250px) {
      .layout-container {
        // align-items: flex-start;
      }
      .right-side-container {
        display: none;
      }
      .left-side-container {
      }
      .page-container {
        width: 100%;
      }
    }

    @media (max-width: 1080px) {
      .page-container {
        flex: 0 1 100%;
        padding: 0;
      }
    }
    @media (max-width: 860px) {
      .left-side-container {
        display: none;
      }

      .page-container {
        width: 100%;
      }
    }
  `}</style>
);
