import { useReducer, createContext, useState } from 'react';
import {
  initialViewerState,
  initialNewSceneForm,
  initPreviewState,
  initialScenes,
  field,
} from '../initialStates';
import { machineView } from '../dataModels';

// Select either Scene Machine or Asset Machine
export const TitleButtonContext = createContext();
export const TitleSetButtonContext = createContext();
export const TitleButtonProvider = ({ children }) => {
  const [machine, setMachine] = useState({
    machine: 'Scene',
  });

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

// Select any of 5 states in Scene Machine Mode
// currently set up with Reels, Acts, Sequences, Scenes, Panels
// possibly use Timeline, Scenes and other important views instead
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
  const [buttons, setButtons] = useState(initialButtonState);
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
  const [preview, setPreview] = useState(initPreviewState);

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
  const [viewer, setViewer] = useState(initialViewerState);
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

// contextual menu
export const MachineStateDispatchContext = createContext();
export const MachineStateStateContext = createContext();
export const MachineStateContext = ({ children }) => {
  const initialMachineStateReducerState = {
    confirm: false,
    machineState: 'view',
    checkedOutShot: {
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
    shotList: [],
    checkedInShot: false,
    confirmObj: {},
    scenes: [initialScenes],
  };

  const machineStateReducer = (state, [type, payload]) => {
    switch (type) {
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
      default:
        state;
    }
  };
  const [state, dispatch] = useReducer(
    machineStateReducer,
    initialMachineStateReducerState
  );

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
