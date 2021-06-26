import { useState } from 'react';

const initialButtonState = {
  display: 'Timeline',
  button1: { active: true },
  button2: { active: false },
  button3: { active: false },
  button4: { active: false },
};

const initialViewerState = {
  id: 210501,
  forReel: 'ObjectId - Paul Saves All Movie',
  launched: false,
  productionStage: 'boards',
  sceneName: 'Vipers',
  stripImage: '//unsplash.it/id/1/200/130',
  setting: 'ext. School - Day ',
  script: `<br />
  <p>EXT. SCHOOL - DAY</p>
  <br>
  <p>
    PAUL, running from a gang of teenagers. He huffs and puffs
    as he looks back in terror. The gang cackles in the chase.
    Paul, not looking where he's going, slips and falls into a
    hole. He slides down the mud...
  </p>
  <br>
  <p>Paul </p>
  <div style={{'text-align': 'center'}}>Ahhhhhh </div>
  <br>
  <p>
    SID and his BUDDIES stop short of the hole. They hear
    Paul's cavernous cry as he falls. Sid and his buddies look
    concerned through their cool. Finally:
  </p>
  <br>
  <p>Sid </p>
  <p>
    Dummy. Let's go, guys.
  </p>
  <br>
  <p>
    After a long decent, Paul drops into a DEN OF VIPERS. Paul
    is petrified.
  </p>`,
  description: 'Paul slides down a hill into a pit of vipers.',
  mainImage: '//unsplash.it/id/1/500/300',
  beatBoards: [],
  storyBoards: [
    {
      id: 2240,
      panel: 7, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/23/500/300',
      action: '',
      dialogue: '',
      artist: 'objectId',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 2240,
      panel: 10, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/24/500/300',
      action: '',
      dialogue: '',
      artist: 'objectId',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 2240,
      panel: 3, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/26/500/300',
      action: '',
      dialogue: '',
      artist: 'objectId',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 2240,
      panel: 5, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/27/500/300',
      action: '',
      dialogue: '',
      artist: 'objectId',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 2240,
      panel: 8, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/28/500/300',
      action: '',
      dialogue: '',
      artist: 'objectId',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 2240,
      panel: 11, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/29/500/300',
      action: '',
      dialogue: '',
      artist: 'objectId',
      createdAt: 'date',
      revision: 1,
    },
  ],
  storyBoards3: [1, 2, 3],
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

  /* 
    db version of field:
    _id
    price
    published
    paid
    slug
    creator: ObjectId
    name
    description
    category
    image
      Etag: ""2a00259f919b74e881e350a7873a7a8d""
      Location: "https://dreamfields-bucket.s3.us-west-1.amazonaws.com/cx8m0gmsOdO_uJNebFeNV.jpeg"
      key: "cx8m0gmsOdO_uJNebFeNV.jpeg"
      key:"cx8m0gmsOdO_uJNebFeNV.jpeg"
      Bucket: "dreamfields-bucket"
    scenes: []
    createdAt:
    updatedAt:
    __V: 0
     */

  const scenes = [
    {
      id: 210501,
      forReel: 'ObjectId - Paul Saves All Movie',
      launched: false,
      productionStage: 'boards',
      sceneName: 'Vipers',
      stripImage: '//unsplash.it/id/1/200/130',
      setting: 'ext. School - Day ',
      script: `<br />
      <p>EXT. SCHOOL - DAY</p>
      <br>
      <p>
        PAUL, running from a gang of teenagers. He huffs and puffs
        as he looks back in terror. The gang cackles in the chase.
        Paul, not looking where he's going, slips and falls into a
        hole. He slides down the mud...
      </p>
      <br>
      <p>Paul </p>
      <div style={{'text-align': 'center'}}>Ahhhhhh </div>
      <br>
      <p>
        SID and his BUDDIES stop short of the hole. They hear
        Paul's cavernous cry as he falls. Sid and his buddies look
        concerned through their cool. Finally:
      </p>
      <br>
      <p>Sid </p>
      <p>
        Dummy. Let's go, guys.
      </p>
      <br>
      <p>
        After a long decent, Paul drops into a DEN OF VIPERS. Paul
        is petrified.
      </p>`,
      description: 'Paul slides down a hill into a pit of vipers.',
      mainImage: '//unsplash.it/id/1/500/300',
      beatBoards: [],
      storyBoards: [
        {
          id: 2240,
          panel: 1, // this needs to be unique
          artist: 'objectId',
          board: '//unsplash.it/id/23/500/300',
          action: '',
          dialogue: '',
          artist: 'objectId',
          createdAt: 'date',
          revision: 1,
        },
      ],

      video: 's3-videoURL',
      revision: 1,
    },
  ];

  const field = {
    _id: 1234, // from db creation
    fieldName: 'Paul_Saves_All',
    slug: 'paul-saves-all',
    projects: [
      {
        id: 1234,
        projectName: 'Paul_Saves_All_Movie',
        slug: '/projects/paul-saves-all-movie',
        script: { Location: 's3 bucket', revision: 1 },
        conceptArt: [],
        funding: { funded: false, amount: 0 }, // information about the projects financial status
        reels: [
          {
            reelName: 'movie',
            production: false,
            timeLine: {
              timeLine: [
                {
                  scene001: scenes.scene001,
                },
              ], // potentially this can move in and out of editorial. Passed in and out of an editor.
              revision: 1,
            },
            scenes,
            director: '',
            contributors: [], // push to this list when someone makes an edit
          },
          {
            reelName: 'teaser',
            timeLine: [],
          },
        ],
      },
    ],
  };

  // make a form where they initalize the scene
  /* 
    What do I need:
    script: I need to format this somehow

    int. school - day

    PAUL, running from a gang of teenagers. He huffs and puffs as he looks back in terror. The gang cackles in the chase. Paul, not looking where he's going, slips and falls into a hole. He slides down the mud...

    Paul
    Ahhhhhh

    SID and his BUDDIES stop short of the hole. They hear Paul's cavernous cry as he falls. Sid and his buddies look concerned through their cool. Finally:

    Sid
    Dummy. Let's go, guys.

    After a long decent, Paul drops into a DEN OF VIPERS. Paul is petrified.
    
   */

  return (
    <>
      {style}
      <div id="scene-machine" className="">
        <div id="scene-machine-location" className="">
          <div className="scene-machine-title">
            <h1>Scene Machine</h1>
          </div>
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
            <div className="control-panel-display">{buttons.display} View</div>
            <div className="control-panel-buttons">
              <div className="btn">
                <div
                  onClick={() =>
                    setButtons({
                      ...buttons,
                      display: 'Timeline',
                      button1: { active: true },
                      button2: { active: false },
                      button3: { active: false },
                      button4: { active: false },
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
                      display: 'Acts',
                      button1: { active: false },
                      button2: { active: true },
                      button3: { active: false },
                      button4: { active: false },
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
                      display: 'Scenes',
                      button1: { active: false },
                      button2: { active: false },
                      button3: { active: true },
                      button4: { active: false },
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
                      display: 'Panels',
                      button1: { active: false },
                      button2: { active: false },
                      button3: { active: false },
                      button4: { active: true },
                    })
                  }
                  className={`btn-inside ${button4.active && 'active'}`}
                ></div>
              </div>
            </div>
            <div className="control-panel-other"></div>
          </div>
          <div className="scene-overview">
            <div className="left-panel">
              <div className="viewer">
                <img src={viewer.mainImage} alt="" />
              </div>
              <div className="transport-title">
                <div>Scene: {viewer.sceneName}</div>
                <div>Panel: {viewer.storyBoards[0].panel}</div>
                <div>ID: {viewer.id}</div>
              </div>
            </div>
            <div className="right-panel">
              <div className="scene-overview-about">
                <div>
                  <div className="transport">
                    {/* this should download all coresponding data like concept art. Maybe */}
                    <div className="transport-left-controls">
                      <button>Overview</button>
                      <button>Script</button>
                      <button>Boards</button>
                      <button>Video</button>
                    </div>
                    <div className="transport-center-controls">
                      {/* <button>&lArr;</button> */}
                      <button>&larr;</button>
                      <button>Play</button>
                      <button>Stop</button>
                      <button>&rarr;</button>
                      {/* <button>&rArr;</button> */}
                    </div>
                    <div className="transport-right-controls">
                      <button>Upload</button>
                      <button>Download</button>
                    </div>
                  </div>

                  <div className="transport-overview">
                    <div className="transport-description">
                      <h2>Scene Card: </h2>
                      <br />
                      {viewer.description}
                    </div>
                    <hr />
                    <div className="transport-script">
                      <h2>Scene Script:</h2>
                      <div
                        dangerouslySetInnerHTML={{ __html: viewer.script }}
                      ></div>
                    </div>
                    <hr />
                    <div className="transport-panels-section">
                      <h2>Scene Panels: </h2>
                      <div className="transport-panels">
                        {viewer.storyBoards.map((board, i) => (
                          <div className="transport-panel">
                            <label htmlFor="img">{board.panel}</label>
                            <div className='panel-index'>{i + 1}</div>
                            <img src={board.board} alt="" />
                          </div>
                        ))}
                      </div>
                    </div>
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
      // padding: 0 5px;
      // background: rgb(43, 38, 38);
      // padding-top: 100px;

      // border-top: solid 10px rgb(194, 187, 167);
      // box-shadow: inset 0 10px 10px rgba(0, 0, 0, 0.808),
      //   inset 0 10px 30px rgba(0, 0, 0, 0.808),
      //   inset 0 20px 100px rgba(0, 0, 0, 0.808);
    }

    .scene-machine-title {
      box-shadow: 0 10px 10px rgba(256 256, 256, 256, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
    }

    #scene-machine > div > div > h1 {
      background: rgb(247, 229, 229);
      font-size: 1.6rem;
      padding: 2px 40px;
      box-shadow: inset 0 0 15px rgb(39, 38, 31), inset 0 0 30px rgb(55, 55, 75),
        0 0 20px rgb(55, 55, 75);
      border-radius: 10px;
      border: solid 1px rgb(43, 38, 38);
    }

    #scene-machine > div {
      height: 94vh;
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
      padding: 6px;
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
      cursor: pointer;
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
      justify-content: space-between;
      align-items: center;
      margin: 5px;
    }

    .control-panel-buttons {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
      // width: 30px;
    }

    .control-panel-display {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px;
      width: 200px;
      border-radius: 4px;
      background: rgb(180, 224, 154);
      box-shadow: inset 0 0 10px;
    }
    .control-panel-other {
      height: 60px;
      display: flex;
      align-items: center;
      margin: 5px;
      width: 200px;
      flex-direction: row-reverse;
    }

    .btn {
      width: 50px;
      height: 50px;
      border: solid 1px rgb(10, 1, 1);
      border-right: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
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
      height: 440px;
      width: 100%;
      display: flex;
      border: solid 1px rgb(22, 19, 19);
      border-radius: 10px;
      box-shadow: inset 0 0px 10px, 0 0 4px;
    }

    .left-panel {
      padding: 10px;
      width: 40%;
      height: 100%;
    }

    .viewer {
      // height: 370px;
      border-radius: 5px;
      // height: 100%;
      // border: solid 15px rgb(24, 4, 4);
      box-shadow: inset 0 0px 10px rgba(0, 0, 0, 1);
    }
    .viewer > img {
      // max-height: 90%;
      padding: 8px;
      height: 100%;
      width: 100%;
      max-height: 270px;
    }
    .right-panel {
      width: 60%;
    }

    .scene-overview-about {
      // background: #fff;
      padding: 10px;
      height: 100%;
    }

    .scene-overview-about > div {
      box-shadow: inset 0 0 20px, inset 0 0 4px, inset 0 0 10px;
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
      align-items: center;
      justify-content: space-between;
    }

    .transport-left-controls {
      width: 30px;
      display: flex;
    }
    .transport-center-controls {
      width: 30px;
      display: flex;
      justify-content: center;
    }
    .transport-right-controls {
      width: 30px;
      display: flex;
      flex-direction: row-reverse;
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
      display: flex;
      flex-direction: column;
    }

    .transport-description {
      padding: 10px 0;
    }
    .transport-script {
      padding: 10px 0;
    }
    .transport-panels-section {
      padding: 10px 0;
    }
    .transport-panels {
      padding: 10px 0;
      display: flex;
      flex-wrap: wrap;
    }
    .transport-panel {
      position: relative;
      max-width: 100px;
      padding: 10px 0;
      margin: 5px;
    }
    .transport-panel > img {
      width: 100%;
    }
    .transport-panel > label {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 2px;
      color: #fff;
      position: absolute;
      padding: 1px 4px;
      font-size: 0.5em;
      right: 0
    }

    .panel-index {
      position: absolute;
      background: rgba(256, 256, 256, 0.8);
      font-size: .6rem;
      padding: 1px 4px;
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

      .left-panel {
        width: 100%;
      }
      .right-panel {
        width: 100%;
      }
      .scene-overview-about > div {
        max-height: 300px;
      }
    }
  `}</style>
);
