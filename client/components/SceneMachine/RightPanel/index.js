import { useContext, useState, useEffect, useLayoutEffect } from 'react';
import {
  ViewerContext,
  ModalContext,
  SetModalContext,
  PreviewStateContext,
  PreviewProviderContext,
  MachineStateDispatchContext,
  MachineStateStateContext,
  DetailViewContext,
  SetDetailViewContext,
  ProjectContext,
} from '../../../contexts/SceneMachineProviders';
import { Context } from '../../../context';
import { SceneMachineRightPanelStyle } from './SceneMachineRightPanelStyle';
import NewSceneForm from '../NewSceneForm';
import RightPanelOverview from './Overview';
import RightPanelScriptView from './ScriptView';
import RightPanelBreakdownView from './BreakdownView';
import RightPanelBoardsView from './BoardsView';
import RightPanelFrame from './PanelFrame';
import VideoView from './VideoView';
import TransportControls from './TransportControls';
import { detailView as view, bgPresets } from '../../../dataModels';

const SceneMachineRightPanel = () => {
  const userContext = useContext(Context);
  const [activeShot, setActiveShot] = useState('');
  const detail = useContext(DetailViewContext);
  const setDetail = useContext(SetDetailViewContext);
  const [background, setBackground] = useState(bgPresets.overview);
  const viewer = useContext(ViewerContext);
  const showModal = useContext(ModalContext);
  const setShowModal = useContext(SetModalContext);
  const preview = useContext(PreviewStateContext);
  const setPreview = useContext(PreviewProviderContext);
  const dispatch = useContext(MachineStateDispatchContext);
  const state = useContext(MachineStateStateContext);
  const project = useContext(ProjectContext);
  console.log('DETAIL RIGHT PANEL INDEX', detail);
  // console.log('viewer in right panel',viewer)
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

  // useEffect(() => {
  //   preview.sceneName === 'New Scene' && setDetail(view.newScene);
  // }, [preview]);

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
          state={state}
          dispatch={dispatch}
          activeShot={activeShot}
          setActiveShot={setActiveShot}
          preview={preview}
          userContext={userContext}
          view={view}
        />

        <div className="transport-overview">
          {/* <div className="transport-overview-frame"> */}

          {detail === view.overview && <RightPanelOverview viewer={viewer} />}

          {detail === view.script && (
            <RightPanelScriptView state={state} view={view} viewer={viewer} />
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

          {detail === view.video && (
            <VideoView
              setDetail={setDetail}
              viewer={viewer}
              activeShot={activeShot}
              viewer={viewer}
              setPreview={setPreview}
              preview={preview}
            />
          )}

          {detail === view.panelDetails && <div>panel details</div>}
          {detail === view.assets && <div>assets</div>}
          {detail === view.modelSheets && <div>model sheets</div>}
          {detail === view.backgrounds && <div>backgrounds</div>}

          {detail === view.newScene && <NewSceneForm />}
        </div>
        {/* </div> */}
      </RightPanelFrame>
    </>
  );
};

export default SceneMachineRightPanel;
