import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import CreatorRoute from '../../../../components/routes/CreatorRoute';
import axios from 'axios';
import OVSidebarItems from '../../../../components/overview/OVSidebarItem';
import SceneMachine from '../../../../components/SceneMachine';
import ReactMarkdown from 'react-markdown';
import { ProjectProvider, setProjectContext } from '../../../../contexts/SceneMachineProviders';


// TODO: implement smooth scrolling from link to link on page

const addFlicker = () => {
  // TODO: make this actually work
  return 0.1;
};
const FieldView = () => {
  const [field, setField] = useState({});
  const [corkImage, setCorkImage] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useContext(setProjectContext)

  useEffect(() => {
    loadField();
  }, [slug]);

  const loadField = async () => {
    const { data } = await axios.get(`/api/field/${slug}`);
    setField(data);
    dispatch(['LOAD_PROJECT', data])
  };

  return (
    <CreatorRoute>
      <div>
        {field && field.creator && (
          <>
            {/* <pre>{JSON.stringify(field, null, 4)}</pre> */}
            <div className="fo-window">
              <div className="fo-container">
                <div className="fo-main">
                  <div className="banner">
                    
                    <div className="banner-items">
                      
                      {/* <img
                        className="banner-img"
                        src="https://cdnb.artstation.com/p/assets/images/images/020/562/285/large/sonny-sortzen-illustration136.jpg?1568253414"
                        alt=""
                      /> */}
                      <img
                        className="banner-img"
                        src={field.image ? field.image.Location : 'https://picsum.photos/id/222/1000/500'}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="fo-content">
                  <h1 className='fo-title' >{field.name}</h1>
                    <div
                      id="corkboard-container"
                      className="fo-section-container"
                    >
                      <div id="corkboard" className="fo-section-cork">
                        <img
                          src="https://cdna.artstation.com/p/assets/images/images/020/562/206/large/sonny-sortzen-illustration63-2.jpg?1568253144"
                          alt=""
                        />
                        <img
                          src="https://cdna.artstation.com/p/assets/images/images/020/562/186/large/sonny-sortzen-illustration74.jpg?1568253095"
                          alt=""
                        />
                        <img
                          src="https://cdnb.artstation.com/p/assets/images/images/020/551/177/large/james-brown-illustration77.jpg?1568215678"
                          alt=""
                        />
                        <img
                          src="https://cdnb.artstation.com/p/assets/images/images/020/562/099/large/sonny-sortzen-illustration812-copy.jpg?1568252667"
                          alt=""
                        />
                        <img
                          src="https://cdna.artstation.com/p/assets/images/images/020/557/602/large/james-brown-psa-ep-58-2.jpg?1568232956"
                          alt=""
                        />
                        <img
                          src="https://cdnb.artstation.com/p/assets/images/images/020/562/163/large/sonny-sortzen-illustration752.jpg?1568253027"
                          alt=""
                        />
                        <img
                          src="https://cdnb.artstation.com/p/assets/images/images/020/557/967/large/james-brown-illustration134.jpg?1568234268"
                          alt=""
                        />
                        <img
                          src="https://cdna.artstation.com/p/assets/images/images/020/557/966/large/james-brown-greg6.jpg?1568234265"
                          alt=""
                        />
                      </div>
                    </div>

                    <div id="about" className="">
                      <div className="fo-section-about-container">
                        <div className="fo-section-about">
                          <ReactMarkdown children={field.description} />
                          {/* <ReactMarkdown>{field.description}</ReactMarkdown> */}
                          {/* Paul Saves All Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Est unde perspiciatis suscipit,
                          laborum explicabo dolorum error magnam omnis quisquam
                          culpa, cum ducimus sequi natus a aperiam dolor.
                          Ratione culpa accusamus error quod dolorem ipsam
                          debitis, possimus, consequuntur neque molestiae dolor.
                          Aperiam quaerat qui laborum. Nulla sit necessitatibus
                          natus nobis dignissimos obcaecati? Dolore, odit
                          nesciunt voluptas ipsum commodi quidem mollitia,{' '}
                          <br />
                          <br /> inventore voluptatibus, sit quam quidem
                          mollitia, inventore voluptatibus, sit quam suscipit?
                          Iste sunt repellendus unde. Consequuntur, saepe,
                          quaerat voluptate laboriosam impedit ipsum quasi nobis
                          nisi ex blanditiis dolores, hic corrupti eaque ipsa
                          maxime iusto sint autem. Non inventore impedit dolor
                          ducimus libero soluta saepe nobis rem recusandae sequi
                          labore minima quia velit odio voluptatum natus quidem
                          mollitia, <br /> inventore voluptatibus, sit quam ipsa
                          corporis magnam, */}
                        </div>
                      </div>
                    </div>
                    <div className="scene-machine-container">
                      <SceneMachine id="scene-machine" />
                    </div>
                  </div>
                </div>
                {/* set a button up to show and hide this menu OR add it to side menu on left. That's probably a better idea */}
                {false && <div className="fo-sidebar">
                  <div className="fo-title-card">
                    <div className="fo-sidebar-item">Title: {field.name}</div>
                    <div className="fo-sidebar-item">
                      Category: {field.category}
                    </div>
                    <div className="fo-sidebar-item">
                      By: {field.creator.name}
                    </div>
                    <div className="fo-sidebar-item">
                      Synopsis: {field.description}
                    </div>
                  </div>
                  <OVSidebarItems slug="#corkboard" name="Cork Board" />
                  <OVSidebarItems slug="#about" name="What it's About" />
                  <OVSidebarItems slug="#ideas" name="Idea Wall" />
                  <OVSidebarItems slug="#timeline" name="Time Line" />
                  <OVSidebarItems
                    slug="#scene-machine-location"
                    name="Scene Machine"
                  />
                  <OVSidebarItems
                    slug="#concepts"
                    name="Concepts and Designs"
                  />
                  <OVSidebarItems slug="#assets" name="Assets" />
                  <OVSidebarItems slug="#contributors" name="Contributors" />
                </div>}
              </div>
            </div>
          </>
        )}
      </div>
      <Style />
    </CreatorRoute>
  );
};

export default FieldView;

const Style = () => (
  <style jsx>{`
    .fo-window {
      // width: 100%;

    }
    .fo-container {
      display: flex;
      // position: fixed;

    }
        /* hides scroll bar */
    .fo-main::-webkit-scrollbar {
      display: none;
    }
    .fo-main {
      width: 100%;
      overflow-y: scroll;
      height: 100vh;
      padding-top: 64vh;
    }

    .fo-title {
      padding-top: 50px;
      color: rgb(70, 70, 70);
      opacity: .6;
      font-family: 'Roboto', sans-serif;
      font-size: 5rem;
      text-align: center;
      // top: 260px;
      // left: 120px;
      // position: fixed;
    }
    
    .fo-content {
      background: rgb(240, 237, 234);
      border-top: solid 10px rgb(231, 224, 203);
      // margin: 10px 0;
      // height: 100vh;
      box-shadow: 0 20px 30px 5px rgba(107, 124, 128, 1.8);
      
    }
    .fo-section-container {
      // padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-content: space-between;
    }

    #corkboard-container {
      padding: 10px;
      padding-bottom: 80px;
      margin-top: 100px;
      margin-bottom: 40px;
      overflow: hidden;
    }
    #about {
      transform: rotate(4deg);
      background: #fff;
      height: 300px;
      width: 500px;
      margin: 90px 60px;
      // padding: 40px 0;
    }
    .fo-section-about-container {
      // columns: 3;
      overflow-y: hidden;
      background-image: 
      linear-gradient(0deg, transparent 5em, rgba(255,0,0,.2) 0, transparent 5.1em), 
      linear-gradient(rgba(0,0,255,.3) 1px, transparent 0);
      background-size: 100% 2em;
      height: 100%;
      width: 100%;
      line-height: 35px;
      padding: 20px 60px;
  }
    }
    .fo-section-item {
      
    }
    .fo-section-cork {
      position: relative;
      background: url('/cork.jpeg') center/cover;
      border: solid 10px rgb(221, 213, 200);
      width: 100%;
      border-radius: 10px;
      // padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      box-shadow: 0 10px 10px 5px rgba(77, 76, 61, 0.8),
      0 20px 30px 5px rgba(107, 124, 128, 0.8);
      
    }
    .fo-section-cork::before {
      content: '';
      width: 30px;
      height: 30px;
      background: rgb(226, 14, 14);
      border: solid 2px rgb(189, 59, 59);
      box-shadow: inset 0 0px 10px rgba(53, 68, 71, 0.8) ;
      border-radius: 50%;
      // position: fixed;
      transform: translate(20px, 20px);
      z-index: 1;
      top: 100px;
    }
    .fo-section-cork::before::before {
      content: '';
      width: 10px;
      height: 10px;
      background: rgb(116, 50, 50);
      border: solid 2px rgb(70, 24, 24);
      box-shadow: inset 0 0px 10px rgba(53, 68, 71, 0.8) ;
      border-radius: 50%;
      // position: fixed;
      transform: translate(20px, 20px);
      z-index: 2;
      top: 100px;
    }
    .fo-section-cork > img {
      max-height: 400px;
      padding: 30px;
      transform: rotate(10deg);
      transition: .2s ease-in-out;
    }
    .fo-section-cork > img:active {
      position: absolute;
      max-height: 800px;
      z-index: 1;
      // padding: 30px;
      // top: 50%;
      transform: translate(-50%);
      left: 50%;
      transition: .2s ease-in-out;
      // transform: rotate(0deg);
    }
    .fo-section-cork > img:nth-of-type(+1) {
      max-height: 400px;
      padding: 30px;
      transform: rotate(-10deg);
      // transition: .3s ease-in-out;
    }
    .fo-section-cork > img:nth-of-type(+3) {
      max-height: 400px;
      padding: 30px;
      transform: rotate(-10deg);
    }
    .fo-section-cork > img:nth-of-type(+5) {
      max-height: 400px;
      padding: 30px;
      transform: rotate(-3deg);
    }
    .fo-section-cork > img:nth-of-type(+6) {
      max-height: 400px;
      padding: 30px;
      transform: rotate(5deg);
    }
    .fo-section-cork > img:nth-of-type(+8) {
      max-height: 400px;
      padding: 30px;
      transform: rotate(-2deg);
    }
    .banner {
      background: rgb(179, 175, 169);
      width: 100%;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      position: fixed;
      z-index: -1;
    }
    .banner-items {
      display: flex;
      justify-content: center;

      z-index: -1;
    }
    
    .banner-img {
      // top: 50px;

      // width: 80vw;
      height: 740px;
      object-fit: contain;
    }

    .scene-machine-container {
      height: 107vh;
      display: flex;
      justify-content: center;
      padding: 0px 5px;
      background: linear-gradient(rgb(52, 75, 97), rgb(180, 216, 147));
      padding-top: 100px;

      border-top: solid 10px rgb(194, 187, 167);
      box-shadow: inset 0 10px 10px rgba(0, 0, 0, 0.808),
        inset 0 10px 30px rgba(0, 0, 0, 0.808),
        inset 0 20px 100px rgba(0, 0, 0, 0.808);
    }

    // .control-panel {
    //   height: 60px;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // }

    // .btn {
    //   width: 50px;
    //   height: 50px;
    //   border: solid 1px;
    // }

    // .btn::after {
    //   width: 3px;
    //   height: 3px;
    //   // border-radius: 50%;
    //   border: solid 10px #fff;
    // }
       

    .fo-sidebar {
      // position: fixed;
      background: #eee;
      // flex: 1 1 18vw;
      min-width: 250px;
      max-width: 20vw;
      border-left: solid 1px rgb(209, 206, 199);
      padding-left: 10px;
      height: 94vh;
      overflow-y: scroll;
      display: inline-block;
      position: sticky;
    }

    .fo-title-card {
      padding: 10px;
      border: solid 1px;
      margin-top: 10px;
    }
    .fo-sidebar-item {
      padding: 10px 0;
    }

    @media (max-width: 800px) {
      .fo-sidebar {
        display: none;
      }
      .fo-main {
        width: 100vw;
        height: 100%;
      }
      .banner-img {
        width: 100vw;
      }
      .fo-section-about {
        columns: 1;
      }
    }
  `}</style>
);
