import { initialNewSceneForm } from "../../../../initialStates";

const TransportControls = ({
  detail,
  setDetail,
  state,
  activeShot,
  setActiveShot,
  dispatch,
  preview,
  userContext,
  view,
}) => {


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
    setDetail(view.overview);
  };

  return (
    <div className="transport">
      {/* this should download all coresponding data like concept art. Maybe */}
      <div className="transport-left-controls">
        {detail != view.newScene && (
          <>
            <button
              className={`btn-small ${
                detail === view.overview ? 'active' : ''
              }`}
              onClick={() => setDetail(view.overview)}>
              Overview
            </button>
            <button
              className={`btn-small ${detail === view.script ? 'active' : ''}`}
              onClick={() => setDetail(view.script)}>
              Script
            </button>
            <button
              className={`btn-small ${
                detail === view.background ? 'active' : ''
              }`}
              onClick={() => setDetail(view.breakdown)}>
              Breakdowns
            </button>
            <button
              className={`btn-small ${detail === view.boards ? 'active' : ''}`}
              onClick={() => setDetail(view.boards)}>
              Boards
            </button>
            <button
              className={`btn-small ${detail === view.video ? 'active' : ''}`}
              onClick={() => setDetail(view.video)}>
              Video
            </button>
          </>
        )}
      </div>
      <div className="transport-center-controls">
        {/* <button>&lArr;</button> */}
        <button className={`btn-small ${detail === view.none ? 'active' : ''}`}>
          &larr;
        </button>
        <button className={`btn-small ${detail === view.main ? 'active' : ''}`}>
          Main
        </button>
        <button className={`btn-small ${detail === view.none ? 'active' : ''}`}>
          &rarr;
        </button>
        {/* <button>&rArr;</button> */}
      </div>
      <div className="transport-right-controls">
        {detail === view.newScene && (
          <>
            <button
              onClick={handleCancel}
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              Cancel
            </button>
            <button
              onClick={handleAddScene}
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              AddScene
            </button>
          </>
        )}
        {detail === view.boards && preview.panel && (
          <>
            <button
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              Upload
            </button>
            <button
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              Download
            </button>
            <button
              onClick={() => setDetail('panel details')}
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              Details
            </button>
          </>
        )}
        {detail === view.boards && (
          <>
            <button
              onClick={() => setActiveShot('')}
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              SeeAll
            </button>
          </>
        )}
        {detail === view.breakdown && activeShot != '' && (
          <>
            <button
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              Notes
            </button>
            <button
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              Update
            </button>

            {state &&
            state.checkedOutShot &&
            activeShot.id === state.checkedOutShot.shot.id ? (
              <button
                className={`btn-small ${detail === view.none ? 'active' : ''}`}
                onClick={handleCheckin}>
                Checkin
              </button>
            ) : (
              <button
                className={`btn-small ${detail === view.none ? 'active' : ''}`}
                onClick={handleCheckout}>
                Checkout
              </button>
            )}
          </>
        )}
        {detail === view.overview && (
          <>
            <button
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              Backgrounds
            </button>
            <button
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              Assets
            </button>
            <button
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              ModelSheets
            </button>
          </>
        )}
        {detail === view.script && (
          <>
            <button
              className={`btn-small ${detail === view.none ? 'active' : ''}`}>
              Revisions
            </button>
            {state.machineState === view.edit ? (
              <button
                className={`btn-small ${detail === view.none ? 'active' : ''}`}
                onClick={() => dispatch(['SAVE_SCRIPT'])}>
                Save
              </button>
            ) : (
              <button
                className={`btn-small ${detail === view.none ? 'active' : ''}`}
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

export default TransportControls