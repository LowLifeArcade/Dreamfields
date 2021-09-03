import { useState, useReducer, useContext, useEffect, useRef } from 'react';
import { PreviewStyle } from './PreviewStyle';
import { PreviewStateContext } from '../../../contexts/SceneMachineProviders';

const initPrevState = { previewState: 'idle', framePosition: 'idle' };
const previewReducer = (state, action) => {
  // playing state
  if (state.previewState == 'playing') {
    switch (action) {
      case 'PLAY':
        return { ...state, player: 'pause', previewState: 'paused' };
      case 'STOP':
        return { ...state, player: 'pause', previewState: 'stopped' };
      case 'PAUSE':
        return { ...state, player: 'pause', previewState: 'paused' };
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
        return { ...state, player: 'play', previewState: 'playing' };
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
        return {
          ...state,
          player: 'play',
          previewState: 'playing',
          effect: 'synced',
        };
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

// const Video = ({preview}) => (
//   <div>
//     <video  className="video" controls>
//       <source src={preview.video} type={`video/mp4`} />
//     </video>
//   </div>
// );

const SceneMachineLeftPanel = () => {
  const [state, dispatch] = useReducer(previewReducer, initPrevState);
  const [video, setVideo] = useState();
  const videoRef = useRef();
  const imgRef = useRef();
  const preview = useContext(PreviewStateContext);
  useEffect(() => {
    // setVideo(preview.video);
    videoRef.current?.load();
  }, [preview.video]);

  useEffect(() => {
    // console.log(state.player)
    // videoRef.current && videoRef.current[state?.player]();
  }, [state]);

  // get item at end of string by period
  const getItemAtEnd = (str, delim) => {
    const index = str?.lastIndexOf(delim);
    return str?.substr(index + 1);
  };

  const handleFullScreen = () => {
    if (imgRef.current.fullscreenElement) {
      imgRef.current?.exitFullscreen();
    } else {
      imgRef.current?.requestFullscreen();
    }

    // exit fullscreen
  };

  // `video/${getItemAtEnd(preview.video, '.')}`
  return (
    <>
      <PreviewStyle />
      <div className="left-panel">
        <div className="viewer-frame">
          <div className="viewer-media">
            {preview.type !== 'image' && preview.type !== 'video' && (
              <img
                className="media img"
                src="https://picsum.photos/id/212/500"
                alt=""
              />
            )}
            {preview.type === 'image' && (
              <img
                ref={imgRef}
                className="media img"
                onClick={handleFullScreen}
                src={preview.image}
                alt=""
              />
            )}
            {preview.type === 'video' && (
              <div>
                <video ref={videoRef} className="video" controls>
                  <source src={preview.video} type={`video/mp4`} />
                </video>
              </div>
            )}

            {/* <div className="expand">
              <i class="fas fa-expand"></i>
            </div> */}

            {/* <div className="preview-state">{state.previewState}</div> */}
          </div>
        </div>
        <div className="transport-title-container">

        <div className="transport-title">
          <div>
            <p>Panel:</p> {preview.panel || '0'}
          </div>
          <div>
            <p>Scene:</p> {preview.sceneName || '0'}
          </div>
          <div>
            <p>Shot:</p> {preview.shotNumber || '0'}
          </div>
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

export default SceneMachineLeftPanel;
