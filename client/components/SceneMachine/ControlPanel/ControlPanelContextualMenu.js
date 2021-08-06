import { useContext } from 'react';
import {
  DetailViewContext,
  MachineStateDispatchContext,
  MachineStateStateContext,
} from '../../../contexts/SceneMachineProviders';
import { detailView, machineView } from '../../../dataModels';

const ControlPanelContextualMenu = () => {
  const dispatch = useContext(MachineStateDispatchContext);
  const state = useContext(MachineStateStateContext);
  const detail = useContext(DetailViewContext);

  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch([e.target.id, state.confirmObj]);
  };

  return (
    <div className="control-panel-other">
      {state?.confirm && (
        <>
          <div id="CONFIRM_CANCEL" className="btn-mini" onClick={handleConfirm}>
            <i className="fas fa-times"></i>
          </div>
          <div
            className="btn-mini"
            id="CONFIRM_YES"
            // onClick={() => handleConfirm('CONFIRM_YES', state.confirmObj)}
            onClick={handleConfirm}>
            <i className="fas fa-check"></i>
          </div>
          <div>{state.confirmObj.confirmName}?</div>
        </>
      )}

      {detail === detailView.overview && (
        <>
          {false && ( // make boolean that reads project file to reverse changes
            <>
              <div className="btn-mini">
                <i class="fas fa-redo-alt"></i>
              </div>
              <div className="btn-mini">
                <i class="fas fa-undo-alt"></i>
              </div>
            </>
          )}

          <div className="btn-mini">
            <i class="fas fa-photo-video"></i>
          </div>
          <div className="btn-mini">
            <i class="fas fa-file-export"></i>
          </div>
          <div className="btn-mini">
            <i class="fas fa-info-circle"></i>
          </div>
          <div className="btn-mini">
            <i class="far fa-save"></i>
          </div>
        </>
      )}

      {detail === detailView.script && (
        <>
          {false && ( // make boolean that reads project file to reverse changes
            <>
              <div className="btn-mini">
                <i class="fas fa-redo-alt"></i>
              </div>
              <div className="btn-mini">
                <i class="fas fa-undo-alt"></i>
              </div>
            </>
          )}

          <div className="btn-mini">
            <i class="fas fa-pager"></i>
          </div>
          {/* <div className="btn-mini">
            <i class="fas fa-photo-video"></i>
          </div> */}
          <div className="btn-mini">
            <i class="fas fa-file-export"></i>
          </div>
          <div className="btn-mini">
            <i class="fas fa-info-circle"></i>
          </div>
          <div className="btn-mini">
            <i class="far fa-save"></i>
          </div>
        </>
      )}

      {detail === detailView.breakdown && (
        <>
          {false && ( // make boolean that reads project file to reverse changes
            <>
              <div className="btn-mini">
                <i class="fas fa-redo-alt"></i>
              </div>
              <div className="btn-mini">
                <i class="fas fa-undo-alt"></i>
              </div>
            </>
          )}

          {/* <div className="btn-mini">
            <i class="fas fa-pager"></i>
          </div> */}
          {/* <div className="btn-mini">
            <i class="fas fa-photo-video"></i>
          </div> */}
          {/* <div className="btn-mini">
            <i class="fas fa-file-export"></i>
          </div> */}
          <div className="btn-mini">
            <i class="fas fa-info-circle"></i>
          </div>
          <div className="btn-mini">
            <i class="far fa-save"></i>
          </div>
        </>
      )}

      {detail === detailView.video && (
        <>
          {state.machineState == 'edit' && ( // make boolean that reads project file to reverse changes
            <>
              <div className="btn-mini">
                <i class="fas fa-redo-alt"></i>
              </div>
              <div className="btn-mini">
                <i class="fas fa-undo-alt"></i>
              </div>
            </>
          )}

          <div className="btn-mini">
            <i class="fas fa-photo-video"></i>
          </div>
          <div className="btn-mini">
            <i class="fas fa-file-export"></i>
          </div>
          <div className="btn-mini">
            <i class="fas fa-info-circle"></i>
          </div>
          <div className="btn-mini">
            <i class="far fa-save"></i>
          </div>
        </>
      )}
    </div>
  );
};

export default ControlPanelContextualMenu;
