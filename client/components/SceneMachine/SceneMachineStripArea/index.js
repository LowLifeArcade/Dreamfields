import { useState, useContext, useEffect } from 'react';
import {
  PreviewProviderContext,
  MachineStateDispatchContext,
  ViewerContext,
  SetViewerContext,
} from '../../../contexts/SceneMachineProviders';
import SceneMachineStripStyle from './SceneMachineStripAreaStyle';
import { initialScenes } from '../../../initialStates';

const SceneMachineStripArea = () => {
  const setPreview = useContext(PreviewProviderContext);
  const [scenes, setScenes] = useState(['']);
  const viewer = useContext(ViewerContext);
  const setViewer = useContext(SetViewerContext);
  const dispatch = useContext(MachineStateDispatchContext);

  useEffect(() => {
    setScenes(initialScenes);
  }, []);

  const handleViewer = (e, scene) => {
    e.preventDefault();
    // TODO: find way to set scroll to top of scene overview display
    setPreview({
      image: scene.stripImage,
      sceneName: scene.sceneName,
      panel: 'Cover',
      id: 0,
    });
    setViewer(scene);
    dispatch(['RESET_VIEWER']); // not working yet
  };

  const handleNewScene = (e) => {
    e.preventDefault();
    // TODO: find way to set scroll to top of scene overview display
    setPreview({
      image: '/cork.jpeg',
      sceneName: 'New Scene',
      panel: 0,
      id: 0,
    });
  };
  return (
    <>
      <SceneMachineStripStyle />
      <div className="section-strip-container">
        <div id="act1" className="scenes-section-strip">
          {scenes.map((scene) => (
            <>
              <div
                key={scene.id}
                onClick={(e) => handleViewer(e, scene)}
                className="scene-strip">
                <img
                  className={scene.id === viewer.id && 'active'}
                  src={scene.stripImage}
                  alt=""
                />

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
          {/* <div className="scene-strip">

            <div className="empty-strip"></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SceneMachineStripArea;
