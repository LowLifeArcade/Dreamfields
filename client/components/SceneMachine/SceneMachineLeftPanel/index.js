import { useReducer, useContext, useEffect } from "react";
import { PreviewStyle } from "./PreviewStyle";
import { PreviewStateContext } from "../../../contexts/SceneMachineProviders";

const initPrevState = { previewState: 'idle', framePosition: 'idle' };
const previewReducer = (state, action) => {
  // playing state
  if (state.previewState == 'playing') {
    switch (action) {
      case 'PLAY':
        return { ...state, previewState: 'paused' };
      case 'STOP':
        return { ...state, previewState: 'stopped' };
      case 'PAUSE':
        return { ...state, previewState: 'paused' };
      case 'FORWARD':
        return { ...state, previewState: 'fast forward' };
      case 'BACKWARD':
        return { ...state, previewState: 'fast backward' };
      default:
        return state;
    }
  }
  // fast foward state
  if (state.previewState == 'fast forward') {
    switch (action) {
      case 'PLAY':
        return { ...state, previewState: 'playing' };
      case 'STOP':
        return { ...state, previewState: 'stopped' };
      case 'PAUSE':
        return { ...state, previewState: 'paused' };
      case 'BACKWARD':
        return { ...state, previewState: 'fast backward' };
      default:
        return state;
    }
  }
  // fast backward state
  if (state.previewState == 'fast backward') {
    switch (action) {
      case 'PLAY':
        return { ...state, previewState: 'playing' };
      case 'STOP':
        return { ...state, previewState: 'stopped' };
      case 'PAUSE':
        return { ...state, previewState: 'paused' };
      case 'FORWARD':
        return { ...state, previewState: 'fast forward' };
      default:
        return state;
    }
  }

  // paused state
  if (state.previewState == 'paused') {
    switch (action) {
      case 'PLAY':
        return { ...state, previewState: 'playing' };
      // case 'PAUSE':
      //   return { ...state, previewState: 'playing' };
      case 'STOP':
        return { ...state, previewState: 'stopped' };
      case 'FORWARD':
        return { ...state, effect: 'frame forward' };
      case 'BACKWARD':
        return { ...state, effect: 'frame backward' };
      default:
        return state;
    }
  }

  // stopped state
  if (state.previewState == 'stopped' || state.previewState == 'idle') {
    switch (action) {
      case 'PLAY':
        return { ...state, previewState: 'playing', effect: 'synced' };
      case 'FORWARD':
        return { ...state, previewState: 'fast forward' };
      case 'BACKWARD':
        return { ...state, previewState: 'fast backward' };
      default:
        return state;
    }
  }

  return state;
  // // on
  // (state) => {
  //   return { ...state, effect: 'synced' };
  // };
};

const SceneMachineLeftPanel = () => {
  const [state, dispatch] = useReducer(previewReducer, initPrevState);
  const preview = useContext(PreviewStateContext);
  useEffect(() => {
    console.log('preview machine state', state);
  });
  
  return (
    <>
      <PreviewStyle />
      <div className="left-panel">
        <div className="viewer">
          <img src={preview.image} alt="" />
          {/* change to state */}
          <div className="btn-mini">
            <i class="fas fa-expand"></i>
          </div>
          <div className="preview-state">{state.previewState}</div>
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
          <button onClick={() => dispatch('BACKWARD')}>
            <i class="fas fa-chevron-left"></i>
          </button>
          <button onClick={() => dispatch('STOP')}>Stop</button>
          <button onClick={() => dispatch('PLAY')}>Play</button>
          <button onClick={() => dispatch('PAUSE')}>Pause</button>
          <button onClick={() => dispatch('FORWARD')}>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SceneMachineLeftPanel