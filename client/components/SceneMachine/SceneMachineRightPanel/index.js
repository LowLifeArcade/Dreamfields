import { useContext, useState, useEffect, useLayoutEffect } from 'react';
import {
  ViewerContext,
  SetViewerContext,
  ModalContext,
  SetModalContext,
  PreviewStateContext,
  PreviewProviderContext,
  MachineStateDispatchContext,
  MachineStateStateContext,
} from '../../../contexts/SceneMachineProviders';
import { Context } from '../../../context';
import { SceneMachineRightPanelStyle } from './SceneMachineRightPanelStyle';
import NewSceneForm from '../NewSceneForm';
import RightPanelOverview from './RightPanelOverview';
import RightPanelScriptView from './RightPanelScriptView';
import RightPanelBreakdownView from './RightPanelBreakdownView';
import RightPanelBoardsView from './RightPanelBoardsView';
import RightPanelFrame from './RightPanelFrame';
import TransportControls from './TransportControls';

const view = {
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

const bgPresets = {
  script: 'white',
  overview: 'rgb(218, 214, 208)',
  breakdown: 'rgb(218, 214, 208)',
  boards: 'rgb(59, 63, 63)',
  video: 'rgb(59, 63, 63)',
};

const SceneMachineRightPanel = () => {
  const userContext = useContext(Context);
  const [activeShot, setActiveShot] = useState('');
  const [detail, setDetail] = useState(view.overview);
  const [background, setBackground] = useState(bgPresets.overview);
  const viewer = useContext(ViewerContext);
  const setViewer = useContext(SetViewerContext);
  const showModal = useContext(ModalContext);
  const setShowModal = useContext(SetModalContext);
  const preview = useContext(PreviewStateContext);
  const setPreview = useContext(PreviewProviderContext);
  const dispatch = useContext(MachineStateDispatchContext);
  const state = useContext(MachineStateStateContext);

  // useEffect(() => {
  //   setDetail(view.overview);
  //   dispatch(['RESET_VIEWER']); // not working yet
  // }, [viewer]);

  // handles backgrounds
  useLayoutEffect(() => {
    switch (detail) {
      case 'overview':
        setBackground(bgPresets.overview);
        break;
      case 'script':
        setBackground(bgPresets.script);
        break;
      case 'breakdown':
        setBackground(bgPresets.breakdown);
        break;
      case 'boards':
        setBackground(bgPresets.boards);
        break;
      case 'video':
        setBackground(bgPresets.video);
        break;
      default:
        break;
    }
  }, [detail]);

  useEffect(() => {
    preview.sceneName === 'New Scene' && setDetail(view.newScene);
  }, [preview]);

  // make a form where they initalize or 'Launch' the scene. A 'Scene Launcher'.
  useEffect(() => {
    if (showModal) {
      // dispatch({ type: 'CONFIRM', payload: '' });
      dispatch([
        'CHECKOUT',
        { shot: activeShot, user: userContext.state.user },
      ]);
    } else if (!showModal) {
      // dispatch({ type: 'CONFIRM', payload: '' });
    }
  }, [showModal, state && state.confirm === 'checkout']);

  useEffect(() => {
    if (showModal) {
      // dispatch({ type: 'CONFIRM', payload: '' });
      dispatch(['CANCEL_NEW_SCENE', true]);
    } else if (!showModal) {
      // dispatch({ type: 'CONFIRM', payload: '' });
    }
  }, [showModal, state && state.confirm === 'Cancel New Scene']);

  return (
    <>
      <SceneMachineRightPanelStyle background={background} />

      <RightPanelFrame>
        <TransportControls
          detail={detail}
          setDetail={setDetail}
          state={state}
          dispatch={dispatch}
          activeShot={activeShot}
          setActiveShot={setActiveShot}
          preview={preview}
          userContext={userContext}
          view={view}
        />

        <div className="transport-overview">
          {detail === view.overview && 
          <RightPanelOverview viewer={viewer} />}

          {detail === view.script && (
            <RightPanelScriptView
              state={state}
              viewer={viewer}
              view={view}
              setViewer={setViewer}
            />
          )}

          {detail === view.breakdown && (
            <RightPanelBreakdownView
              state={state}
              userContext={userContext}
              viewer={viewer}
              activeShot={activeShot}
              setActiveShot={setActiveShot}
            />
          )}

          {detail === view.boards && (
            <RightPanelBoardsView
              activeShot={activeShot}
              viewer={viewer}
              setPreview={setPreview}
              preview={preview}
            />
          )}

          {detail === view.panelDetails && <div>panel details</div>}

          {detail === view.newScene && <NewSceneForm />}
        </div>
      </RightPanelFrame>
    </>
  );
};

export default SceneMachineRightPanel;
