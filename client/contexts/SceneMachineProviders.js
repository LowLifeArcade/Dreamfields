import { useReducer, createContext, useState, useEffect } from 'react';
import {
  initialViewerState,
  initPreviewState,
  initialScenes,
} from '../initialStates';
import { detailView, machineView } from '../dataModels';
import axios from 'axios';

// -------------------------
// Custom Hooks
// -------------------------

/**
 * `key` sets the item `state` returns the initial state of any key
 *
 * @param {string} key is the name of the local stroage item to set
 * @returns {Object} the value of the local storage item}
 */
const useStateAndLocalStorage = (key, initState) => {
  const [state, setState] = useState(initState);
  useEffect(() => {
    const value = localStorage.getItem(key);
    if (value) {
      setState(JSON.parse(value));
    }
  }, []);
  // useeffect that sets machine state in local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};
// const useReducerAndLocalStorage = (key, reducer, initState, initalizer) => {
//   const [localState, setLocalState] = useState(initState);
//   const [state, dispatch] = useReducer(reducer, localState, initalizer);

//   useEffect(() => {
//     const value = localStorage.getItem(key);
//     if (value) {
//       setLocalState(JSON.parse(value));
//     }
//   }, []);
//   // useeffect that sets machine state in local storage
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [state]);

//   return [state, dispatch];
// };



// ------------------------- 
// PROVIDERS
// -------------------------

export const TitleButtonContext = createContext();
export const TitleSetButtonContext = createContext();

/**
 *  Select either Scene Machine or Asset Machine
 * */
export const TitleButtonProvider = ({ children }) => {
  const [machine, setMachine] = useStateAndLocalStorage('titlebutton', {
    machine: 'Scene',
  });
  // uselocalstorage to set machine

  //   useEffect(() => {
  //     const machine = localStorage.getItem('titleButton');
  //     if (machine) {
  //       setMachine(JSON.parse(machine));
  //     }
  //   }, []);
  // // useeffect that sets machine state in local storage
  //   useEffect(() => {
  //     localStorage.setItem('titleButton', JSON.stringify(machine));
  //   }, [machine]);

  // useEffect is a hook that runs when the component is mounted and loads data from local storage

  // example
  // useEffect(() => {
  //   const data = localStorage.getItem('search-date');
  //   // console.log('data', data);
  //   if (data) {
  //     try {
  //       handleDateChange(JSON.parse(data));
  //     } catch (error) {
  //       setState({ ...state, error: error });
  //     }
  //   }
  // }, []);

  return (
    <>
      <TitleButtonContext.Provider value={machine}>
        <TitleSetButtonContext.Provider value={setMachine}>
          {children}
        </TitleSetButtonContext.Provider>
      </TitleButtonContext.Provider>
    </>
  );
};

/**
 * Select any of 5 states in Scene Machine Mode
 *
 * currently set up with Reels, Acts, Sequences, Scenes, Panels
 * possibly use Timeline, Scenes and other important views instead
 */

export const ControlPanelButtonsContext = createContext();
export const ControlSetPanelButtonsContext = createContext();
export const ControlPanelButtonsProvider = ({ children }) => {
  const initialButtonState = {
    machine: 'scene',
    display: machineView.view1.name,
    button1: { active: true },
    button2: { active: false },
    button3: { active: false },
    button4: { active: false },
    button5: { active: false },
  };
  const [buttons, setButtons] = useStateAndLocalStorage(
    'controlbuttons',
    initialButtonState
  );
  return (
    <>
      <ControlPanelButtonsContext.Provider value={buttons}>
        <ControlSetPanelButtonsContext.Provider value={setButtons}>
          {children}
        </ControlSetPanelButtonsContext.Provider>
      </ControlPanelButtonsContext.Provider>
    </>
  );
};

// Sets the preview window. Usefull for preview of any and all media
export const PreviewStateContext = createContext();
export const PreviewProviderContext = createContext();
export const PreviewContextProvider = ({ children }) => {
  const [preview, setPreview] = useStateAndLocalStorage(
    'preview',
    initPreviewState
  );

  return (
    <>
      <PreviewStateContext.Provider value={preview}>
        <PreviewProviderContext.Provider value={setPreview}>
          {children}
        </PreviewProviderContext.Provider>
      </PreviewStateContext.Provider>
    </>
  );
};

// sets the detail window (right panel) up with content. We need this to set up the preview window otherwise it just shows the thumbnail for the scene selected in the strip editor
export const ViewerContext = createContext();
export const SetViewerContext = createContext();
export const ViewerProvider = ({ children }) => {
  const [viewer, setViewer] = useStateAndLocalStorage(
    'viewer',
    initialViewerState
  );
  useEffect(() => {
    console.log('VIEWER PROVIDER', viewer)
   });
  return (
    <>
      <ViewerContext.Provider value={viewer}>
        <SetViewerContext.Provider value={setViewer}>
          {children}
        </SetViewerContext.Provider>
      </ViewerContext.Provider>
    </>
  );
};

export const DetailViewContext = createContext();
export const SetDetailViewContext = createContext();
export const DetailViewProvider = ({ children }) => {
  const [detail, setDetail] = useStateAndLocalStorage(
    'detail',
    detailView.overview
  );
  return (
    <>
      <DetailViewContext.Provider value={detail}>
        <SetDetailViewContext.Provider value={setDetail}>
          {children}
        </SetDetailViewContext.Provider>
      </DetailViewContext.Provider>
    </>
  );
};

// TODO: fix this so that it actually is based on state
/**`actions menu` for contextual menu AND transport menu for `machine state` */
export const MachineStateDispatchContext = createContext();
/** `Machine State` -   */
export const MachineStateStateContext = createContext();
export const MachineStateContext = ({ children }) => {
  // store should be project already loaded from
  const store = {
    confirm: false, // move this to detail context
    machineState: 'view',
    // project, // this will be the whole project
    shotList: [],
    checkedOutShot: {
      // this should be simply an update to the loaded project
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
    }, // access to shot lists to the loaded project where you checked out the shot
    checkedInShot: false, //
    confirmObj: {}, // move this to detail context
    scenes: [initialScenes],
  };

  const machineStateReducer = (state, [type, payload]) => {
    // if view is overview for instance we do can do the bellow switch statement
    switch (type) {
      case 'FETCH_SCENES': {
        let fetchedScenes = [];
        const fetchScenes = async (store, payload) => {
          const { data } = await axios.get(`/api/field/${payload}/scenes`);
          fetchedScenes = await data;
        };
        fetchScenes();
        return {
          ...state,
          scenes: [...fetchedScenes],
        };
      }
      case 'RESET_VIEWER': {
        return {
          ...state,
          machineState: 'view',
          detailWindow: 'overview',
        };
      }
      default:
        state;
    }
    // Make edit state section
    switch (type) {
      case 'EDIT_SCRIPT': {
        return {
          ...state,
          machineState: 'edit',
        };
      }
      case 'SAVE_SCRIPT': {
        return {
          ...state,
          machineState: 'view',
        };
      }
      case 'CHECKOUT': {
        return {
          ...state,
          checkedOutShot: {
            shot: payload.shot,
            user: payload.user,
          },
        };
      }
      case 'CHECKIN': {
        return {
          ...state,
          checkedOutShot: { shot: '', user: '' },
          checkedInShot: {
            shot: payload.shot,
            user: payload.user,
          },
        };
      }
      case 'CONFIRM': {
        return {
          ...state,
          confirm: true,
          confirmObj: payload,
        };
      }
      case 'CONFIRM_YES': {
        console.log('confirm yes payload', payload);
        return {
          ...state,
          confirm: false,
          confirmObj: {},
          [payload.confirmKey]: payload.confirmValue,
        };
      }
      case 'CONFIRM_CANCEL': {
        return {
          ...state,
          confirmObj: {},
          confirm: false,
        };
      }
      case 'ADD_SCENE': {
        return {
          ...state,
          addScene: payload.scene,
        };
      }
      case 'SAVE_VIDEO':
        return {
          ...state,
          contextMenu: 'view',
          machineState: 'view',
          videoEdit: false,
        };
      case 'EDIT_VIDEO':
        return {
          ...state,
          contextMenu: 'edit',
          machineState: 'edit',
          videoEdit: true,
        };

      default:
        state;
    }
  };

  const [state, dispatch] = useReducer(machineStateReducer, store);

  return (
    <>
      <MachineStateDispatchContext.Provider value={dispatch}>
        <MachineStateStateContext.Provider value={state}>
          {children}
        </MachineStateStateContext.Provider>
      </MachineStateDispatchContext.Provider>
    </>
  );
};

export const ModalContext = createContext();
export const SetModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ModalContext.Provider value={showModal}>
        <SetModalContext.Provider value={setShowModal}>
          {children}
        </SetModalContext.Provider>
      </ModalContext.Provider>
    </>
  );
};

/**`project` is the whole project (field with all the scenes and shots)*/
export const ProjectContext = createContext();
/**
 * `FETCH_PROJECT` - fetch project from server and set it to the project context. `Payload` should be the project slug.
 *
 * `LOAD_PROJECT` - load project with `payload` spread into projectState
 */
export const setProjectContext = createContext();

export const ProjectProvider = ({ children }) => {


  // const fetchData = async (slug) => {
  //   const { data } = await axios.get(`/api/field/${slug}`);
  //   console.log(data);
  //   return { ...data };
  // };

  // const loadViewerScene = async (id) => {
  //   const { data } = await axios.get(`/api/scene/${id}`);
  //   await setViewer(data);
  //  }

  const initialProject = {};

  const projectReducer = (state, [type, payload]) => {
    switch (type) {
      /**payload should be slug */
      // case 'FETCH_PROJECT':
      //   // localStorage.setItem('project', JSON.stringify(payload));
      //   return fetchData(payload);
        
      case 'LOAD_PROJECT':
        return { ...payload.data };
      // case 'FETCH_SCENE':
      //   loadViewerScene(payload);
      default:
        state;
    }
  };

  const [projectState, projectDispatch] = useReducer(
    projectReducer,
    initialProject
  );

  const loadFieldFromLocalStorage = async (slug) => {
    const { data } = await axios.get(`/api/field/${slug}`);
    await console.log('field from provider', data);
    await projectDispatch(['LOAD_PROJECT', {data, slug}])
  };
  useEffect(() => {
   const slug = localStorage.getItem('projectslug');
   if (slug) {
    loadFieldFromLocalStorage(JSON.parse(slug));
   }
  }, []);

  
  // const loadField = async () => {
  //   const { data } = await axios.get(`/api/field/${slug}`);
  //   // setField(data);
  //   dispatch(['LOAD_PROJECT', data])
  //   localStorage.setItem('projectslug', JSON.stringify(slug));
  // };

  return (
    <>
      <ProjectContext.Provider value={projectState}>
        <setProjectContext.Provider value={projectDispatch}>
          {children}
        </setProjectContext.Provider>
      </ProjectContext.Provider>
    </>
  );
};
