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
} from '../../../contexts/SceneMachineProviders';
import StripStyle from './StripAreaStyle';
import { initialViewerState } from '../../../initialStates';
import { machineView } from '../../../dataModels';
import axios from 'axios';
import { detailView } from '../../../dataModels';

const SceneMachineStripArea = () => {
  const setPreview = useContext(PreviewProviderContext);
  const [scenes, setScenes] = useState(['']);
  const viewer = useContext(ViewerContext);
  const setViewer = useContext(SetViewerContext);
  const dispatch = useContext(MachineStateDispatchContext);
  const state = useContext(MachineStateStateContext);
  const buttons = useContext(ControlPanelButtonsContext);
  const [loaded, setLoaded] = useState(false);
  const project = useContext(ProjectContext);
  const setDetail = useContext(SetDetailViewContext);

  // useEffect(() => {
  //   handleLoadScenes()
  // }, [viewer]);


  // TODO: might need to fix this beahvior. It loads the scene and defaults to the overview, but I might not want that.
  useEffect(() => {
    project.scenes && project.scenes[0]
      ? loadViewerScene(project.scenes[0])
      : setViewer(initialViewerState);
    setDetail(project.scenes?.length === 0 ? detailView.newScene : detailView.overview);
    console.log('PROJECT IN STRIP AREA', project.scenes && project);
  }, [project]);

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
        id: scene._id,
        sceneName: scene.sceneName,
        stripImage: scene.stripImage,
      }));

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

  const handleViewer = (e, scene) => {
    e.preventDefault();
    // TODO: find way to set scroll to top of scene overview display
    setPreview((preview) => ({
      ...preview,
      image: scene.stripImage,
      sceneName: scene.sceneName,
      type: scene.stripImage ? 'image' : 'default',
      panel: 'Cover',
      id: scene.id,
    }));

    loadViewerScene(scene.id);

    dispatch(['RESET_VIEWER']); // not working yet
  };

  const handleNewScene = (e) => {
    e.preventDefault();
    // TODO: find way to set scroll to top of scene overview display
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
                      key={scene.id}
                      onClick={(e) => handleViewer(e, scene)}
                      className="scene-strip">
                      <div
                        className={`empty-strip ${
                          scene.id === viewer?._id && ' active'
                        }`}>
                        {scene.stripImage ? (
                          <img
                            style={{ opacity: loaded ? 1 : 0 }}
                            className={
                              'scene-strip-img ' + scene.id === viewer._id &&
                              ' active'
                            }
                            src={scene.stripImage}
                            alt="scene-thumbnail"
                            onLoad={() => setLoaded(true)}
                          />
                        ) : (
                          <img
                            style={{ opacity: loaded ? 1 : 0 }}
                            className={
                              'scene-strip-img ' + scene.id === viewer?.id &&
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
