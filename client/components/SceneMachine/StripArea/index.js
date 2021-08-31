// /@ts-check
import { useState, useContext, useEffect } from 'react';
import {
  PreviewProviderContext,
  MachineStateDispatchContext,
  MachineStateStateContext,
  ViewerContext,
  SetViewerContext,
  ControlPanelButtonsContext,
  ProjectContext,
  SetDetailViewContext,
  ControlSetPanelButtonsContext,
  ProjectScenesContext,
  SetProjectScenesContext
} from '../../../contexts/SceneMachineProviders';
import StripStyle from './StripAreaStyle';
import { initialViewerState } from '../../../initialStates';
import { machineView } from '../../../dataModels';
import axios from 'axios';
import { detailView } from '../../../dataModels';

const App = () => {
  const [dragId, setDragId] = useState();
  const [boxes, setBoxes] = useState([
    {
      id: 'Box-1',
      color: 'red',
      order: 1,
    },
    {
      id: 'Box-2',
      color: 'green',
      order: 2,
    },
    {
      id: 'Box-3',
      color: 'blue',
      order: 3,
    },
  ]);

  const handleDrag = (e) => {
    setDragId(e.currentTarget.id);
  };

  const handleDrop = (e) => {
    const dragBox = boxes.find((box) => box.id === dragId);
    const dropBox = boxes.find((box) => box.id === e.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = boxes.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === e.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    setBoxes(newBoxState);
  };

  return (
    <div className="App">
      {boxes
        .sort((a, b) => a.order - b.order)
        .map((box) => (
          <div
            key={box.id}
            draggable={true}
            id={box.id}
            onDragOver={(e) => e.preventDefault()}
            onDragStart={handleDrag}
            onDrop={handleDrop}>
            {box.id}
          </div>
        ))}
    </div>
  );
};

const SceneMachineStripArea = ({scene}) => {
  const setPreview = useContext(PreviewProviderContext);
  const [scenes, setScenes] = useState(['']);
  const viewer = useContext(ViewerContext);
  const setViewer = useContext(SetViewerContext);
  const dispatch = useContext(MachineStateDispatchContext);
  const state = useContext(MachineStateStateContext);
  const buttons = useContext(ControlPanelButtonsContext);
  const setButtons = useContext(ControlSetPanelButtonsContext);
  const [loaded, setLoaded] = useState(false);
  const project = useContext(ProjectContext);
  const setDetail = useContext(SetDetailViewContext);
  const projectScenes = useContext(ProjectScenesContext)
  const setProjectScenes = useContext(SetProjectScenesContext)
 
  useEffect(() => {
    if (projectScenes.length === []) return
    const stripScenes = projectScenes.map((scene) => ({
      _id: scene._id,
      sceneName: scene.sceneName,
      image: scene.image?.smallImage?.Location,
      // stripImage: scene.stripImage,
    }));

     setScenes(stripScenes);
  }, [projectScenes]);

  useEffect(() => {
    if (scene === undefined) return
    const stripScene = {
      _id: scene._id,
      sceneName: scene.sceneName,
      image: scene.image?.smallImage?.Location,
      // stripImage: scene.stripImage,
    }
    handleViewer(stripScene)
    console.log('STRIP SCENE: ', scene)
  }, [scene]);

  // TODO: might need to fix this beahvior. It loads the scene and defaults to the overview, but I might not want that.
  useEffect(() => {
    project.scenes && project.scenes[0]
      ? loadViewerScene(project.scenes[0])
      : setViewer(initialViewerState);
    setDetail(
      project.scenes?.length === 0 ? detailView.newScene : detailView.overview
    );
    console.log('PROJECT IN STRIP AREA', project.scenes && project);
  }, [project]);

  console.log('SCENES: ', projectScenes)

  useEffect(() => {
    /**
     *
     * @returns {Array} An array of objects with the following properties:
     * - `id:` the id of the scene
     * - `sceneName:` the name of the scene
     * - `stripImage:` the url of the strip image
     */
    const handleLoadScenes = async () => {
      if (!project._id) return;
      const { data } = await axios.get(`/api/field/${project._id}/scenes`);
      const scenes = await [...data];
      // console.log('SCENES IN STRIP AREA', scenes);

      const stripScenes = await scenes.map((scene) => ({
        _id: scene._id,
        sceneName: scene.sceneName,
        image: scene.image?.smallImage?.Location,
        // stripImage: scene.stripImage,
      }));

      console.log('STRIP SCENES: ', stripScenes);

      await setScenes(stripScenes);
    };
    handleLoadScenes();
  }, [project, viewer]);

  // useEffect(() => {
  //   console.log('SCENES',scenes)
  // })

  const loadViewerScene = async (id) => {
    const { data } = await axios.get(`/api/scene/${id}`);
    await setViewer(data);
  };

  const handleViewer = (scene) => {
    // e.preventDefault();
    // TODO: find way to set scroll to top of scene overview display
    setPreview((preview) => ({
      ...preview,
      image: scene.image,
      sceneName: scene.sceneName,
      type: scene.image ? 'image' : 'default',
      panel: 'Cover',
      id: scene._id,
    }));

    loadViewerScene(scene._id);

    dispatch(['RESET_VIEWER']); // not working yet
  };

  const handleNewScene = (e) => {
    e.preventDefault();
    // TODO: find way to set scroll to top of scene overview display
    // buttons.display === machineView.view4.name
    setButtons({
      ...buttons,
      display: machineView.view4.name,
      button4: { active: true },
      button1: { active: false },
      button2: { active: false },
      button3: { active: false },
    });
    setPreview((preview) => ({
      ...preview,
      sceneName: 'New Scene',
      type: 'default',
      panel: 'Cover',
      id: 0,
    }));
    setDetail('new scene');
  };

  return (
    <>
      <StripStyle />
      <div className="section-strip-container">
        <div id="act1" className="scenes-section-strip">
          {
            <>
              {buttons.display === machineView.view4.name &&
                scenes.map((scene, i) => (
                  <>
                    <div
                      key={scene._id}
                      onClick={() => handleViewer(scene)}
                      className="scene-strip">
                      <div
                        className={`empty-strip ${
                          scene._id === viewer?._id && ' active'
                        }`}>
                        {scene.image ? (
                          <img
                            style={{ opacity: loaded ? 1 : 0 }}
                            className={
                              'scene-strip-img ' + scene._id === viewer._id &&
                              ' active'
                            }
                            src={scene.image}
                            alt="scene-thumbnail"
                            onLoad={() => setLoaded(true)}
                          />
                        ) : (
                          <img
                            style={{ opacity: loaded ? 1 : 0 }}
                            className={
                              'scene-strip-img ' + scene._id === viewer?.id &&
                              ' active'
                            }
                            src={`https://picsum.photos/id/1${i}/400/200`}
                            alt="scene-thumbnail"
                            onLoad={() => setLoaded(true)}
                          />
                        )}
                      </div>
                      <p>{scene.sceneName}</p>
                    </div>
                  </>
                ))}
              <div className="scene-strip">
                <div onClick={handleNewScene} className="empty-strip"></div>
                <div onClick={handleNewScene} className="scene-strip-add">
                  <div>
                    <i class="fas fa-plus "></i>
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default SceneMachineStripArea;
