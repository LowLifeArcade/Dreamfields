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
} from '../../../contexts/SceneMachineProviders';
import StripStyle from './StripAreaStyle';
import { initialScenes } from '../../../initialStates';
import { machineView } from '../../../dataModels';
import axios from 'axios';

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

  useEffect(() => {
    // get scenes from database
    console.log('PROJECT ID', project._id);
    // dispatch(['FETCH_SCENES', project._id]);
    const fetchScenes = async (store, payload) => {
      const { data } = await axios.get(`/api/field/${payload}/scenes`);
      console.log('scenes', data);
      const scenes = await [...data];
      
      const stripScenes = await state.scenes?.map((scene) => ({
        id: scene._id,
        sceneName: scene.sceneName,
        stripImage: scene.stripImage,
      }));
      
      await setScenes(stripScenes);
      console.log('SCENES IN STRIP AREA', scenes);
    };
    fetchScenes();
  }, []);

  const handleViewer = (e, scene) => {
    e.preventDefault();
    // TODO: find way to set scroll to top of scene overview display
    setPreview((preview) => ({
      ...preview,
      image: scene.stripImage,
      sceneName: scene.sceneName,
      type: 'default',
      panel: 'Cover',
      id: 0,
    }));
    setViewer(scene);
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
    // setPreview({
    //   image: '/cork.jpeg',
    //   panel: 0,
    //   id: 0,
    // });
  };
  return (
    <>
      <StripStyle />
      <div className="section-strip-container">
        <div id="act1" className="scenes-section-strip">
          {
            <>
              {buttons.display === machineView.view4.name &&
                scenes?.map((scene) => (
                  <>
                    <div
                      key={scene.id}
                      onClick={(e) => handleViewer(e, scene)}
                      className="scene-strip">
                      <div className="empty-strip">
                        {scene.stripImage ? (
                          <img
                            style={{ opacity: loaded ? 1 : 0 }}
                            className={
                              'scene-strip-img ' + scene.id === viewer.id &&
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
                              'scene-strip-img ' + scene.id === viewer.id &&
                              ' active'
                            }
                            src="https://picsum.photos/id/237/400/200"
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
