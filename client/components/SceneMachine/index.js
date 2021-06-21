const SceneMachine = () => {

  /* NOTES:
  -tracking code: 
  -title
  -descriptioin
  -image

  -frame rate
  epidsodic or not
  -aspect ratio

  -permistions page (groups and peoples names)

    step through edit with arrow keys

    Main top bar
    breadcrumb

    breakdowns:
    acts
    sequences
      -should have a revision history accesible in breadcrumb
      -ablility to create a new sequence
        -input the project tracking code (maybe)
        -title of sequence
        -which act it is in
        -comments

    scene strip
      -flix numbers the panels and has a different number next to that for its position in the edit. This might be a better way to handle the edit for naming convention sake
      - panel with notes is marked with a pencil and outline 
      -maybe a highlight tool
      -filter tool that shows scenes with annotations or highlights
    main overview window
      -press play to play current scene. It will play whatever file is in their from anamatic to movie file
      -annotation tool that can draw directly on the file (ipad app) and make a note
      -dialogue insert window or something maybe not worthy unless there's a way for that to get into the file
*/

  /* project > timeline > act > sequence > scene > panel */

  const scene = {
    id: 1234,
    name: '001_a',

  }
  return (
    <>
      {style}
      <div id="scene-machine" className="">
        <div id="scene-machine-location" className="">
          <h1>
            <div className="scene-machine-title">Scene Machine</div>
          </h1>
          <div className="div">
            <div id="act1" className="scenes-section-strip">
              <div className="scene-strip">
                <img src="//unsplash.it/200/130" alt="" />
                <p>Scene 1-1:a</p>
              </div>
              <div className="scene-strip">
                <img src="//unsplash.it/200/130" alt="" />
                <p>Scene 1-1:a</p>
              </div>
              <div className="scene-strip">
                <img src="//unsplash.it/200/130" alt="" />
                <p>Scene 1-1:a</p>
              </div>
              <div className="scene-strip">
                <img src="//unsplash.it/200/130" alt="" />
                <p>Scene 1-1:a</p>
              </div>
              <div className="scene-strip">
                <img src="//unsplash.it/200/130" alt="" />
                <p>Scene 1-1:a</p>
              </div>
              <div className="scene-strip">
                <img src="//unsplash.it/200/130" alt="" />
                <p>Scene 1-1:a</p>
              </div>
              <div className="scene-strip">
                <img src="//unsplash.it/200/130" alt="" />
                <p>Scene 1-1:a</p>
              </div>
              <div className="scene-strip">
                <img src="//unsplash.it/200/130" alt="" />
                <p>Scene 1-1:a</p>
              </div>
              <div className="scene-strip">
                <img src="//unsplash.it/200/130" alt="" />
                <p>Scene 1-1:a</p>
              </div>
              <div className="scene-strip">
                <img src="//unsplash.it/200/130" alt="" />
                <p>Scene 1-1:a</p>
              </div>
              <div className="scene-strip">
                <img src="//unsplash.it/200/130" alt="" />
                <p>Scene 1-1:a</p>
              </div>
            </div>
          </div>
          <article className="control-panel">
            <div className="btn"></div>
            <div className="btn"></div>
            <div className="btn"></div>
            <div className="btn"></div>
          </article>
          <article className="scene-overview">
            <img src="//unsplash.it/500/300" alt="" />
            <div className="scene-overview-about">INFO about the scene</div>
          </article>
        </div>
      </div>
    </>
  );
};

export default SceneMachine;

const style = (
  <style jsx>{`
    #scene-machine {
      padding: 0 5px;
      background: rgb(43, 38, 38);
      padding-top: 100px;

      border-top: solid 10px rgb(194, 187, 167);
      box-shadow: inset 0 10px 10px rgba(0, 0, 0, 0.808),
        inset 0 10px 30px rgba(0, 0, 0, 0.808),
        inset 0 20px 100px rgba(0, 0, 0, 0.808);
    }

    .scene-machine-title {
      box-shadow: 0 10px 10px rgba(256 256, 256, 256, 0.8);
    }

    #scene-machine > div > h1 {
      background: rgb(247, 229, 229);
      margin-bottom: 4px;
      font-size: 2rem;
      text-align: center;
      padding: 10px;
      box-shadow: inset 0 0 15px rgb(39, 38, 31), inset 0 0 30px rgb(55, 55, 75),
        0 0 20px rgb(55, 55, 75);
      border-radius: 10px;
      border: solid 3px rgb(58, 36, 36);
    }

    #scene-machine > div {
      background: rgb(68, 48, 48);
      padding: 27px;
      width: 100%;
      // border: solid 3px rgb(43, 38, 38);
      border-radius: 10px;
      box-shadow: inset 0 0px 10px;
      // 0 10px 50px rgba(87, 72, 32, 0.897), 0 10px 100px rgba(222, 248, 158, 0.3);
    }
    #scene-machine > div > div {
      background: rgb(46, 35, 35);
      // padding-top: 20px;
      width: 100%;
      border: solid 3px rgb(43, 38, 38);
      border-radius: 10px;
      box-shadow: inset 0 0px 10px;
    }

    .scenes-section-strip {
      background: rgb(29, 24, 24);
      display: flex;
      padding: 20px;
      overflow-x: scroll;
      margin: 10px 0;
      border-radius: 7px;
    }

    .scene-strip {
      padding: 0px 30px;
      border-right: solid 2px rgb(75, 75, 75);
    }

    .scene-strip > img {
      height: 70px;
    }
    .scene-strip > p {
      font-size: 0.7rem;
      color: rgb(179, 174, 174);
    }

    .control-panel {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btn {
      width: 50px;
      height: 50px;
      border: solid 1px;
    }

    .btn::after {
      width: 3px;
      height: 3px;
      // border-radius: 50%;
      border: solid 10px #fff;
    }

    .scene-overview {
      background: rgb(46, 35, 35);
      padding: 20px;
      width: 100%;
      border: solid 3px rgb(43, 38, 38);
      border-radius: 10px;
      box-shadow: inset 0 0px 10px;
      height: 370px;
      display: flex;
    }

    .scene-overview-about {
      background: #fff;
      height: 300px;
    }

    #scene {
      padding: 0px 30px;
      border-right: solid 1px;
    }

    
  `}</style>
);
