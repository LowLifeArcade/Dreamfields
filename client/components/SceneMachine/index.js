import { useState } from 'react';

const initialButtonState = {
  button1: { active: false },
  button2: { active: false },
  button3: { active: false },
  button4: { active: false },
};

const initialViewerState = {
  id: 210501,
  sceneName: '001',
  stripImage: '//unsplash.it/200/130',
  description: 'Paul slides down a hill into a pit of vipers.',
  mainImage: '//unsplash.it/500/300',
  boards: [
    {
      boards: [{ panel: 1, artist: 'objectId' }],
      artist: 'objectId',
      createdAt: 'date',
      revision: 1,
    },
  ],

  video: 's3-videoURL',
  revision: 1,
};

const SceneMachine = () => {
  const [buttons, setButtons] = useState(initialButtonState);
  const { button1, button2, button3, button4 } = buttons;

  const [viewer, setViewer] = useState(initialViewerState);
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

  /* 
  Potential data structure:
    Project {Embed: timeline, acts, sequences, Maybe Embed: Scenes, Link: scenes from users objects (danger if the user deletes their profile we lose the work)}
    Users {}

    sequnce of boards for a story reel >

    writing
    beat sheet
    rough thumbnails
    brainstorming research / cork board
    starts with beat boards 10 -15 boards per scene 
    scene cards
    full scripts
    springboard
    * ALl of the above should be made available as options in the app

    When someone starts a scene (launches) with the above information a scene or reel should be created. Then as they work and save each board it is uploaded into the timeline.

    * story reel by definition is the full timed out movie with audio with all of the boards. I'm guessing before animatics. Productions do about 6 of these so they can refine the movie before production. They look for double beats, move things around from different acts, cut ideas etc.



    then story boarding scenes

    everything is timed out maybe with audio

    IDEAS: 
    A living timeline. While people work (drawing, editing, etc) the timeline reflects on a live viewable feed or video somewhere on the web. Every update is viable. 


   */

  const project = {
    id: 1234,
    projName: 'Paul_Saves_All',
    timeLine: {
      id: 1234,
      timeLineName: 'Paul_Saves_All_Movie',
      scenes: [
        {
          sceneName: 'Scene_001',
          boards: [
            {
              boards: [{ panel: 1, artist: 'objectId' }],
              artist: 'objectId',
              createdAt: 'date',
              revision: 1,
            },
          ],
          video: 's3-videoURL',
          revision: 1,
        },
      ],
      revision: 1,
    },
    revision: 1,
  };

  const scenes = [
    {
      id: 210501,
      sceneName: '001',
      stripImage: '//unsplash.it/id/1/200/130',
      description: 'Paul slides down a hill into a pit of vipers.',
      mainImage: '//unsplash.it/id/1/500/300',
      boards: [
        {
          id: 2240,
          panel: 1, // this needs to be unique
          artist: 'objectId',
          board: '//unsplash.it/id/23/500/300',
          artist: 'objectId',
          createdAt: 'date',
          revision: 1,
        },
      ],

      video: 's3-videoURL',
      revision: 1,
    },
    {
      id: 410502,
      sceneName: '002',
      stripImage: '//unsplash.it/id/22/200/130',
      description:
        'Paul runs from said vipers. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores rerum numquam. Ratione perferendis obcaecati magni sequi harum quae suscipit, sit fuga optio facilis consequuntur! Quas nulla dolorum earum maiores corporis ut, totam, qui inventore libero nisi, quis eius? Consequatur possimus veritatis consectetur nisi natus asperiores eos iure facilis. Possimus.',
      mainImage: '//unsplash.it/id/22/500/300',
      boards: [
        {
          id: 2140,
          panel: 1, // this needs to be unique
          artist: 'objectId',
          board: '//unsplash.it/id/25/500/300',
          artist: 'objectId',
          createdAt: 'date',
          revision: 1,
        },
      ],
      video: 's3-videoURL',
      revision: 1,
    },
  ];

  return (
    <>
      {style}
      <div id="scene-machine" className="">
        <div id="scene-machine-location" className="">
          <h1>
            <div className="scene-machine-title">Scene Machine</div>
          </h1>
          <div className="section-container">
            <div id="act1" className="scenes-section-strip">
              {scenes.map((scene, i) => (
                <>
                  <div
                    key={scene.id}
                    onClick={() => setViewer(scene)}
                    className="scene-strip"
                  >
                    <img src={scene.stripImage} alt="" />
                    <p>Scene: {scene.sceneName}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="control-panel">
            <div className="btn">
              <div
                onClick={() =>
                  setButtons({
                    ...buttons,
                    button1: { active: !button1.active },
                  })
                }
                className={`btn-inside ${button1.active && 'active'}`}
              ></div>
            </div>
            <div className="btn">
              <div
                onClick={() =>
                  setButtons({
                    ...buttons,
                    button2: { active: !button2.active },
                  })
                }
                className={`btn-inside ${button2.active && 'active'}`}
              ></div>
            </div>
            <div className="btn">
              <div
                onClick={() =>
                  setButtons({
                    ...buttons,
                    button3: { active: !button3.active },
                  })
                }
                className={`btn-inside ${button3.active && 'active'}`}
              ></div>
            </div>
            <div className="btn">
              <div
                onClick={() =>
                  setButtons({
                    ...buttons,
                    button4: { active: !button4.active },
                  })
                }
                className={`btn-inside ${button4.active && 'active'}`}
              ></div>
            </div>
          </div>

          <div className="scene-overview">
            <div className="left-panel">
              <div className="viewer">
                <img src={viewer.mainImage} alt="" />
              </div>
              <div className="transport-title">
                <div>Scene: {viewer.sceneName}</div>
                <div>Panel: {viewer.boards[0].panel}</div>
                <div>ID: {viewer.id}</div>
              </div>
            </div>
            <div className="right-panel">
              <div className="scene-overview-about">
                <div>
                  <div className="transport">
                    {/* this should download all coresponding data like concept art. Maybe */}
                    <button>Download</button>
                    <div className="transport-controls">
                      <button>Test</button>
                      <button>Test</button>
                      <button>Test</button>
                      <button>Test</button>
                      <button>Test</button>
                    </div>
                    <button>Upload</button>
                  </div>

                  <div className="transport-overview">
                    <p>{viewer.description}</p>
                    
                    <p>
                      <img src={viewer.stripImage} alt="" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      margin-bottom: 10px;
      font-size: 2rem;
      text-align: center;
      padding: 10px;
      box-shadow: inset 0 0 15px rgb(39, 38, 31), inset 0 0 30px rgb(55, 55, 75),
        0 0 20px rgb(55, 55, 75);
      border-radius: 10px;
      border: solid 1px rgb(43, 38, 38);
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
    .section-container {
      background: rgb(46, 35, 35);
      // padding-top: 20px;
      width: 100%;
      border: solid 1px rgb(22, 19, 19);
      border-radius: 10px;
      box-shadow: inset 0 0px 10px, 0 0 4px;
    }

    .scenes-section-strip {
      background: rgb(29, 24, 24);
      display: flex;
      padding: 20px;
      overflow-x: scroll;
      margin: 10px 0;
      box-shadow: 0 0 3px;
      // border-radius: 7px;
      border-top: solid 1px;
      border-bottom: solid 1px;
      margin-left: 30px;
      margin-right: 30px;
    }

    .scene-strip {
      padding: 0px 30px;
      border-right: solid 1px rgb(75, 75, 75);
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
      margin: 5px;
    }

    .btn {
      width: 50px;
      height: 50px;
      border: solid 1px rgb(10, 1, 1);
      border-right: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn:last-child {
      border-right: solid 1px rgb(10, 1, 1);
    }

    .btn-inside {
      width: 35px;
      height: 35px;
      border-radius: 3px;
      border: solid 1px rgb(17, 5, 1);
      background: rgb(210, 248, 42);
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8),
        inset 0 0 3px rgba(0, 0, 0, 1), 0 0 1px rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .btn-inside.active {
      width: 35px;
      height: 35px;
      border-radius: 3px;
      border: solid 1px rgb(17, 5, 1);
      background: rgb(240, 248, 204);
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8),
        inset 0 0 3px rgba(0, 0, 0, 1), 0 0 1px rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .scene-overview {
      background: rgb(46, 35, 35);
      // padding: 20px;
      width: 100%;
      height: 370px;
      display: flex;
      border: solid 1px rgb(22, 19, 19);
      border-radius: 10px;
      box-shadow: inset 0 0px 10px, 0 0 4px;
    }

    .left-panel {
      padding: 10px;
      width: 50%;
      height: 370px;
    }

    .viewer {
      // height: 370px;
      border-radius: 5px;
      // border: solid 15px rgb(24, 4, 4);
      box-shadow: inset 0 0px 10px rgba(0, 0, 0, 1);
    }
    .viewer > img {
      // max-height: 90%;
      padding: 8px;
      height: 100%;
      width: 100%;
    }
    .right-panel {
      width: 50%;
    }

    .scene-overview-about {
      // background: #fff;
      padding: 10px;
      height: 100%;
    }

    .scene-overview-about > div {
      box-shadow: inset 0 0 10px;
      height: 100%;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      // align-items: flex-start;
    }

    .transport {
      // box-shadow: inset 0 0 10px;
      border: solid 1px;
      // border-radius: 5px;
      padding: 10px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    .transport-title {
      padding: 10px;
      border-bottom: solid 1px;
      background: rgb(206, 230, 169);
      border: solid 1px rgb(65, 11, 11);
      border-radius: 3px;
      margin: 10px 0;
      box-shadow: inset 0 0 10px;
      padding: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .transport-overview {
      background: rgb(218, 214, 208);
      border: solid 1px rgb(65, 11, 11);
      margin: 10px;
      height: 100%;
      border-radius: 10px;
      box-shadow: inset 0 0 10px;
      padding: 5px;
      overflow-y: scroll;
    }

    #scene {
      padding: 0px 30px;
      border-right: solid 1px;
    }

    @media (max-width: 800px) {
      .scene-overview {
        flex-direction: column;
        height: 100%;
      }
    }
  `}</style>
);
