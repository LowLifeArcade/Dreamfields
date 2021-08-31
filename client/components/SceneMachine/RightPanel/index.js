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
  BoardsContext,
  SetBoardsContext,
  ShotsContext,
  SetShotsContext,

} from '../../../contexts/SceneMachineProviders';
import { Context } from '../../../context';
import { SceneMachineRightPanelStyle } from './SceneMachineRightPanelStyle';
import NewSceneForm from '../MachineForms/newSceneForm';
import NewShotForm from '../MachineForms/newShotForm';
import NewBoardForm from '../MachineForms/newBoardForm';
import RightPanelOverview from './Overview';
import RightPanelScriptView from './ScriptView';
import RightPanelBreakdownView from './BreakdownView';
import RightPanelBoardsView from './BoardsView';
import RightPanelFrame from './PanelFrame';
import VideoView from './VideoView';
import TransportControls from './TransportControls';
import { detailView as view, bgPresets } from '../../../dataModels';
import axios from 'axios';

const SceneMachineRightPanel = ({setScene, scene}) => {
  const userContext = useContext(Context);
  const [activeShot, setActiveShot] = useState('');
  const [scenes, setScenes] = useState();
  const detail = useContext(DetailViewContext);
  const setDetail = useContext(SetDetailViewContext);
  const [background, setBackground] = useState(bgPresets.overview);
  const viewer = useContext(ViewerContext);
  const showModal = useContext(ModalContext);
  const setShowModal = useContext(SetModalContext);
  const preview = useContext(PreviewStateContext);
  const boards = useContext(BoardsContext);
  const getBoards = useContext(SetBoardsContext);
  const shots = useContext(ShotsContext);
  const getShots = useContext(SetShotsContext);
  const project = useContext(ProjectContext);

  
  /**
   * `preview` = {
   * - name: string,
   * - image: string,
   * - description: string,
   * - id: string,
   * - image: string,
   * - panel: string,
   * - sceneName: string,
   * - type: string, // enum ["image", "video"]
   * - }
   *
   */
  const setPreview = useContext(PreviewProviderContext);
  const dispatch = useContext(MachineStateDispatchContext);
  const state = useContext(MachineStateStateContext);

  // useEffect(() => {
  //  console.log('PREVIEW IN RIGHT PANEL', preview)
  // });
  // const things = {
  // id: "610c720d638f5a9ac6f3c384",
  // image: "",
  // panel: 9,
  // sceneName: "Tester",
  // shotNumber: "9",
  // type: "video",
  // }

  // console.log('viewer in right panel',viewer)
  // useEffect(() => {
  //   setDetail(view.overview);
  //   dispatch(['RESET_VIEWER']); // not working yet
  // }, [viewer]);

  // handles backgrounds
  useLayoutEffect(() => {
    switch (detail) {
      case view.overview:
        setBackground(bgPresets.overview);
        break;
      case view.script:
        setBackground(bgPresets.script);
        break;
      case view.breakdown:
        if (shots.length === 0) setDetail(view.newShot);
        setBackground(bgPresets.breakdown);
        break;
      case view.boards:
        // if(boards.length === 0 && shots.length === 0) setDetail(view.breakdown)
        if (boards.length === 0) setDetail(view.addBoard);
        setBackground(bgPresets.boards);
        break;
      case view.video:
        setBackground(bgPresets.video);
        break;
      case view.addBoard:
        setBackground(bgPresets.overview);
        break;
      // case view.addBoard:
      //   if (shots.length === 0) setDetail(view.newShot);
      //   break;
      default:
        break;
    }
  }, [detail]);

  // useEffect(() => {
  //   if (detail === view.boards && boards.length === 0) setDetail(view.addBoard);
  // }, [boards]);

  useEffect(() => {
   console.log('shots in right panel', project)
  });
  

  const getScenes = async () => {
    const { data } = await axios.get(`/api/field/${project._id}/scenes`);
    const scenes = await [...data];
    setScenes(scenes);
  };

  useEffect(() => {
    getScenes()
    // viewer.scenes?.length != 0 && setDetail(view.overview);
    viewer._id && getShots(viewer._id);
    viewer._id && getBoards(viewer._id);
  }, [viewer]);

  useEffect(() => {
    setPreview({
      image: project.image?.Location,
      type: 'image'
    })
  }, [project])

  useEffect(() => {
    scenes?.length != 0 && setDetail(view.overview);
    scenes?.length === 0 && setDetail(view.newScene);
  }, [scenes]);

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

          {detail === view.overview && <RightPanelOverview setScene={setScene} scene={scene} viewer={viewer} />}

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
              setActiveShot={setActiveShot}
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

          {detail === view.newScene && <NewSceneForm setScene={setScene} />}
          {detail === view.newShot && <NewShotForm />}
          {detail === view.addBoard && <NewBoardForm />}
        </div>
        {/* </div> */}
      </RightPanelFrame>
    </>
  );
};

export default SceneMachineRightPanel;
