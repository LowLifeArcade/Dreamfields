export const machineView = {
  view1: {name: 'Reels'},
  view2: {name: 'Acts'},
  view3: {name: 'Sequences'},
  view4: {name: 'Scenes'},
  view5: {name: 'Panels'},
}

export const detailView = {
  edit: 'edit',
  panelDetails: 'panel details',
  main: 'main',
  none: 'none',
  newScene: 'new scene',
  newShot: 'new shot',
  overview: 'overview',
  script: 'script',
  breakdown: 'breakdown',
  boards: 'boards',
  video: 'video',
  backgrounds: 'backgrounds',
  assets: 'assets',
  modelSheets: 'modelSheets',
  addScene: 'add scene',
  addShot: 'add shot'
};

export const shotLength = {
  short: 'short',
  medium: 'medium',
  long: 'long',
  oner: 'oner'
}

export const shotComplexity = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
  expert: 'expert',
}

export const shotFocal = {
  fish: 'fish eye',
  ultraWide: 'ultra wide',
  wide: 'wide',
  normal: 'normal',
  long: 'long',
  tele: 'telephoto'
}

export const shotAngle = {
  ground: 'ground',
  low: 'low',
  normal: 'normal',
  high: 'high',
}

export const shotFrame = {
  superCloseup: 'super closeup',
  closeup: 'closeup',
  medium: 'medium',
  wide: 'wide',
}

export const bgPresets = {
  script: 'white',
  overview: 'rgb(218, 214, 208)',
  breakdown: 'rgb(218, 214, 208)',
  boards: 'rgb(59, 63, 63)',
  video: 'rgb(59, 63, 63)',
};

export const store = {
  confirm: false, // move this to detail context
  machineState: 'view', // move this to detail context
  // project, // this will be the whole project
  checkedOutShot: { // this should be simply an update to the loaded project
    id: '',
    shot: '',
    complexity: '',
    assets: '',
    FX: '',
    characters: [],
    backgrounds: '',
    description: '',
    breakdown: '',
    preProdBoard: '',
    user: { name: '' },
  },
  shotList: [], // access to shot lists to the loaded project where you checked out the shot
  checkedInShot: false, //
  confirmObj: {}, // move this to detail context
  // scenes: [initialScenes],
};

export const production = {
  pre: 'Pre',
  boards: 'Boards',
  production: 'Production',
  post: 'Post'
}

export const frameRate = {
  true12: '12fps',
  sync24:'23.96fps',
  true24: '24fps',
  sync30:'29.97fps',
  true30: '30fps',
  sync60: '59.94fps',
  true60: '60fps'
}

export const aspectRatio = {
  SDTV: '4:3',
  HDTV: '16:9',
  cinema: '1.85:1',
  netflix: '2:1',
  cinemaScope: '2.35:1',
  anamorphic: '2.39:1',
  auteur: '2.76:1'

}