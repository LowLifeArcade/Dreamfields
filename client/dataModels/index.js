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
  overview: 'overview',
  script: 'script',
  breakdown: 'breakdown',
  boards: 'boards',
  video: 'video',
};

export const bgPresets = {
  script: 'white',
  overview: 'rgb(218, 214, 208)',
  breakdown: 'rgb(218, 214, 208)',
  boards: 'rgb(59, 63, 63)',
  video: 'rgb(59, 63, 63)',
};

const store = {
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