import { initialNewSceneForm } from '../../../../initialStates';
import {
  DetailViewContext,
  PreviewProviderContext,
  SetDetailViewContext,
  SetViewerContext,
} from '../../../../contexts/SceneMachineProviders';
import { useContext } from 'react';
import { initialViewerState } from '../../../../initialStates';
import { detailView } from '../../../../dataModels';

// TODO: view should be global or at least where both contextual menu and transport menu can observe it

/**
 * 
 * @param {callback} setActiveShot is used only for setting to blank 
 * @returns {jsx}
 */
const TransportControls = ({
  state,
  activeShot,
  setActiveShot,
  dispatch,
  preview,
  userContext,
  view,
}) => {
  const detail = useContext(DetailViewContext);
  const setDetail = useContext(SetDetailViewContext);
  const setPreview = useContext(PreviewProviderContext);
  const setViewer = useContext(SetViewerContext);

  const handleCheckin = () => {
    setShowModal(true);
    dispatch([
      'CONFIRM',
      {
        confirmName: 'Checkin Shot',
        confirmKey: 'checkedInShot',
        confirmValue: {
          ...state.checkedOutShot,
        },
      },
    ]);
  };

  const handleCheckout = () => {
    // setShowModal(true);
    dispatch([
      'CONFIRM',
      {
        confirmName: 'Checkout Shot',
        confirmKey: 'checkedOutShot',
        confirmValue: {
          ...activeShot,
          user: userContext.state.user,
        },
      },
    ]);
  };

  const handleAddScene = () => {
    dispatch([
      'CONFIRM',
      {
        confirmName: 'Add New Scene',
        confirmKey: 'scenes',
        confirmValue: [...state.scenes, initialNewSceneForm],
      },
    ]);
  };

  const handleCancel = () => {
    // dispatch({ type: 'CONFIRM', payload: 'Cancel New Scene' });
    setPreview({
      image: '//unsplash.it/id/1/400/225',
      sceneName: 'Open',
      panel: '',
      id: '',
    });
    setViewer(initialViewerState);
    setDetail(detailView.overview);
  };

  return (
    <div className="transport">
      {/* this should download all coresponding data like concept art. Maybe */}
      <div className="transport-left-controls">
        {detail != detailView.newScene && (
          <>
            <button
              className={`btn-small ${
                detail === detailView.overview ? 'active' : ''
              }`}
              onClick={() => setDetail(detailView.overview)}>
              Overview
            </button>
            <button
              className={`btn-small ${
                detail === detailView.script ? 'active' : ''
              }`}
              onClick={() => setDetail(detailView.script)}>
              Script
            </button>
            <button
              className={`btn-small ${
                detail === detailView.breakdown ? 'active' : ''
              }`}
              onClick={() => setDetail(detailView.breakdown)}>
              Breakdowns
            </button>
            <button
              className={`btn-small ${
                detail === detailView.boards ? 'active' : ''
              }`}
              onClick={() => setDetail(detailView.boards)}>
              Boards
            </button>
            <button
              className={`btn-small ${
                detail === detailView.video ? 'active' : ''
              }`}
              onClick={() => setDetail(detailView.video)}>
              Video
            </button>
          </>
        )}
      </div>
      <div className="transport-center-controls">
        {/* <button>&lArr;</button> */}
        <button
          className={`btn-small ${detail === detailView.none ? 'active' : ''}`}>
          &larr;
        </button>
        <button
          className={`btn-small ${detail === detailView.main ? 'active' : ''}`}>
          Main
        </button>
        <button
          className={`btn-small ${detail === detailView.none ? 'active' : ''}`}>
          &rarr;
        </button>
        {/* <button>&rArr;</button> */}
      </div>
      <div className="transport-right-controls">
        {detail === detailView.newScene && (
          <>
            <button
              onClick={handleCancel}
              className={`btn-small ${
                detail === detailView.none ? 'active' : ''
              }`}>
              Cancel
            </button>
            <button
              onClick={handleAddScene}
              className={`btn-small ${
                detail === detailView.none ? 'active' : ''
              }`}>
              AddScene
            </button>
          </>
        )}
        {detail === detailView.boards && preview.panel && (
          <>
            <button
              className={`btn-small ${
                detail === detailView.none ? 'active' : ''
              }`}>
              Upload
            </button>
            <button
              className={`btn-small ${
                detail === detailView.none ? 'active' : ''
              }`}>
              Download
            </button>
            <button
              onClick={() => setDetail('panel details')}
              className={`btn-small ${
                detail === detailView.none ? 'active' : ''
              }`}>
              Details
            </button>
          </>
        )}
        {detail === detailView.boards && (
          <>
            <button
              onClick={() => setActiveShot('')}
              className={`btn-small ${
                detail === detailView.none ? 'active' : ''
              }`}>
              SeeAll
            </button>
          </>
        )}
        {detail === detailView.breakdown && activeShot != '' && (
          <>
            <button
              className={`btn-small ${
                detail === detailView.none ? 'active' : ''
              }`}>
              Notes
            </button>
            <button
              className={`btn-small ${
                detail === detailView.none ? 'active' : ''
              }`}>
              Update
            </button>

            {state &&
            state.checkedOutShot &&
            activeShot.id === state.checkedOutShot.shot.id ? (
              <button
                className={`btn-small ${
                  detail === detailView.none ? 'active' : ''
                }`}
                onClick={handleCheckin}>
                Checkin
              </button>
            ) : (
              <button
                className={`btn-small ${
                  detail === detailView.none ? 'active' : ''
                }`}
                onClick={handleCheckout}>
                Checkout
              </button>
            )}
          </>
        )}
        {detail === detailView.overview && (
          <>
            <button
              onClick={() => setDetail(detailView.backgrounds)}
              className={`btn-small ${
                detail === detailView.backgrounds ? 'active' : ''
              }`}>
              Backgrounds
            </button>
            <button
              onClick={() => setDetail(detailView.assets)}
              className={`btn-small ${
                detail === detailView.assets ? 'active' : ''
              }`}>
              Assets
            </button>
            <button
              onClick={() => setDetail(detailView.modelSheets)}
              className={`btn-small ${
                detail === detailView.modelSheets ? 'active' : ''
              }`}>
              ModelSheets
            </button>
          </>
        )}
        {detail === detailView.script && (
          <>
            <button
              className={`btn-small ${
                detail === detailView.none ? 'active' : ''
              }`}>
              Revisions
            </button>
            {state.machineState === detailView.edit ? (
              <button
                className={`btn-small ${
                  detail === detailView.none ? 'active' : ''
                }`}
                onClick={() => dispatch(['SAVE_SCRIPT'])}>
                Save
              </button>
            ) : (
              <button
                className={`btn-small ${
                  detail === detailView.none ? 'active' : ''
                }`}
                onClick={() => dispatch(['EDIT_SCRIPT'])}>
                Edit
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TransportControls;
