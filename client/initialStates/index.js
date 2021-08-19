import { production, frameRate, aspectRatio } from "../dataModels";

// data

export const initialBreakdown = {
  id: null,
  shot: null,
  complexity: '',
  assets: '',
  FX: '',
  characters: '',
  backgrounds: '',
  description: '',
  breakdown: '',
  preProdBoard: '',
};

// scene template
export const initialViewerState = {
  id: 210501,
  sceneName: 'Vipers',
  mainImage: '//unsplash.it/id/12/500/300',
  stripImage: '//unsplash.it/id/12/400/225',
  forProject: 'ObjectId',
  forReel: 'ObjectId - Paul Saves All Movie',
  launched: false,
  productionStage: 'pre production', // ['pre', 'beat boards', 'story boards', 'production']
  description:
    'The final bell has rung and school is out. We see Paul huffing it from a gang of bullies he seems to have ticked off. They chase him off of school grounds and into a field where he falls into a pit of vipers.',
  setting: 'ext. School - Day ',
  frameRate: '24',
  aspectRatio: '16:9',
  assets: [
    { id: 11, name: 'Sword', location: 's3-bucket' },
    { id: 12, name: 'Mud Slide', location: 's3-bucket' },
    { id: 14, name: 'Book', location: 's3-bucket' },
  ],
  FX: [
    { id: 3, name: '3d pit of vipers', location: 's3' },
    { id: 6, name: 'green glow', location: 's3' },
  ],
  shotList: [
    {
      id: 1,
      shot: 1,
      complexity: 'high',
      assets: 'Sword',
      FX: '',
      characters: 'Paul, Sid, Ugly friend 1, Ugly friend 2',
      backgrounds: 'School',
      description:
        'Paul runs full sprint in center frame, huffing and pumping his arms.',
      breakdown:
        'Close up of Paul bobbing up and down, sweat running down his face. We pull out to see him full sprint running from a gang behind him.',
      preProdBoard: '',
    },
    {
      id: 2,
      shot: 2,
      complexity: 'medium',
      assets: 'snakes',
      FX: 'green glow',
      characters: 'Sid, Ugly friend 1, Ugly friend 2',
      backgrounds: 'Pit',
      description: 'Sid and gang cacalking as they chase.',
      breakdown: `This should be a table or something structure wise where it's easy to look at the breakdown `,
      preProdBoard: '',
    },
  ], // maybe every time you add to this array it makes an index card
  characters: ['Paul', 'Sid', 'Joey', 'Ugly friend 1', 'Ugly friend 2'],
  backgrounds: [
    { id: 253, name: 'School', location: 's3' },
    { id: 233, name: 'Pit', location: 's3' },
  ],

  script: {
    script: `<br />
    <p>EXT. SCHOOL - DAY</p>
    <br>
    <p>
      PAUL, runs from a gang of teenagers. Huffing and puffing, dread written on his face.
      The gang cackle as they chase.
      Paul, not looking where he's going, slips and falls into a
      hole. He slides down the mud...
    </p>
    <br>
  <div style="text-align:center;">
    <p>Paul </p>
    <div>Ahhhhhh </div>
  </div>
    <br>
    <p>
      SID and his BUDDIES stop short of the hole. They hear
      Paul's cavernous cry as he falls. Sid and his buddies look
      concerned through their cool. Finally:
    </p>
    <br>
  <div style="text-align:center;">
    <p>Sid </p>
  
    <p>
      Dummy. Let's go, guys.
    </p>
  </div>
    <br>
    <p>
      After a long descent, Paul lands into a DEN OF VIPERS. Paul's teeth clater.
    </p>`,
    rev: 1,
  },

  layoutBoards: [
    {
      id: 240,
      name: '',
      shotNumber: 1,
      panel: 1, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/58/500/300',
      action: '',
      dialogue: '',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 2900,
      name: '',
      shotNumber: 1,
      panel: 2, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/48/500/300',
      action: '',
      dialogue: '',
      createdAt: 'date',
      revision: 1,
    },
  ],
  beatBoards: [
    {
      id: 9140,
      name: '',
      shotNumber: 1,
      panel: 1, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/29/500/300',
      action: '',
      dialogue: '',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 1140,
      name: '',
      shotNumber: 1,
      panel: 12, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/229/500/300',
      action: '',
      dialogue: '',
      createdAt: 'date',
      revision: 1,
    },
  ],
  storyBoards: [
    {
      id: 2340,
      name: '',
      shotNumber: 1,
      panel: 7, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/23/500/300',
      action: '',
      dialogue: '',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 2540,
      name: '',
      shotNumber: 1,
      panel: 10, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/24/500/300',
      action: '',
      dialogue: '',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 2740,
      name: '',
      shotNumber: 1,
      panel: 3, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/26/500/300',
      action: '',
      dialogue: '',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 2840,
      name: '',
      shotNumber: 2,
      panel: 5, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/27/500/300',
      action: '',
      dialogue: '',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 2270,
      name: '',
      shotNumber: 2,
      panel: 8, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/28/500/300',
      action: '',
      dialogue: '',
      createdAt: 'date',
      revision: 1,
    },
    {
      id: 2243,
      name: '',
      shotNumber: 2,
      panel: 11, // this needs to be unique
      artist: 'objectId',
      board: '//unsplash.it/id/29/500/300',
      action: '',
      dialogue: '',
      createdAt: 'date',
      revision: 1,
    },
  ],
  animatic: 's3-videoURL',
  video: 's3-videoURL',
  revision: 1,
};

/**
 * Blank Scene Template
 */
export const initialNewSceneForm = {
  // id: '',
  sceneName: '', // done
  description: '', // done
  characters: [''], // done
  setting: '', // done
  script: {
    script: ``,
    rev: 1,
  },
  mainImage: '',
  stripImage: '',
  forProject: '', // use ObjectId
  forReel: '', // use ObjectId

  launched: false,
  productionStage: production.pre, 
  frameRate: frameRate.true24, // done
  aspectRatio: aspectRatio.HDTV, // done

  assets: [{ id: '', name: '', location: '' }], // add button in details
  FX: [{ id: '', name: '', location: '' }], // add button in details
  backgrounds: [{ id: '', name: '', location: '' }], // add button in details

  // shotList: [
  //   // in breakdown section
  //   {
  //     id: '',
  //     shot: '',
  //     complexity: '',
  //     assets: '',
  //     FX: '',
  //     characters: [],
  //     backgrounds: '',
  //     description: '',
  //     breakdown: '',
  //     preProdBoard: '',
  //   },
  // ], // maybe every time you add to this array it makes an index card
  layoutBoards: [
    {
      id: '',
      name: '',
      shotNumber: '',
      panel: '', // this needs to be unique
      artist: '',
      board: '',
      action: '',
      dialogue: '',
      createdAt: '',
      revision: '',
    },
  ],
  beatBoards: [
    {
      id: '',
      name: '',
      shotNumber: '',
      panel: '', // this needs to be unique
      artist: '',
      board: '',
      action: '',
      dialogue: '',
      createdAt: '',
      revision: '',
    },
  ],
  storyBoards: [
    {
      id: '',
      name: '',
      shotNumber: '',
      panel: '', // this needs to be unique
      artist: '',
      board: '',
      action: '',
      dialogue: '',
      createdAt: '',
      revision: '',
    },
  ],
  animatic: '',
  video: { Location: '', videoName: '', revision: 1 },
  revision: 1,
};
// scene preview
export const initPreviewState = {
  image: '',
  video: '',
  sceneName: 'Scene Preview',
  panel: '',
  id: '',
  type: 'default',
  default: 'https://picsum.photos/id/237/500'
};
//unsplash.it/id/1/400/225

// fake data
export const initialScenes = [
  initialViewerState,
  {
    id: 220501,
    sceneName: 'Some',
    mainImage: '//unsplash.it/id/122/500/300',
    stripImage: '//unsplash.it/id/122/400/225',
    forProject: 'ObjectId',
    forReel: 'ObjectId - Paul Saves All Movie',
    launched: false,
    productionStage: 'pre production', // ['pre', 'beat boards', 'story boards', 'production']
    description:
      'The final bell has rung and school is out. We see Paul huffing it from a gang of bullies he seems to have ticked off. They chase him off of school grounds and into a field where he falls into a pit of vipers.',
    setting: 'ext. School - Day ',
    frameRate: '24',
    aspectRatio: '16:9',
    assets: [
      { id: 10, name: 'Bat', location: 's3-bucket' },
      { id: 12, name: 'Mud Slide', location: 's3-bucket' },
      { id: 14, name: 'Book', location: 's3-bucket' },
    ],
    FX: [
      { id: 3, name: '3d pit of vipers', location: 's3' },
      { id: 6, name: 'green glow', location: 's3' },
    ],
    shotList: [
      {
        id: 2,
        shot: 4,
        complexity: 'high',
        assets: 'Sword',
        FX: '',
        characters: 'Paul, Sid, Ugly friend 1, Ugly friend 2',
        backgrounds: 'School',
        description:
          'Paul runs full sprint in center frame, huffing and pumping his arms.',
        breakdown:
          'Close up of Paul bobbing up and down, sweat running down his face. We pull out to see him full sprint running from a gang behind him.',
        preProdBoard: '',
      },
      {
        id: 3,
        shot: 2,
        complexity: 'medium',
        assets: 'snakes',
        FX: 'green glow',
        characters: 'Sid, Ugly friend 1, Ugly friend 2',
        backgrounds: 'Pit',
        description: 'Sid and gang cacalking as they chase.',
        breakdown: `This should be a table or something structure wise where it's easy to look at the breakdown `,
        preProdBoard: '',
      },
    ], // maybe every time you add to this array it makes an index card
    characters: ['Paul', 'Joey', 'Ugly friend 1', 'Ugly friend 2'],
    backgrounds: [
      { id: 253, name: 'School', location: 's3' },
      { id: 233, name: 'Pit', location: 's3' },
    ],

    script: {
      script: `<br />
      <p>EXT. SCHOOL - DAY</p>
      <br>
      <p>
        PAUL, runs from a gang of teenagers. Huffing and puffing, dread written on his face.
        The gang cackle as they chase.
        Paul, not looking where he's going, slips and falls into a
        hole. He slides down the mud...
      </p>
      <br>
    <div style="text-align:center;">
      <p>Paul </p>
      <div>Ahhhhhh </div>
    </div>
      <br>
      <p>
        SID and his BUDDIES stop short of the hole. They hear
        Paul's cavernous cry as he falls. Sid and his buddies look
        concerned through their cool. Finally:
      </p>
      <br>
    <div style="text-align:center;">
      <p>Sid </p>
    
      <p>
        Dummy. Let's go, guys.
      </p>
    </div>
      <br>
      <p>
        After a long descent, Paul lands into a DEN OF VIPERS. Paul's teeth clater.
      </p>`,
      rev: 1,
    },

    layoutBoards: [
      {
        id: 240,
        name: '',
        shotNumber: 1,
        panel: 1, // this needs to be unique
        artist: 'objectId',
        board: '//unsplash.it/id/58/500/300',
        action: '',
        dialogue: '',
        createdAt: 'date',
        revision: 1,
      },
      {
        id: 2900,
        name: '',
        shotNumber: 1,
        panel: 2, // this needs to be unique
        artist: 'objectId',
        board: '//unsplash.it/id/48/500/300',
        action: '',
        dialogue: '',
        createdAt: 'date',
        revision: 1,
      },
    ],
    beatBoards: [
      {
        id: 9140,
        name: '',
        shotNumber: 1,
        panel: 1, // this needs to be unique
        artist: 'objectId',
        board: '//unsplash.it/id/29/500/300',
        action: '',
        dialogue: '',
        createdAt: 'date',
        revision: 1,
      },
      {
        id: 1140,
        name: '',
        shotNumber: 1,
        panel: 12, // this needs to be unique
        artist: 'objectId',
        board: '//unsplash.it/id/229/500/300',
        action: '',
        dialogue: '',
        createdAt: 'date',
        revision: 1,
      },
    ],
    storyBoards: [
      {
        id: 2340,
        name: '',
        shotNumber: 1,
        panel: 7, // this needs to be unique
        artist: 'objectId',
        board: '//unsplash.it/id/23/500/300',
        action: '',
        dialogue: '',
        createdAt: 'date',
        revision: 1,
      },
      {
        id: 2540,
        name: '',
        shotNumber: 1,
        panel: 10, // this needs to be unique
        artist: 'objectId',
        board: '//unsplash.it/id/24/500/300',
        action: '',
        dialogue: '',
        createdAt: 'date',
        revision: 1,
      },
      {
        id: 2740,
        name: '',
        shotNumber: 1,
        panel: 3, // this needs to be unique
        artist: 'objectId',
        board: '//unsplash.it/id/26/500/300',
        action: '',
        dialogue: '',
        createdAt: 'date',
        revision: 1,
      },
      {
        id: 2840,
        name: '',
        shotNumber: 2,
        panel: 5, // this needs to be unique
        artist: 'objectId',
        board: '//unsplash.it/id/27/500/300',
        action: '',
        dialogue: '',
        createdAt: 'date',
        revision: 1,
      },
      {
        id: 2270,
        name: '',
        shotNumber: 2,
        panel: 8, // this needs to be unique
        artist: 'objectId',
        board: '//unsplash.it/id/28/500/300',
        action: '',
        dialogue: '',
        createdAt: 'date',
        revision: 1,
      },
      {
        id: 2243,
        name: '',
        shotNumber: 2,
        panel: 11, // this needs to be unique
        artist: 'objectId',
        board: '//unsplash.it/id/29/500/300',
        action: '',
        dialogue: '',
        createdAt: 'date',
        revision: 1,
      },
    ],
    animatic: 's3-videoURL',
    video: 's3-videoURL',
    revision: 1,
  },
];
export const field = {
  _id: 1234, // from db creation
  fieldName: 'Paul_Saves_All',
  slug: 'paul-saves-all',
  projects: {
    ['projectNameExample Paul_Saves_All_Movie']: {
      id: 1234,
      slug: '/projects/paul-saves-all-movie',
      script: { Location: 's3 bucket', revision: 1 },
      conceptArt: [],
      funding: { funded: false, amount: 0 }, // information about the projects financial status
      reels: {
        ['reelNameExampleMovie']: {
          id: 111,
          production: false,
          timeLine: {
            timeLine: [
              {
                scene001: initialScenes.scene001,
              },
            ], // potentially this can move in and out of editorial. Passed in and out of an editor. OR this will just be a place where the initialScenes live while it's being put in and out of editorial for them to pull from.
            revision: 1,
            frameRate: 24,
            aspectRatio: '16:9',
          },
          initialScenes,
          director: '',
          contributors: [], // push to this list when someone makes an edit
        },
        ['realNameExampleTeaser']: {
          timeLine: {
            timeLine: [],
            revision: 1,
          },
          initialScenes,
          director: '',
          contributors: [], // push to this list when someone makes an edit
        },
      },
    },
  },
};