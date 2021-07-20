import {useContext} from 'react'
import { MachineStateDispatchContext, MachineStateStateContext } from '../../../contexts/SceneMachineProviders';

const ControlPanelContextualMenu = () => {
  const dispatch = useContext(MachineStateDispatchContext);
  const state = useContext(MachineStateStateContext);
  
  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch([e.target.id, state.confirmObj]);
    // dispatch({ type: [action], payload: [payload] });
  };
  
  return (
    <div className="control-panel-other">
          {/* {state.confirm && <GetAnswer />} */}
          {state?.confirm && (
            <>
              <div
                id="CONFIRM_CANCEL"
                className="btn-mini"
                onClick={handleConfirm}>
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
          {/* {state && state.confirm === 'Checkout scene' && (
            <>
              <div
                className="btn-mini"
                onClick={() => {
                    dispatch({
                      type: 'CONFIRM',
                      payload: '',
                    });
                }}
              >
                <i class="fas fa-times"></i>
              </div>
              <div
                className="btn-mini"
                onClick={() => {
                    dispatch({
                      type: 'CHECKOUT',
                      payload: {
                        shot: activeShot,
                        user: userContext.state.user,
                      },
                    }),
                    dispatch({
                      type: 'CONFIRM',
                      payload: '',
                    });
                }}
              >
                <i class="fas fa-check"></i>
              </div>
              <div>{state.confirm}?</div>
            </>
          )} */}
          {/* {state && !state.confirm && (
            <>
              <div
                className="btn-mini"
                onClick={() => {
                  setShowModal(false),
                    dispatch({
                      type: 'CONFIRM',
                      payload: '',
                    });
                }}
              >
                <i class="fas fa-times"></i>
              </div>
              <div
                className="btn-mini"
                onClick={() => {
                  setShowModal(true),
                    dispatch({
                      type: 'CHECKIN',
                      payload: {
                        user: userContext.state.user,
                      },
                    }),
                    dispatch({
                      type: 'CONFIRM',
                      payload: '',
                    });
                }}
              >
                <i class="fas fa-check"></i>
              </div>
              <div>{state.confirm}?</div>
            </>
          )} */}
          {/* {state &&
            state.confirm === 'Add New Scene' && ( // CONFIRM with payload of '' closes everything
              <>
                <div
                  className="btn-mini"
                  onClick={() => {
                    setShowModal(false),
                      dispatch({
                        type: 'CONFIRM',
                        payload: '',
                      });
                  }}
                >
                  <i class="fas fa-times"></i>
                </div>
                <div
                  className="btn-mini"
                  onClick={() => {
                    setShowModal(true),
                      dispatch({
                        type: 'ADD_SCENE',
                        payload: {
                          scene: true,
                        },
                      }),
                      dispatch({
                        type: 'CONFIRM',
                        payload: '',
                      });
                  }}
                >
                  <i class="fas fa-check"></i>
                </div>
                <div>{state.confirm}?</div>
              </>
            )} */}
          {/* <div className="btn-mini">
                <i class="fas fa-pager"></i>
              </div> */}
          {!state?.confirm && (
            <>
              <div className="btn-mini">
                <i class="fas fa-redo-alt"></i>
              </div>
              <div className="btn-mini">
                <i class="fas fa-undo-alt"></i>
              </div>
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
  )
}

export default ControlPanelContextualMenu
