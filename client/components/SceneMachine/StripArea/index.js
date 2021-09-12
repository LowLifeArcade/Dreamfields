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
  SetProjectScenesContext,
  PreviewStateContext
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

const SceneMachineStripArea = ({ scene }) => {
  const setPreview = useContext(PreviewProviderContext);
  const preview = useContext(PreviewStateContext)
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
  const projectScenes = useContext(ProjectScenesContext);
  const setProjectScenes = useContext(SetProjectScenesContext);
  const [fullScenes, setFullScenes] = useState()

  useEffect(() => {
    if (projectScenes.length === []) return;
    const stripScenes = projectScenes.map((scene) => ({
      _id: scene._id,
      sceneName: scene.sceneName,
      image: scene.image?.smallImage?.Location,
      // stripImage: scene.stripImage,
    }));

    setScenes(stripScenes);
  }, [projectScenes]);

  useEffect(() => {
    if (scene === undefined) return;
    const stripScene = {
      _id: scene._id,
      sceneName: scene.sceneName,
      image: scene.image?.smallImage?.Location,
      // stripImage: scene.stripImage,
    };
    setPreview({ ...preview, ...stripScene });
    handleViewer(stripScene);
    // console.log('STRIP SCENE: ', scene);
  }, [scene]);

  // TODO: might need to fix this beahvior. It loads the scene and defaults to the overview, but I might not want that.
  useEffect(() => {
    // project.scenes && project.scenes[0]
    //   ? loadViewerScene(project.scenes[0])
    //   : setViewer(initialViewerState);
    if (project.scenes && project.scenes[0]) {
      loadViewerScene(project.scenes[0]);
      // setPreview({

      //   sceneName: project.scenes[0].sceneName,
      //   image: project.scenes[0].image?.smallImage?.Location,
      //   type: 'image'
      // })
    } else {
      setViewer(initialViewerState);
    }

    setDetail(
      project.scenes?.length === 0 ? detailView.newScene : detailView.overview
    );
    // console.log('PROJECT IN STRIP AREA', project.scenes && project);
  }, [project]);

  // console.log('SCENES: ', projectScenes);

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
      setFullScenes(scenes)

      const stripScenes = await scenes.map((scene) => ({
        _id: scene._id,
        sceneName: scene.sceneName,
        image: scene.image?.smallImage?.Location,
        // stripImage: scene.stripImage,
      }));

      // console.log('STRIP SCENES: ', stripScenes);

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
    await setPreview({
      sceneName: data.sceneName,
      image: data.image?.smallImage?.Location ?? "https://picsum.photos/id/212/500/250",
      type: 'image',
    });
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
      display: machineView.view1.name,
      button4: { active: false },
      button1: { active: true },
      button2: { active: false },
      button3: { active: false },
    });
    setPreview((preview) => ({
      ...preview,
      sceneName: 'New Scene',
      image: project.image?.Location,
      type: project.image?.Location ? 'image' : 'default',
      panel: 'Cover',
      id: 0,
    }));
    setDetail('new scene');
  };

  const handleDrag = (e, i) => {
    // e.preventDefault()
    e.dataTransfer.setData('index', i);
    // console.log('DRAG: ', i);
  }

  const updateSceneOrder = async (e, i) => {
    e.preventDefault();
    const sceneOrder = scenes.map((scene) => scene._id);
    // console.log('SCENE ORDER: ', sceneOrder);
    await axios.put(`/api/field/${project._id}/scenes`, { sceneOrder });
    // console.log('SCENE ORDER: ', sceneOrder);
  }

  const handleDrop = async (e, i) => {
    // e.preventDefault()
    // console.log('DROP: ', i);
    // e.preventDefault();
    const movingItemIndex = e.dataTransfer.getData('index');
    const targetItemIndex = i;
    let newScenes = [...scenes];
    let movingItem = newScenes[movingItemIndex];
    newScenes.splice(movingItemIndex, 1);
    newScenes.splice(targetItemIndex, 0, movingItem);
    setScenes(newScenes);
    // updateSceneOrder(newScenes);
    // const id = e.dataTransfer.getData('id');
    // const { data } = await axios.get(`/api/scene/${id}`);
    // const scene = await data;
    // const stripScene = {
    //   _id: scene._id,
    //   sceneName: scene.sceneName,
    //   image: scene.image?.smallImage?.Location,
    //   // stripImage: scene.stripImage,
    // };
    // setPreview({ ...preview, ...stripScene });
    // handleViewer(stripScene);
    // console.log('STRIP SCENE: ', scene);
  }

  return (
    <>
      <StripStyle />
      <div className="section-strip-container" >
        <div id="act1" onDragOver={e => e.preventDefault()} className="scenes-section-strip">
          {
            <>
              {buttons.display === machineView.view1.name &&
                scenes.map((scene, i) => (
                  <>
                    <div
                      draggable="true"
                      key={scene._id}
                      onClick={() => handleViewer(scene)}
                      onDragStart={(e) => handleDrag(e, i)}
                      // onDragEnd={(e) => handleDrop(e, i)}
                      onDrop={(e) => handleDrop(e, i)}
                      className="scene-strip">
                      <div
                        className={`empty-strip-area ${
                          scene._id === viewer?._id && ' active-strip-border'
                        }`}>
                        {scene.image ? (
                          <img
                            style={{ opacity: loaded ? 1 : 0 }}
                            className={
                              'scene-strip-img ' + scene._id === viewer._id &&
                              ' active-strip'
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
                              ' active-strip'
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
              {project.name && <div className="scene-strip">
                <div onClick={handleNewScene} className="empty-strip-area"></div>
                <div onClick={handleNewScene} className="scene-strip-add">
                  <div>
                    <i class="fas fa-plus "></i>
                  </div>
                </div>
              </div>}
            </>
          }
        </div>
      </div>
    </>
  );
};

export default SceneMachineStripArea;
