import { useState, useEffect, useReducer, useContext } from 'react';
import FormInput from '../formlayout/FormInput';
import FormSelect from '../formlayout/FormSelect';
import FormCard from '../formlayout/FormCard';
import { Context } from '../../context';

// initial states
const initialButtonState = {
  machine: 'scene',
  display: 'Reels',
  button1: { active: true },
  button2: { active: false },
  button3: { active: false },
  button4: { active: false },
  button5: { active: false },
};
// scene template
const initialViewerState = {
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
  details: {
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
  },

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

const initPreviewState = {
  image: '//unsplash.it/id/1/400/225',
  sceneName: 'Scene Preview',
  panel: '',
  id: '',
};

// fake data
const initialScenes = [
  initialViewerState,
  {
    id: 212501,
    forReel: 'ObjectId - Paul Saves All Movie',
    launched: false,
    productionStage: 'boards',
    sceneName: 'Tip Toe',
    stripImage: '//unsplash.it/id/16/400/225',
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
    description: 'Paul runs from the Vipers.',
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
  },
  {
    id: 214501,
    forReel: 'ObjectId - Paul Saves All Movie',
    launched: false,
    productionStage: 'boards',
    sceneName: 'Toodaloo',
    stripImage: '//unsplash.it/id/21/400/225',
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
    description: 'And on we go!',
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
  },
  {
    id: 215501,
    forReel: 'ObjectId - Paul Saves All Movie',
    launched: false,
    productionStage: 'boards',
    sceneName: 'Here they come!',
    stripImage: '//unsplash.it/id/18/400/225',
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
  },
  {
    id: 216501,
    forReel: 'ObjectId - Paul Saves All Movie',
    launched: false,
    productionStage: 'boards',
    sceneName: 'Uh oh',
    stripImage: '//unsplash.it/id/231/400/225',
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
  },
  {
    id: 210701,
    forReel: 'ObjectId - Paul Saves All Movie',
    launched: false,
    productionStage: 'boards',
    sceneName: 'Hurry',
    stripImage: '//unsplash.it/id/123/400/225',
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
  },
  {
    id: 210801,
    forReel: 'ObjectId - Paul Saves All Movie',
    launched: false,
    productionStage: 'boards',
    sceneName: 'Already there',
    stripImage: '//unsplash.it/id/261/400/225',
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
  },
  {
    id: 210591,
    forReel: 'ObjectId - Paul Saves All Movie',
    launched: false,
    productionStage: 'boards',
    sceneName: 'My my',
    stripImage: '//unsplash.it/id/219/400/225',
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
  },
  {
    id: 200501,
    forReel: 'ObjectId - Paul Saves All Movie',
    launched: false,
    productionStage: 'boards',
    sceneName: 'Stu did it',
    stripImage: '//unsplash.it/id/29/400/225',
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
  },
  {
    id: 230501,
    forReel: 'ObjectId - Paul Saves All Movie',
    launched: false,
    productionStage: 'boards',
    sceneName: 'Help!',
    stripImage: '//unsplash.it/id/149/400/225',
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
          id: 111,
          reelName: 'movie',
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
        {
          reelName: 'teaser',
          timeLine: {
            timeLine: [],
            revision: 1,
          },
          initialScenes,
          director: '',
          contributors: [], // push to this list when someone makes an edit
        },
      ],
    },
  ],
};

// reducers
const reducer = (state, action) => {
  switch (action.type) {
    case 'EDIT_SCRIPT': {
      return {
        ...state,
        edit: true,
      };
    }
    case 'SAVE_SCRIPT': {
      return {
        ...state,
        edit: false,
      };
    }
    case 'CHECKOUT': {
      return {
        ...state,
        checkedOut: {
          shot: action.payload.shot,
          user: action.payload.user,
        },
      };
    }
    case 'CHECKIN': {
      return {
        ...state,
        checkedOut: { shot: '', user: '' },
        checkedIn: {
          shot: action.payload.shot,
          user: action.payload.user,
        },
      };
    }
    case 'CONFIRM': {
      return {
        ...state,
        confirm: action.payload,
      };
    }
    case 'ADD_SCENE': {
      return {
        ...state,
        addScene: action.payload.scene,
      };
    }
    // case 'CONFIRM_DONE': {
    //   return {
    //     ...state,
    //     confirm: '',
    //   };
    // }
    default:
      state;
  }
};

// components

const SceneMachineTitle = ({ setButtons, buttons }) => {
  const Style = () => {
    return (
      <style jsx>{`
        .scene-machine-title {
          // box-shadow: 0 10px 10px rgba(256 256, 256, 256, 0.8);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
          margin-top: 5px;
        }
        .scene-machine > div > h1 {
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(107, 105, 105);
          box-shadow: inset 0 0 15px rgb(14, 13, 12),
            inset 0 0 15px rgb(39, 38, 31), inset 0 0 30px rgb(55, 55, 75),
            inset 0 0 20px rgb(55, 55, 75);
          background: rgb(247, 229, 229);
          font-size: 1.2rem;
          padding: 6px 30px;
          border-radius: 10px;
          box-shadow: 0 0px 10px rgba(95, 98, 104, 0.4),
            0 0px 10px rgba(200, 200, 256, 0.1), 0 0 10px rgba(200, 180, 0, 0.2),
            inset 0 0 10px, inset 0 0 3px, inset 0 0 1px, inset 0 0 2px;
        }
        .title-buttons-left {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          width: 300px;
        }
        .title-buttons-left > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-ctrl {
          width: 40px;
          height: 40px;
          border: solid 1px rgb(54, 58, 61);
          margin: 5px 3px;
          // border-right: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .btn-ctrl-inside {
          width: 25px;
          height: 25px;
          border-radius: 1px;
          background: rgb(227, 228, 222);
          // background: rgb(240, 248, 204);
          border: solid 1px rgb(17, 5, 1);
          box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.8),
            inset 0 0 3px rgba(0, 0, 0, 1), 0 0 1px rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-ctrl-inside.active {
          width: 24.3px;
          height: 24.3px;
          border-radius: 3px;
          border: solid 1px rgb(165, 150, 86);
          background: rgb(255, 230, 8);
          // background: rgb(248, 227, 42);
          // background: rgb(210, 248, 42);

          box-shadow: 0 0 5px rgba(209, 209, 209, 0.8),
            0 0 3px rgb(214, 214, 214), inset 0 0 4px rgba(228, 228, 228, 0.9),
            0px 0px 2px rgba(0, 0, 0, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .title-buttons-right {
          display: flex;
          width: 300px;
          flex-direction: row-reverse;
        }
        .btn-mini {
          cursor: pointer;
          color: #152125;
          padding: 2px 8px;
        }
      `}</style>
    );
  };

  return (
    <>
      <Style />
      <div className="scene-machine-title">
        <div className="title-buttons-left">
          <div
            onClick={() => setButtons({ ...buttons, machine: 'scene' })}
            className="btn-ctrl"
          >
            <div
              className={`btn-ctrl-inside ${
                buttons.machine === 'scene' && 'active'
              }`}
            ></div>
          </div>
          <div
            onClick={() => setButtons({ ...buttons, machine: 'asset' })}
            className="btn-ctrl"
          >
            <div
              className={`btn-ctrl-inside ${
                buttons.machine === 'asset' && 'active'
              }`}
            ></div>
          </div>
        </div>
        {/* <h1>{buttons.machine === 'scene' ? 'Scene' : 'Asset'} Machine</h1> */}
        <div className="title-buttons-right">
          {/* <div className="btn">
      <div className="btn-inside">X</div>
    </div>
    <div className="btn">
      <div className="btn-inside">V</div>
    </div> */}
          <div className="btn-mini">
            <i className="fas fa-trash-alt"></i>
          </div>
          <div className="btn-mini">
            <i className="fas fa-cut"></i>
          </div>
          <div className="btn-mini">
            <i class="far fa-clone"></i>
          </div>
          <div className="btn-mini">
            <i class="fas fa-power-off"></i>
          </div>
          <div className="btn-mini">
            <i class="far fa-share-square"></i>
          </div>
          <div className="btn-mini">
            <i class="fas fa-film"></i>
          </div>
        </div>
      </div>
    </>
  );
};

const SceneMachineStripArea = ({
  detail,
  setDetail,
  scenes,
  setScenes,
  setPreview,
  viewer,
  setViewer,
  handleViewer,
  setBackground,
}) => {
  const SceneMachineStripStyle = () => {
    return (
      <style jsx>{`
        .section-strip-container {
          background: rgb(218, 210, 210);
          // padding-top: 20px;
          width: 100%;

          border: solid 1px rgb(22, 19, 19);
          border-radius: 2px;
          box-shadow: inset 0 0px 10px, inset 0 0 4px, inset 0 0 4px, 0 0 5px,
            0 0 7px;
        }
        .scenes-section-strip {
          // background: rgb(226, 222, 205);
          background: rgb(29, 24, 24);
          display: flex;
          padding: 3px;
          overflow-x: scroll;
          margin: 5px 0;
          box-shadow: 0 0 3px;
          // border-radius: 7px;
          // margin-left: 30px;
          // margin-right: 30px;
        }
        .scene-strip {
          border-top: dashed 5.5px rgb(87, 85, 85);
          border-bottom: dashed 5.5px rgb(107, 104, 104);
          // border-top: dashed 6px rgb(201, 196, 196);
          // border-bottom: dashed 6px rgb(201, 196, 196);
          // border-bottom: dashed 8px rgb(7, 7, 5);;
          padding: 6px 20px;
          margin: 0 3px;
          // border-right: solid 2px rgb(15, 11, 11);
          cursor: pointer;
          position: relative;
        }

        .scenes-section-strip::-webkit-scrollbar {
          display: none;
        }

        .scene-strip > img {
          height: 50px;
          background: #e0e0e0;
          border-radius: 3px;
          // position: relative;
          // transform: rotate(-90deg);
          opacity: 0.6;
        }
        .empty-strip {
          height: 50px;
          // width: 88.89px;
          background: #3f3f3f;
          // position: relative;
          // transform: rotate(-90deg);
          // opacity: 0.6;
          border-radius: 3px;
        }
        .scene-strip > img.active {
          // border: solid 2px green;
          // position: absolute;
          opacity: 1;
          background: rgba(3, 150, 3);
          box-shadow: 0 0 2px rgba(231, 230, 230, 0.2),
            0 0 6px rgba(231, 230, 230, 0.4), 0 0 1px white;
          // margin: 1px;
        }
        .scene-strip > p {
          padding: 1px;
          background: rgba(0, 0, 0, 0.5);
          bottom: 12px;
          position: absolute;
          font-size: 0.6rem;
          color: rgb(179, 174, 174);
        }
        .add {
          cursor: pointer;
          color: #2f3c41;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          padding: 10px 0;
          border: none;
        }
        .scene-strip-add {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 89px;
        }
        .scene-strip-add > div {
          top: 15px;
          // left: 48px;
          cursor: pointer;
          color: #2f3c41;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(228, 227, 227, 0.9);
          border-radius: 50%;
          width: 33px;
          height: 33px;
          // padding: 10px 0;
          position: absolute;
          border: none;
        }
      `}</style>
    );
  };
  console.log(detail);

  const handleNewScene = (e) => {
    e.preventDefault();
    // TODO: find way to set scroll to top of scene overview display
    setPreview({
      image: '/cork.jpeg',
      // image: scene.storyBoards[0].board,
      sceneName: 'New Scene',
      panel: 0,
      id: 0,
      // id: scene.storyBoards[0].panel,
    });
    // setViewer(scene);
    setDetail('new scene');
    setBackground('rgb(218, 214, 208)');
  };
  return (
    <>
      <SceneMachineStripStyle />
      <div className="section-strip-container">
        <div id="act1" className="scenes-section-strip">
          {scenes.map((scene) => (
            <>
              <div
                key={scene.id}
                onClick={(e) => handleViewer(e, scene)}
                className="scene-strip"
              >
                <img
                  className={scene.id === viewer.id && 'active'}
                  src={scene.stripImage}
                  alt=""
                />
                <p>{scene.sceneName}</p>
              </div>
            </>
          ))}
          <div className="scene-strip">
            <div className="empty-strip"></div>
            <div className="scene-strip-add">
              <div onClick={handleNewScene}>
                <i class="fas fa-plus "></i>
              </div>
            </div>
          </div>
          {/* <div className="scene-strip">

            <div className="empty-strip"></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

const SceneMachineControlPanel = ({
  setButtons,
  buttons,
  setAnswer,
  dispatch,
  state,
  activeShot,
  userContext,
}) => {
  const { button1, button2, button3, button4, button5 } = buttons;
  const Style = () => {
    return (
      <style jsx>{`
        .control-panel {
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .control-panel-buttons {
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 5px;
          cursor: pointer;
          // width: 30px;
        }

        .control-panel-display {
          font-size: 1rem;
          color: rgb(10, 59, 6);
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px;
          width: 200px;
          border-radius: 4px;
          background: rgb(180, 224, 154);
          // box-shadow: inset 0 0 10px, inset 0 0 3px, inset 0 0 10px;
          box-shadow: inset 0 0px 5px rgba(0, 0, 0, 0.8),
            inset 0 0px 3px rgba(0, 0, 0, 0.8);
          // box-shadow: 0 0px 10px rgba(256, 256, 256, 0.8), 0 0px 5px rgba(256, 256, 256, 0.8);
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
          width: 45px;
          height: 43px;
          // border: solid 1px rgb(10, 1, 1);
          border: solid 1px rgb(54, 58, 61);
          border-right: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .btn:last-child {
          border-right: solid 1px rgb(54, 58, 61);
          // border-right: solid 1px rgb(10, 1, 1);
        }

        .btn-inside {
          width: 25px;
          height: 25px;
          border-radius: 2px;
          background: rgb(240, 248, 204);
          border: solid 1px rgb(17, 5, 1);

          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8),
            inset 0 0 3px rgba(0, 0, 0, 1), 0 0 1px rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-inside.active {
          width: 25px;
          height: 25px;
          border-radius: 3px;
          border: solid 1px rgb(165, 150, 86);
          background: rgb(248, 227, 42);
          // background: rgb(248, 227, 42);
          // background: rgb(210, 248, 42);

          box-shadow: 0 0 5px rgba(209, 209, 209, 0.8),
            0 0 3px rgb(214, 214, 214), inset 0 0 1px rgba(228, 228, 228, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-mini {
          cursor: pointer;
          color: #152125;
          padding: 2px 8px;
        }
      `}</style>
    );
  };
  return (
    <>
      <Style />
      <div className="control-panel">
        <code className="control-panel-display">
          <strong>**{buttons.display}**</strong>
        </code>
        <div className="control-panel-buttons">
          <div className="btn">
            <div
              onClick={() =>
                setButtons({
                  ...buttons,
                  display: 'Reels',
                  button1: { active: true },
                  button2: { active: false },
                  button3: { active: false },
                  button4: { active: false },
                  button5: { active: false },
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
                  button5: { active: false },
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
                  display: 'Sequences',
                  button1: { active: false },
                  button2: { active: false },
                  button3: { active: true },
                  button4: { active: false },
                  button5: { active: false },
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
                  display: 'Scenes',
                  button1: { active: false },
                  button2: { active: false },
                  button3: { active: false },
                  button4: { active: true },
                  button5: { active: false },
                })
              }
              className={`btn-inside ${button4.active && 'active'}`}
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
                  button4: { active: false },
                  button5: { active: true },
                })
              }
              className={`btn-inside ${button5.active && 'active'}`}
            ></div>
          </div>
        </div>
        <div className="control-panel-other">
          {/* {state.confirm && <GetAnswer />} */}
          {state.confirm === 'Checkout scene' && (
            <>
              <div
                className="btn-mini"
                onClick={() => {
                  setAnswer(false),
                    dispatch({
                      type: 'CONFIRM',
                      payload: '',
                    });
                }}
              >
                <i class="fas fa-times"></i>
              </div>
              <div
                className="btn-mini"
                onClick={() => {
                  setAnswer(true),
                    dispatch({
                      type: 'CHECKOUT',
                      payload: {
                        shot: activeShot,
                        user: userContext.state.user,
                      },
                    }),
                    dispatch({
                      type: 'CONFIRM',
                      payload: '',
                    });
                }}
              >
                <i class="fas fa-check"></i>
              </div>
              <div>{state.confirm}?</div>
            </>
          )}
          {state.confirm === 'Checkin scene' && (
            <>
              <div
                className="btn-mini"
                onClick={() => {
                  setAnswer(false),
                    dispatch({
                      type: 'CONFIRM',
                      payload: '',
                    });
                }}
              >
                <i class="fas fa-times"></i>
              </div>
              <div
                className="btn-mini"
                onClick={() => {
                  setAnswer(true),
                    dispatch({
                      type: 'CHECKIN',
                      payload: {
                        shot: activeShot,
                        user: userContext.state.user,
                      },
                    }),
                    dispatch({
                      type: 'CONFIRM',
                      payload: '',
                    });
                }}
              >
                <i class="fas fa-check"></i>
              </div>
              <div>{state.confirm}?</div>
            </>
          )}
          {state.confirm === 'Add New Scene' && ( // CONFIRM with payload of '' closes everything
            <>
              <div
                className="btn-mini"
                onClick={() => {
                  setAnswer(false),
                    dispatch({
                      type: 'CONFIRM',
                      payload: '',
                    });
                }}
              >
                <i class="fas fa-times"></i>
              </div>
              <div
                className="btn-mini"
                onClick={() => {
                  setAnswer(true),
                    dispatch({
                      type: 'ADD_SCENE',
                      payload: {
                        scene: true,
                      },
                    }),
                    dispatch({
                      type: 'CONFIRM',
                      payload: '',
                    });
                }}
              >
                <i class="fas fa-check"></i>
              </div>
              <div>{state.confirm}?</div>
            </>
          )}
          {/* <div className="btn-mini">
                <i class="fas fa-pager"></i>
              </div> */}
          {!state.confirm && (
            <>
              <div className="btn-mini">
                <i class="fas fa-redo-alt"></i>
              </div>
              <div className="btn-mini">
                <i class="fas fa-undo-alt"></i>
              </div>
              <div className="btn-mini">
                <i class="fas fa-photo-video"></i>
              </div>
              <div className="btn-mini">
                <i class="fas fa-file-export"></i>
              </div>
              <div className="btn-mini">
                <i class="fas fa-info-circle"></i>
              </div>
              <div className="btn-mini">
                <i class="far fa-save"></i>
              </div>
            </>
          )}
          {/* <div className="btn-mini">
                <i class="fas fa-expand"></i>
              </div> */}
        </div>
      </div>
    </>
  );
};

const SceneMachineLeftPanel = ({ preview }) => {
  const Style = () => {
    return (
      <style jsx>{`
        .left-panel {
          padding: 10px;
          width: 40%;
          max-height: 100%;
          overflow: auto;
        }

        .viewer {
          // max-width: 500px;
          // height: 370px;
          border-radius: 5px;
          // height: 100%;
          // border: solid 15px rgb(24, 4, 4);
          box-shadow: inset 0 0px 10px rgba(0, 0, 0, 1);
        }
        .viewer > img {
          // max-height: 90%;
          padding: 8px;
          // height: 100%;
          width: 100%;
          // max-height: 270px;
        }

        .transport-title {
          border-bottom: solid 1px;
          background: rgb(206, 230, 169);
          // border: solid 1px rgb(65, 11, 11);
          border-radius: 3px;
          margin: 10px 0;
          box-shadow: inset 0 0 10px, inset 0 0 5px, inset 0 0 3px;
          padding: 10px 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .transport-title > div {
          width: 100%;
          height: 30px;
          display: flex;
          flex-wrap: nowrap;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .transport-viewer-controls {
          // height: 100%;
          display: flex;
          justify-content: center;
        }
        .transport-viewer-controls > button {
          // margin-top: 10px;
          padding: 13px 10px;
          margin: 1px;
          box-shadow: inset 0 4px 0px,
            inset -2px -2px 2px 0px rgba(102, 91, 91, 0.774),
            inset 2px -2px 2px 0px rgba(102, 91, 91, 0.774);
          color: rgb(141, 29, 29);
          cursor: pointer;
        }
      `}</style>
    );
  };

  return (
    <>
      <Style />
      <div className="left-panel">
        <div className="viewer">
          <img src={preview.image} alt="" />
          {/* change to state */}
        </div>
        <div className="transport-title">
          <div>
            <p>Scene:</p> {preview.sceneName || '0'}
          </div>
          <div>
            <p>Panel:</p> {preview.panel || '0'}
          </div>
          <div>
            <p>Shot:</p> {preview.shotNumber || '0'}
          </div>
        </div>
        <div className="transport-viewer-controls">
          <button>
            <i class="fas fa-chevron-left"></i>
          </button>
          <button>Stop</button>
          <button>Play</button>
          <button>Pause</button>
          <button>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

const NewSceneForm = () => {
  return <>
  <FormCard>
    <FormInput />
    <FormInput />
  </FormCard>
  </>
}

const SceneMachineRightPanel = ({
  scenes,
  setScenes,
  detail,
  viewer,
  setDetail,
  setBackground,
  background,
  state,
  activeShot,
  setActiveShot,
  dispatch,
  userContext,
  preview,
  setPreview,
  setViewer,
}) => {
  const Style = ({ background }) => {
    return (
      <style jsx>{`
        .right-panel {
          width: 60%;
          max-height: 100%;
          overflow: auto;
        }
        .scene-overview-right-container {
          // background: #fff;
          padding: 10px;
          height: 100%;
          max-height: 100%;
        }
        .transport-frame {
          box-shadow: inset 0 0 20px, inset 0 0 4px, inset 0 0 10px;
          height: 100%;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          // align-items: flex-start;
        }
        .transport > div > button {
          font-size: 0.6rem;
          cursor: pointer;
          color: #fff;
          background: rgb(57, 92, 97);
          // border: solid 1px rgb(54, 23, 23);
          border-style: double;
          padding: 2px 4px;
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
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
        .btn-small {
          // color: rgb(7, 245, 233);
        }

        .btn-small.active {
          color: rgb(7, 245, 233);
          box-shadow: 0 0 1px rgba(167, 175, 175, 0.3);
        }
        .transport-overview {
          // z-index: 1;
          background-color: ${background};
          width: auto;
          // border: solid 1px rgb(65, 11, 11);
          margin: 10px;

          // overflow: auto;
          height: 100%;
          // max-height: 100%;
          border-radius: 10px;
          box-shadow: inset 0 0 10px, inset 0 0 3px;
          padding: 0 2px;
          overflow-y: scroll;
          display: flex;
          flex-direction: column;
          z-index: 2;
        }
        .transport-description {
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .transport-description > h3 {
          margin-bottom: 20px;
          background: #fff;
          padding: 10px 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }

        .transport-description-detail {
          background: #fff;
          line-height: 1.8rem;
          text-indent: 2rem;
          padding: 20px;
          border: solid 1px;
        }
        .details-table {
          padding: 20px;
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
          font-size: 0.9em;
          font-family: sans-serif;
          min-width: 200px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
          border-radius: 5px;
        }

        .details-table thead tr {
          // background-color: #009879;
          color: #ffffff;
          text-align: left;
        }

        .details-table th,
        .details-table td {
          padding: 12px 15px;
        }

        .details-table tbody tr {
          border-bottom: 1px solid #aaaaaa;
        }

        .details-table tbody tr:nth-of-type(odd) {
          background-color: #f3f3f3;
        }

        // .details-table tbody tr:last-of-type {
        //   border-bottom: 2px solid #009879;
        // }

        //   .details-table tbody tr.active-row {
        //     font-weight: bold;
        //     color: #009879;
        // }
        .transport-script {
          font-family: 'Courier New', Courier, monospace;
          padding: 10px 20px;
        }
        .transport-script > textarea {
          font-family: 'Courier New', Courier, monospace;
          outline: none;
          border: none;
        }

        .transport-breakdown {
          // background: #2f3c41;
          padding: 20px 10px;
        }
        .transport-breakdown-shot {
          cursor: pointer;
          border: solid rgba(0, 0, 0, 0.15);
        }
        .transport-breakdown-shot.active {
          border: solid;
        }
        .transport-breakdown-shot.checked-out {
          color: #2f3c41;
          background: #acb7bb;
        }
        .transport-breakdown-shot.checked-out.not-user {
          color: #2f3c41;
          background: #acb7bb;
          pointer-events: none;
          cursor: default;
        }

        .transport-breakdown > div {
          background-color: white;
          padding: 20px;
          margin-bottom: 10px;
        }
        .transport-breakdown > div > div {
          margin: 20px;
        }
        .checked-out {
          background: #747373;
        }
        .add {
          cursor: pointer;
          color: #2f3c41;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          padding: 10px 0;
          border: none;
        }
        .transport-panels-section {
          width: 100%;
          // padding: 10px 10px;
        }
        .bread-crumb {
          overflow: hidden;
          // width: 100%;
          // background: #2f3c41;
          font-size: 0.7rem;
          color: #c5c3c3;
          padding: 5px 10px;
          padding-top: 10px;
          border-bottom: solid 1px grey;
          // position: fixed;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .bread-crumb > div {
          width: 400px;
          display: flex;
          // justify-content: flex-end;
        }

        .bread-crumb > div:last-child {
          width: 400px;
          display: flex;
          justify-content: flex-end;
        }
        .board-titles {
          padding-top: 10px;
          padding-bottom: 10px;
          font-size: 1.4rem;
          color: #aaaaaa;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .transport-panels {
          padding: 0px 20px;
          display: flex;
          flex-wrap: wrap;
          // border-bottom: solid 1px grey;
          padding-bottom: 20px;
        }
        .transport-panel.active {
          // border: solid;
        }
        .transport-panel {
          cursor: pointer;
          position: relative;
          max-width: 100px;
          padding: 10px 0;
          margin: 5px;
        }
        .transport-panel > img.active {
          border: solid 2px rgb(28, 226, 183);
        }
        .transport-panel > img {
          border: solid 2px rgba(0, 0, 0, 0.3);
          width: 100%;
        }
        .transport-label {
          background: rgba(0, 0, 0, 0.3);
          // border-radius: 2px;
          color: #fff;
          position: absolute;
          padding: 1px 5px;
          font-size: 0.5em;
          top: 12px;
          right: 2px;
          cursor: pointer;
        }

        .panel-index {
          top: 12px;
          left: 2px;
          position: absolute;
          background: rgba(256, 256, 256, 0.8);
          font-size: 0.6rem;
          padding: 1px 4px;
        }
        .panel-shot {
          position: absolute;
          top: 12px;
          right: 42px;
          background: rgba(256, 256, 256, 0.4);
          font-size: 0.6rem;
          padding: 1px 4px;
        }
        .transport-panel-add {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 110px;
        }

        .transport-panel-add > div {
          cursor: pointer;
          color: #2f3c41;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(228, 227, 227, 0.9);
          border-radius: 50%;
          width: 33px;
          height: 33px;
          padding: 10px 0;
          border: none;
        }
        .new-scene-form {
          display: flex;
          justify-content: center;
        }
      `}</style>
    );
  };

  const handleCancel = () => {
    dispatch({ type: 'CONFIRM', payload: 'Cancel New Scene' })
    setPreview({
      image: '//unsplash.it/id/1/400/225',
      sceneName: scenes[0].sceneName,
      panel: '',
      id: '',
    });
    setViewer(scenes[0]);
    setDetail('overview');
  };

  return (
    <>
      <Style background={background} />
      <div className="right-panel">
        <div className="scene-overview-right-container">
          <div className="transport-frame">
            <div className="transport">
              {/* this should download all coresponding data like concept art. Maybe */}
              <div className="transport-left-controls">
                {detail != 'new scene' && (
                  <>
                    <button
                      className={`btn-small ${
                        detail === 'overview' ? 'active' : ''
                      }`}
                      onClick={() => {
                        setDetail('overview');
                        setBackground('rgb(218, 214, 208)');
                      }}
                    >
                      Overview
                    </button>
                    <button
                      className={`btn-small ${
                        detail === 'script' ? 'active' : ''
                      }`}
                      onClick={() => {
                        setDetail('script');
                        setBackground('white');
                      }}
                    >
                      Script
                    </button>
                    <button
                      className={`btn-small ${
                        detail === 'breakdown' ? 'active' : ''
                      }`}
                      onClick={() => {
                        setDetail('breakdown');
                        setBackground('rgb(218, 214, 208)');
                      }}
                    >
                      Breakdowns
                    </button>
                    <button
                      className={`btn-small ${
                        detail === 'boards' ? 'active' : ''
                      }`}
                      onClick={() => {
                        setDetail('boards');
                        setBackground('rgb(59, 63, 63)');
                      }}
                    >
                      Boards
                    </button>
                    <button
                      className={`btn-small ${
                        detail === 'video' ? 'active' : ''
                      }`}
                      onClick={() => {
                        setDetail('video');
                        setBackground('rgb(59, 63, 63)');
                      }}
                    >
                      Video
                    </button>
                  </>
                )}
              </div>
              <div className="transport-center-controls">
                {/* <button>&lArr;</button> */}
                <button
                  className={`btn-small ${detail === 'none' ? 'active' : ''}`}
                >
                  &larr;
                </button>
                <button
                  className={`btn-small ${detail === 'main' ? 'active' : ''}`}
                >
                  Main
                </button>
                <button
                  className={`btn-small ${detail === 'none' ? 'active' : ''}`}
                >
                  &rarr;
                </button>
                {/* <button>&rArr;</button> */}
              </div>
              <div className="transport-right-controls">
                {detail === 'new scene' && (
                  <>
                    <button
                      onClick={handleCancel}
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: 'CONFIRM', payload: 'Add New Scene' })
                      }
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      AddScene
                    </button>
                  </>
                )}
                {detail === 'boards' && preview.panel && (
                  <>
                    <button
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      Upload
                    </button>
                    <button
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      Download
                    </button>
                    <button
                      onClick={() => setDetail('panel details')}
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      Details
                    </button>
                  </>
                )}
                {detail === 'boards' && (
                  <>
                    <button
                      onClick={() => setActiveShot('')}
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      SeeAll
                    </button>
                  </>
                )}
                {detail === 'breakdown' && activeShot != '' && (
                  <>
                    <button
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      Notes
                    </button>
                    <button
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      Update
                    </button>

                    {state.checkedOut &&
                    activeShot.id === state.checkedOut.shot.id ? (
                      <button
                        className={`btn-small ${
                          detail === 'none' ? 'active' : ''
                        }`}
                        onClick={
                          // () => handleCheckout(answer)
                          () =>
                            dispatch({
                              type: 'CONFIRM',
                              payload: 'Checkin scene',
                            })
                        }
                      >
                        Checkin
                      </button>
                    ) : (
                      <button
                        className={`btn-small ${
                          detail === 'none' ? 'active' : ''
                        }`}
                        onClick={
                          // () => handleCheckout(answer)
                          () =>
                            dispatch({
                              type: 'CONFIRM',
                              payload: 'Checkout scene',
                            })
                        }
                      >
                        Checkout
                      </button>
                    )}
                  </>
                )}
                {detail === 'overview' && (
                  <>
                    <button
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      Backgrounds
                    </button>
                    <button
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      Assets
                    </button>
                    <button
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      ModelSheets
                    </button>
                  </>
                )}
                {detail === 'script' && (
                  <>
                    <button
                      className={`btn-small ${
                        detail === 'none' ? 'active' : ''
                      }`}
                    >
                      Revisions
                    </button>
                    {state.edit ? (
                      <button
                        className={`btn-small ${
                          detail === 'none' ? 'active' : ''
                        }`}
                        onClick={() => dispatch({ type: 'SAVE_SCRIPT' })}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className={`btn-small ${
                          detail === 'none' ? 'active' : ''
                        }`}
                        onClick={() => dispatch({ type: 'EDIT_SCRIPT' })}
                      >
                        Edit
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="transport-overview">
              {detail === 'overview' && (
                <div id="scene-card" className="transport-description">
                  {/* <h2>Scene Card: </h2> */}
                  <h3>Scene: "{viewer.sceneName}"</h3>
                  <div className="transport-description-detail">
                    {viewer.description}
                  </div>
                  <table className="details-table">
                    {/* <caption>Details Table</caption> */}
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Detail</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Setting: </td>
                        <td>{viewer.details && viewer.details.setting}</td>
                      </tr>

                      <tr>
                        <td>Character Count: </td>
                        <td>
                          {viewer.details && viewer.details.characters.length}
                        </td>
                      </tr>
                      <tr>
                        <td> Shot Count: </td>
                        <td>
                          {viewer.details && viewer.details.shotList.length}
                        </td>
                      </tr>
                      <tr>
                        <td> Backgrounds: </td>
                        <td>
                          {viewer.details && viewer.details.backgrounds.length}
                        </td>
                      </tr>
                      <tr>
                        <td> Asset Count: </td>
                        <td>
                          {viewer.details && viewer.details.assets.length}
                        </td>
                      </tr>
                      <tr>
                        <td> FX: </td>
                        <td>{viewer.details && viewer.details.FX.length}</td>
                      </tr>
                      <tr>
                        <td>Frame Rate: </td>
                        <td>{viewer.details && viewer.details.frameRate}</td>
                      </tr>
                      <tr>
                        <td>Aspect Ratio: </td>
                        <td>{viewer.details && viewer.details.aspectRatio}</td>
                      </tr>
                      <tr>
                        <td>Launched: </td>
                        <td>
                          {viewer.details && viewer.launched ? 'true' : 'false'}
                        </td>
                      </tr>
                      <tr>
                        <td>Production Stage: </td>
                        <td>{viewer.details && viewer.productionStage}</td>
                      </tr>
                    </tbody>
                  </table>
                  Contributers and their hard work are how this project gets
                  made
                  <table className="details-table">
                    <thead>
                      <tr>
                        <th>Contributers</th>
                        <th>Job</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* obviously do a map here from viewer */}
                      <tr>
                        <td>Keith</td>
                        <td>Key Frames</td>
                      </tr>
                      <tr>
                        <td>Sonny</td>
                        <td>Inbetweens</td>
                      </tr>
                      <tr>
                        <td>Loralai</td>
                        <td>Inbetweens</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {/* <hr /> */}
              {detail === 'script' && (
                // TODO: add undo function to changes in text area. Maybe store viewer.script.script in a backup field when you hit edit button.
                <div className="transport-script">
                  Revision: {viewer.script.rev}
                  {!state.edit ? (
                    <>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: viewer.script.script,
                        }}
                      ></div>
                    </>
                  ) : (
                    <>
                      <textarea
                        cols="70"
                        rows="50"
                        type="text"
                        value={viewer.script.script}
                        onChange={(e) =>
                          setViewer({
                            ...viewer,
                            script: {
                              ...viewer.script,
                              script: e.target.value,
                            },
                          })
                        }
                      />
                    </>
                  )}
                </div>
              )}

              {detail === 'breakdown' && (
                <div className="transport-breakdown">
                  {viewer.details.shotList.map((shot, i) => (
                    <div
                      className={`transport-breakdown-shot ${
                        state.checkedOut &&
                        state.checkedOut.shot.id === shot.id &&
                        'checked-out'
                      } ${activeShot.id === shot.id && 'active'} ${
                        state.checkedOut &&
                        state.checkedOut.user.name !=
                          userContext.state.user.name &&
                        'not-user'
                      }`}
                      onClick={() => setActiveShot(shot)}
                    >
                      <h3>Shot Number {i + 1}</h3>
                      <div>
                        <strong>Complexity: </strong>
                        {shot.complexity}
                      </div>
                      <div>{shot.breakdown}</div>
                      <div>
                        <strong>Characters: </strong>
                        {shot.characters}
                        <br />
                        <strong>Assets: </strong>
                        {shot.assets}
                        <br />
                        <strong>Backgrounds: </strong>
                        {shot.backgrounds}
                      </div>
                      {state.checkedOut &&
                      state.checkedOut.shot.id === shot.id ? (
                        <div>
                          <strong>
                            Checked out by{' '}
                            {state.checkedOut && state.checkedOut.user.name}
                          </strong>
                        </div>
                      ) : (
                        <div>
                          <strong>Open for checkout</strong>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="add" onClick={() => setAddBreakdown()}>
                    <i class="fas fa-plus fa-2x"></i>
                  </div>

                  {/* <div
                              dangerouslySetInnerHTML={{
                                __html: viewer.details.shotList.breakdown,
                              }}
                            ></div> */}
                </div>
              )}
              {/* <hr /> */}

              {detail === 'boards' && (
                <div className="transport-panels-section">
                  {/* <h2>Scene Panels: </h2> */}
                  <div className="bread-crumb">
                    <div>
                      Boards &gt;{' '}
                      {activeShot.shot
                        ? 'Shot number: ' + activeShot.shot
                        : 'All'}
                    </div>
                    {/* <div></div> */}
                    <div>Layouts | Beat Boards | Scene Boards</div>
                  </div>

                  <div className="board-titles">Layouts</div>
                  <div className="transport-panels">
                    {viewer.layoutBoards.map(
                      (board, i) =>
                        (activeShot.shot === board.shotNumber && (
                          <>
                            <div
                              onClick={() =>
                                setPreview({
                                  image: board.board,
                                  sceneName: viewer.sceneName,
                                  panel: i + 1,
                                  shotNumber: board.shotNumber,
                                  id: board.id,
                                })
                              }
                              className="transport-panel"
                            >
                              <div className="transport-label">
                                {board.panel}
                              </div>
                              <div className="panel-index">{i + 1}</div>
                              <div className="panel-shot">
                                {board.shotNumber}
                              </div>
                              <img
                                className={board.id === preview.id && 'active'}
                                src={board.board}
                                alt=""
                              />
                              {/* <p>shot: {board.shotNumber}</p> */}
                            </div>
                          </>
                        )) ||
                        (activeShot === '' && (
                          <div
                            onClick={() =>
                              setPreview({
                                image: board.board,
                                sceneName: viewer.sceneName,
                                panel: i + 1,
                                shotNumber: board.shotNumber,
                                id: board.id,
                              })
                            }
                            className="transport-panel"
                          >
                            <div className="transport-label">{board.panel}</div>
                            <div className="panel-index">{i + 1}</div>
                            <div className="panel-shot">{board.shotNumber}</div>
                            <img
                              className={board.id === preview.id && 'active'}
                              src={board.board}
                              alt=""
                            />
                            {/* <p>shot: {board.shotNumber}</p> */}
                          </div>
                        ))
                    )}

                    <section className="transport-panel-add">
                      <div onClick={() => setPreview(initPreviewState)}>
                        <i class="fas fa-plus "></i>
                      </div>
                    </section>
                  </div>

                  <div className="board-titles">Beat Boards</div>
                  <div className="transport-panels">
                    {viewer.beatBoards.map(
                      (board, i) =>
                        (activeShot.shot === board.shotNumber && (
                          <>
                            <div
                              onClick={() =>
                                setPreview({
                                  image: board.board,
                                  sceneName: viewer.sceneName,
                                  panel: i + 1,
                                  shotNumber: board.shotNumber,
                                  id: board.id,
                                })
                              }
                              className="transport-panel"
                            >
                              <div className="transport-label">
                                {board.panel}
                              </div>
                              <div className="panel-index">{i + 1}</div>
                              <div className="panel-shot">
                                {board.shotNumber}
                              </div>
                              <img
                                className={board.id === preview.id && 'active'}
                                src={board.board}
                                alt=""
                              />
                              {/* <p>shot: {board.shotNumber}</p> */}
                            </div>
                          </>
                        )) ||
                        (activeShot === '' && (
                          <div
                            onClick={() =>
                              setPreview({
                                image: board.board,
                                sceneName: viewer.sceneName,
                                panel: i + 1,
                                shotNumber: board.shotNumber,
                                id: board.id,
                              })
                            }
                            className="transport-panel"
                          >
                            <div className="transport-label">{board.panel}</div>
                            <div className="panel-index">{i + 1}</div>
                            <div className="panel-shot">{board.shotNumber}</div>
                            <img
                              className={board.id === preview.id && 'active'}
                              src={board.board}
                              alt=""
                            />
                            {/* <p>shot: {board.shotNumber}</p> */}
                          </div>
                        ))
                    )}

                    <section className="transport-panel-add">
                      <div onClick={() => setPreview(initPreviewState)}>
                        <i class="fas fa-plus "></i>
                      </div>
                    </section>
                  </div>

                  <div className="board-titles">Scene Boards</div>
                  <div className="transport-panels">
                    {viewer.storyBoards.map(
                      (board, i) =>
                        (activeShot.shot === board.shotNumber && (
                          <>
                            <div
                              onClick={() =>
                                setPreview({
                                  image: board.board,
                                  sceneName: viewer.sceneName,
                                  panel: i + 1,
                                  shotNumber: board.shotNumber,
                                  id: board.id,
                                })
                              }
                              className="transport-panel"
                            >
                              <div className="transport-label">
                                {board.panel}
                              </div>
                              <div className="panel-index">{i + 1}</div>
                              <div className="panel-shot">
                                {board.shotNumber}
                              </div>
                              <img
                                className={board.id === preview.id && 'active'}
                                src={board.board}
                                alt=""
                              />
                              {/* <p>shot: {board.shotNumber}</p> */}
                            </div>
                          </>
                        )) ||
                        (activeShot === '' && (
                          <div
                            onClick={() =>
                              setPreview({
                                image: board.board,
                                sceneName: viewer.sceneName,
                                panel: i + 1,
                                shotNumber: board.shotNumber,
                                id: board.id,
                              })
                            }
                            className="transport-panel"
                          >
                            <div className="transport-label">{board.panel}</div>
                            <div className="panel-index">{i + 1}</div>
                            <div className="panel-shot">{board.shotNumber}</div>
                            <img
                              className={board.id === preview.id && 'active'}
                              src={board.board}
                              alt=""
                            />
                            {/* <p>shot: {board.shotNumber}</p> */}
                          </div>
                        ))
                    )}

                    <section className="transport-panel-add">
                      <div onClick={() => setPreview(initPreviewState)}>
                        <i class="fas fa-plus "></i>
                      </div>
                    </section>
                  </div>
                </div>
              )}
              {detail === 'panel details' && <div>panel details</div>}
              {detail === 'new scene' && (
                <>
                  <div className="new-scene-form">
                    <NewSceneForm />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SceneMachine = () => {
  const [scenes, setScenes] = useState(initialScenes);
  const [answer, setAnswer] = useState(false);
  const [buttons, setButtons] = useState(initialButtonState);
  const [detail, setDetail] = useState('overview');
  const [activeShot, setActiveShot] = useState('');
  const [viewer, setViewer] = useState(initialViewerState);
  const [preview, setPreview] = useState(initPreviewState);
  const [background, setBackground] = useState('rgb(218, 214, 208)');
  const [state, dispatch] = useReducer(reducer, { edit: false });
  const userContext = useContext(Context);

  const Style = ({ background }) => (
    <style jsx>{`
      #scene-machine-container {
        height: 100%;
        width: 100%;
      }
  
      .scene-machine {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: rgba(89, 119, 131, 0.7);
        padding: 10px 40px;
        padding-bottom: 30px;
        width: 100%;
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        box-shadow: inset 0 0px 10px, inset 0 0 15px, inset 0 0 5px,
          0 20px 500px 800px rgba(180, 171, 155, 0.4), 0 0 20px rgb(39, 44, 29);
      }
  
      .scene-overview {
        height: 100%;
        overflow: scroll;
        background: rgba(46, 35, 35, 0.6);
        margin-bottom: 10px;
        width: 100%;
  
        display: flex;
        border: solid 1px rgb(22, 19, 19);
        border-radius: 10px;
        box-shadow: inset 0 0px 10px, 0 0 4px;
      }
  
      .add {
        cursor: pointer;
        color: #2f3c41;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        padding: 10px 0;
        border: none;
      }
  
      // #scene-machine > div > div {
      //   padding: 0 10px;
      // }
  
      // #scene {
      //   padding: 0px 30px;
      //   border-right: solid 1px;
      // }
  
      @media (max-width: 800px) {
        .scene-overview {
          flex-direction: column;
          // height: 100%;
        }
  
        .left-panel {
          width: 100%;
        }
        .right-panel {
          width: 100%;
        }
        .scene-overview-right-container > div {
          max-height: 300px;
        }
      }
    `}</style>
  );

  /* NOTES:

  -permistions page (groups and peoples names)

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

  /* 

  Steps to creating
  1. Create a field. 
    This is where we set up what the whole thing is about. It can start with a blurb but it will build into concept art, story ideas and bios and eventually projects in the scene machine. 

  2. Create a project.
    This will be like a movie or a series or a commercial. We can designate if it's funded or not. If artists will be paid for work basically or if it's a community project. We have to figure out a liscencing agreement for that. It financially would belong partially at least to the contributers. We will put concept art, script and beatboards here.
  3. Create a Reel
    This will be made up of scenes in a timeline. Assets and backgrounds will live here. 
   */

  // make a form where they initalize or 'Launch' the scene. A 'Scene Launcher'.
  useEffect(() => {
    if (answer) {
      dispatch({ type: 'CONFIRM', payload: '' });
      dispatch({
        type: 'CHECKOUT',
        payload: { shot: activeShot, user: userContext.state.user },
      });
    } else if (!answer) {
      dispatch({ type: 'CONFIRM', payload: '' });
    }
  }, [answer, state && state.confirm === 'checkout']);

  useEffect(() => {
    if (answer) {
      dispatch({ type: 'CONFIRM', payload: '' });
      dispatch({
        type: 'CANCEL_NEW_SCENE',
        payload: true
      });
    } else if (!answer) {
      dispatch({ type: 'CONFIRM', payload: '' });
    }
  }, [answer, state && state.confirm === 'Cancel New Scene']);

  // console logs
  useEffect(() => {
    console.log('answer', answer);
    console.log('state', state);
  });

  // const handleCheckout = async (answer) => {
  //   dispatch({ type: 'CONFIRM', payload: 'Checkout scene' });
  //   const answer1 = await getAnswer(answer);
  //   if (answer1) {
  //     dispatch({ type: 'CONFIRM', payload: '' });
  //     dispatch({
  //       type: 'CHECKOUT',
  //       payload: { shot: activeShot, user: userContext.state.user },
  //     });
  //   }
  // };

  // const getAnswer = (answer) => {
  //   // dispatch({ type: 'CONFIRM', payload: 'Confirm' });

  //   new Promise((res) => {
  //     const giveAnswer = (answer) => res(answer);
  //     setAnswer('');

  //     return (
  //       <>
  //         <div className="btn-mini" onClick={() => giveAnswer(false)}>
  //           <i class="fas fa-times"></i>
  //         </div>
  //         <div className="btn-mini" onClick={() => giveAnswer(true)}>
  //           <i class="fas fa-check"></i>
  //         </div>
  //         <div>{state.confirm}?</div>
  //       </>
  //     );
  //     // return <Confirm giveAnswer={giveAnswer} />;
  //   });
  // };

  // const Confirm = ({ giveAnswer }) => {
  //   return (
  //     <>
  //       <div className="btn-mini" onClick={() => giveAnswer(false)}>
  //         <i class="fas fa-times"></i>
  //       </div>
  //       <div className="btn-mini" onClick={() => giveAnswer(true)}>
  //         <i class="fas fa-check"></i>
  //       </div>
  //       <div>{state.confirm}?</div>
  //     </>
  //   );
  // };

  // const confirmAnswer = async () => {
  //   dispatch({ type: 'CONFIRM', payload: 'Confirm' });
  //   await setAnswer(true)
  // }

  const handleViewer = (e, scene) => {
    e.preventDefault();
    // TODO: find way to set scroll to top of scene overview display
    setPreview({
      image: scene.stripImage,
      // image: scene.storyBoards[0].board,
      sceneName: scene.sceneName,
      panel: 'Cover',
      id: 0,
      // id: scene.storyBoards[0].panel,
    });
    setDetail('overview');
    setBackground('rgb(218, 214, 208)');
    setViewer(scene);
  };

  return (
    <>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <Style background={background} />
      <div id="scene-machine-container" className="">
        <div id="scene-machine-location" className="scene-machine">
          <SceneMachineTitle buttons={buttons} setButtons={setButtons} />
          <SceneMachineStripArea
            viewer={viewer}
            setViewer={setViewer}
            scenes={scenes}
            setScenes={setScenes}
            detail={detail}
            setDetail={setDetail}
            handleViewer={handleViewer}
            setPreview={setPreview}
            setBackground={setBackground}
          />
          <SceneMachineControlPanel
            buttons={buttons}
            setButtons={setButtons}
            setAnswer={setAnswer}
            dispatch={dispatch}
            state={state}
            activeShot={activeShot}
            userContext={userContext}
          />
          <div className="scene-overview">
            <SceneMachineLeftPanel preview={preview} />
            <SceneMachineRightPanel
              scenes={scenes}
              setScenes={setScenes}
              detail={detail}
              setDetail={setDetail}
              viewer={viewer}
              background={background}
              setBackground={setBackground}
              state={state}
              activeShot={activeShot}
              setActiveShot={setActiveShot}
              dispatch={dispatch}
              userContext={userContext}
              preview={preview}
              setPreview={setPreview}
              setViewer={setViewer}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SceneMachine;


