import { useEffect, useContext, useState, useRef } from 'react';
import {
  DetailViewContext,
  MachineStateDispatchContext,
  SetDetailViewContext,
  SetShotsContext,
} from '../../../contexts/SceneMachineProviders';
import {
  detailView,
  shotLength,
  shotComplexity,
  shotFrame,
  shotAngle,
  shotFocal,
} from '../../../dataModels';
import axios from 'axios';

const RightPanelBreakdownView = ({
  state,
  userContext,
  viewer,
  setActiveShot,
  activeShot,
}) => {
  const dispatch = useContext(MachineStateDispatchContext);
  const setDetail = useContext(SetDetailViewContext);
  const detail = useContext(DetailViewContext);
  const [shots, setShots] = useState();
  const [shotItem, setShotItem] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [deleteShot, setDeleteShot] = useState();
  const getShots = useContext(SetShotsContext)

  const shotKeys = {
    shotnumber: 'shot number',
    shotname: 'shot name',
    shotLength: shotLength.medium,
    shotComplexity: shotComplexity.medium,
    shotFrame: shotFrame.medium,
    shotAngle: shotAngle.normal,
    shotFocal: shotFocal.normal,
    forScene: '',
    complexity: shotComplexity.medium,
    characters: [],
    setting: '',
    description: '',
    breakdown: '',
    contributors: [],
  };

  useEffect(() => {
    setActiveShot('');
  }, [viewer]);

  const getCurrentShots = async (sceneId) => {
    try {
      const shots = await axios.get(`/api/shots/${sceneId}`);
      // console.log('SHOTS: ', shots.data);
      setShots(shots.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentShots(viewer._id);
    // console.log('SHOT ITEM UF ', shotItem);
  }, [shotItem, viewer]);

  /**
   *
   * @param {event} e event
   * @param {string} key
   */
  const handleShotItem = (e, key) => {
    e.preventDefault();
    setShotItem({ [key]: e.target.value });
  };

  const handleSelectItem = (e, key, shot) => {
    e.preventDefault();
    changeItem({ [key]: e.target.value }, shot._id, shot.forScene);
    setIsEditing(false);
  };

  const handleRemoveShot = async (e) => {
    e.preventDefault();
    try {
      const shot = await axios.delete(`/api/shot/${viewer._id}/${e.target.id}`);
      console.log('SHOTS: ', shot.data);
      await getCurrentShots(viewer._id);
      // await setShots(shot.data)
      await getShots(viewer._id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    // return
    const { _id } = viewer;
    const { forProject } = viewer;
    const { data } = await axios.delete(`/api/scene/${_id}/${forProject}`);
    // await setViewer(data);
    window.location.reload();

    console.log('RESPONSE SCENE', data);
  };

  const changeItem = async (shotItem, shotId, sceneId) => {
    try {
      const shots = await axios.post(
        `/api/shot/${shotId}/${viewer._id}`,
        shotItem
      );
      // const { data } = await axios.get(`/api/scene/${viewer._id}`);

      // await setViewer(data);
      // const shots = await axios.get(`/api/shots/${viewer._id}`);
      console.log('SHOTS: ', shots);
      setShots(shots.data);

      await setLoading(false);
    } catch (err) {
      setError(err);
      // setLoading(false);
    }
  };

  const changeArrayItem = async (shotArray, shotId) => {
    try {
      await axios.post(`/api/shot-array/${shotId}/${viewer._id}`, shotArray);
      const { data } = await axios.get(`/api/scene/${viewer._id}`);
      console.log('SUCCESS CHANGING ARRAY: ', data1);
      await setViewer(data);

      // await setLoading(false);
    } catch (err) {
      setError(err);
      // setLoading(false);
    }
  };

  const removeCharacter = (e, name, shot) => {
    const i = e.target.getAttribute('data-index');
    e.preventDefault();
    const list = [...shot[name]];
    list.splice(i, 1);
    console.log('REMOVE LIST ', list);
    setShotItem({ [name]: list });

    const objToSend = {
      arrayName: name,
      itemName: list,
    };
    setIsEditing(false);
    setShotItem('');
    changeArrayItem(objToSend, shot._id);
  };

  const exitEdit = (e, shotItem, shotId, forScene) => {
    if (e.key === 'Enter') {
      changeItem(shotItem, shotId, forScene);
      setIsEditing(false);
      // loadViewerScene(viewer._id);
      setShotItem('');
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setShotItem('');
    }
  };

  const exitArrayEdit = (e, key, objWithArray) => {
    if (e.key === 'Enter') {
      const objToSend = {
        arrayName: key,
        itemName: objWithArray[key].split(','),
      };
      console.log('ARRAY TO SEND', objToSend);

      // setSceneItem({ arrayName: [key], itemName: arrayValue });
      // console.log('ARRAY ITEM ON EXIT', sceneItem);
      changeArrayItem(objToSend);
      setIsEditing(false);
      // loadViewerScene(viewer._id);
      setSceneItem('');
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setSceneItem('');
    }
  };

  const handleAddBreakdown = () => {
    setDetail(detailView.newShot);
  };

  const handleCheckout = () => {
    // dispatch(['CHECKOUT']);
    console.log('user checking out shot');
    // setDetail(detailView.newShot);
  };

  // const exitEdit = (e, sceneItem) => {
  //   if (e.key === 'Enter') {
  //     changeItem(sceneItem);
  //     setIsEditing(false);
  //     // loadViewerScene(viewer._id);
  //     setSceneItem('');
  //   }
  //   if (e.key === 'Escape') {
  //     setIsEditing(false);
  //     setSceneItem('');
  //   }
  // };

  const addCharacter = (e, shot, key) => {
    e.preventDefault();
    if (shot.characters.includes(e.target.value)) {
      setIsEditing(false);
      return;
    }
    let currentCharacters;
    if (shot.characters.length !== 0) {
      currentCharacters = shot.characters.filter((c) => c !== e.target.value);
    } else {
      currentCharacters = shot.characters;
    }
    console.log('SHOT CHARACTERS: ', shot.characters);
    setShotItem({
      ...shotItem,
      characters: [...currentCharacters, e.target.value],
    });
    console.log('SHOT ITEM SPLIT', [...currentCharacters, e.target.value]);
    // console.log('SHOT ITEM SPLIT', shotItem[key] );
    const objToSend = {
      arrayName: key,
      itemName: [...currentCharacters, e.target.value],
    };
    console.log('ARRAY TO SEND', objToSend);

    // setSceneItem({ arrayName: [key], itemName: arrayValue });
    // console.log('ARRAY ITEM ON EXIT', sceneItem);
    changeArrayItem(objToSend, shot._id);
    setIsEditing(false);
    // loadViewerScene(viewer._id);
    setShotItem('');
  };

  const handleEditing = (e, editName, shot) => {
    e.preventDefault();
    const elm = e.target.getAttribute('data-index');
    const key = e.target.getAttribute('data-id');
    console.log('EL ', elm);
    if (isEditing === editName + elm) return;
    setShotItem({ [editName]: shot[editName] }); // viewer.characters for instance
    console.log('HANDLE EDITING', shotItem);
    // set focus on the input
    // console.log('EDITING: ', editName + elm);
    setIsEditing(editName + elm);
    // titleRef.current = el;
    // console.log('EL', el)

    // titleRef.current.focus()
  };

  const test = (e, sceneItem) => {
    const testId = e.target.getAttribute('data-index');
    console.log('TESTING: ', testId);
  };

  return (
    <div className="transport-breakdown">
      {shots?.map((shot, i) => (
        <div
          className={`transport-breakdown-shot ${
            state && state.checkedOutShot.id === shot.id && 'checked-out'
          } ${activeShot.id === shot.id && 'active'} ${
            state &&
            state.checkedOutShot.user.name != userContext.state.user.name &&
            'not-user'
          }`}
          onClick={() => setActiveShot(shot)}>
          <div className="breakdown-header">
            <h3>Shot {i + 1}: </h3>

            {isEditing === 'shotName' + `${shot._id}` ? (
              <input
                value={shotItem.shotName}
                // placeholder={viewer.setting}
                onChange={(e) => handleShotItem(e, 'shotName')}
                onKeyDown={(e) =>
                  exitEdit(e, shotItem, shot._id, shot.forScene)
                }
                onBlur={(e) => setIsEditing(false)}
                type="text"
              />
            ) : (
              <h3
                data-index={shot._id}
                onClick={(e) => handleEditing(e, 'shotName', shot)}>
                {shot.shotName}
              </h3>
            )}


            {isEditing === 'delete' + `${shot._id}` ? (
              <>
              <div className="delete-shot-section">
              <label htmlFor="delete">Type 'delete shot' to delete</label>
              <input
                type="text"
                value={deleteShot}
                onChange={(e) => setDeleteShot(e.target.value)}
                onBlur={(e) => {
                  setTimeout(() => {
                    setIsEditing(false)
                    setDeleteShot('')
                  }, 1000)
                }
                }
              /></div>
              <button disabled={deleteShot != 'delete shot'} id={shot._id} onClick={handleRemoveShot}>
              Confirm Delete
            </button>
            </>) : (
                <button id={shot._id} onClick={()=> setIsEditing('delete' + shot._id)}>
                Delete Shot
              </button>
            )
            }
            
            
          </div>

          <hr />

          {isEditing === 'description' + `${shot._id}` ? (
            <textarea
              // data-index={i}
              // ref={descRef}
              name="text"
              id=""
              cols="50"
              rows="10"
              value={shotItem.description}
              // placeholder={viewer.description}
              onChange={(e) => handleShotItem(e, 'description')}
              onKeyDown={(e) => exitEdit(e, shotItem, shot._id, shot.forScene)}
              onBlur={(e) => setIsEditing(false)}></textarea>
          ) : (
            <div
              data-index={shot._id}
              onClick={(e) => handleEditing(e, 'description', shot)}>
              {shot.description}
            </div>
          )}

          <div>
            {isEditing === 'complexity' + `${shot._id}` ? (
              <>
                <strong>Complexity: </strong>
                <select
                  value={shotItem.complexity}
                  onChange={(e) =>
                    handleSelectItem(e, 'complexity', shot, shotItem)
                  }>
                  {Object.values(shotComplexity).map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <span
                data-index={shot._id}
                onClick={(e) => handleEditing(e, 'complexity', shot)}>
                <strong>Complexity: </strong>
                {shot.complexity}
              </span>
            )}
            <br />
            {isEditing === 'shotLength' + `${shot._id}` ? (
              <>
                <strong>Shot Length: </strong>
                <select
                  value={shotItem.shotLength}
                  onChange={(e) =>
                    handleSelectItem(e, 'shotLength', shot, shotItem)
                  }>
                  {Object.values(shotLength).map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <span
                data-index={shot._id}
                onClick={(e) => handleEditing(e, 'shotLength', shot)}>
                <strong>Shot Length: </strong>
                {shot.shotLength}
              </span>
            )}
          </div>
          <div>
            {isEditing === 'characters' + `${shot._id}` ? (
              <>
                {shot.characters.map((character, i) => (
                  <div className="inline">
                    <input
                      value={character}
                      data-index={i}
                      onChange={(e) => handleCharacterInput(e)}
                      className="input"
                      type={'text'}
                      name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
                      autoComplete={'text' && true}
                      placeholder={'Enter Character Name'}
                      disabled={true}
                    />
                    <button
                      data-index={i}
                      onClick={(e) => removeCharacter(e, 'characters', shot)}>
                      Delete
                    </button>
                  </div>
                ))}

                <strong>Character: </strong>
                <select
                  // value={shotItem.characters}
                  // onChange={(e) =>
                  //   handleSelectItem(e, 'characters', shot, shotItem)
                  // }>
                  onChange={(e) => addCharacter(e, shot, 'characters')}
                  autoComplete={'text' && true}>
                  <option disabled selected value="">
                    Choose Characters
                  </option>
                  {viewer.characters.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <span
                data-index={shot._id}
                onClick={(e) => handleEditing(e, 'characters', shot)}>
                <strong>Character: </strong>
                {shot.characters.join(', ')}
              </span>
            )}

            <br />
            <strong>Assets: </strong>
            {shot.assets}
            <br />

            {isEditing === 'setting' + `${shot._id}` ? (
              <input
                value={shotItem.setting}
                // placeholder={viewer.setting}
                onChange={(e) => handleShotItem(e, 'setting')}
                onKeyDown={(e) =>
                  exitEdit(e, shotItem, shot._id, shot.forScene)
                }
                onBlur={(e) => setIsEditing(false)}
                type="text"
              />
            ) : (
              <div
                data-index={shot._id}
                onClick={(e) => handleEditing(e, 'setting', shot)}>
                <strong>Setting: </strong>
                {shot.setting}
              </div>
            )}
          </div>
          <div>
            {isEditing === 'shotFrame' + `${shot._id}` ? (
              <>
                <strong>Framing: </strong>
                <select
                  value={shotItem.shotFrame}
                  onChange={(e) =>
                    handleSelectItem(e, 'shotFrame', shot, shotItem)
                  }>
                  {Object.values(shotFrame).map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <span
                data-index={shot._id}
                onClick={(e) => handleEditing(e, 'shotFrame', shot)}>
                <strong>Framing: </strong>
                {shot.shotFrame}
              </span>
            )}

            <br />
            {isEditing === 'shotAngle' + `${shot._id}` ? (
              <>
                <strong>Angle: </strong>
                <select
                  value={shotItem.shotAngle}
                  onChange={(e) =>
                    handleSelectItem(e, 'shotAngle', shot, shotItem)
                  }>
                  {Object.values(shotAngle).map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <span
                data-index={shot._id}
                onClick={(e) => handleEditing(e, 'shotAngle', shot)}>
                <strong>Angle: </strong>
                {shot.shotAngle}
              </span>
            )}

            <br />
            {isEditing === 'shotFocal' + `${shot._id}` ? (
              <>
                <strong>Focal Length: </strong>

                <select
                  value={shotItem.shotFocal}
                  onChange={(e) =>
                    handleSelectItem(e, 'shotFocal', shot, shotItem)
                  }>
                  {Object.values(shotFocal).map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <span
                data-index={shot._id}
                onClick={(e) => handleEditing(e, 'shotFocal', shot)}>
                <strong>Focal Length: </strong>
                {shot.shotFocal}
              </span>
            )}
          </div>
          {state &&
          state.checkedOutShot &&
          state.checkedOutShot.id === shot.id ? (
            <div>
              <strong>
                Checked out by{' '}
                {state &&
                  state.checkedOutShot &&
                  state.checkedOutShot.user.name}
              </strong>
            </div>
          ) : (
            <div className="breakdown-footer">
              <div>
                <strong>Open for checkout</strong>
              </div>
              <div>
                <button onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="add" onClick={handleAddBreakdown}>
        <i className="fas fa-plus fa-2x"></i>
      </div>
      <style jsx>{`
        .delete-shot-section {
          display: flex;
          flex-direction: column;
        }
        .breakdown-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .breakdown-header button {
          padding: 6px 8px;
        }
        .breakdown-footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .breakdown-footer button {
          padding: 6px 8px;
        }
        .transport-breakdown {
          // background: #2f3c41;
          padding: 20px 10px;
        }
        .transport-breakdown-shot {
          // cursor: pointer;
          border: solid rgba(0, 0, 0, 0.15);
        }
        .transport-breakdown-shot.active {
          border: solid;
        }
        .transport-breakdown-shot.checked-out {
          color: #2f3c41;
          background: #acb7bb;
        }
        .transport-breakdown-shot.checked-out.not-user {
          color: #2f3c41;
          background: #acb7bb;
          pointer-events: none;
          cursor: default;
        }

        .transport-breakdown > div {
          background-color: white;
          padding: 20px;
          margin-bottom: 10px;
        }
        .transport-breakdown > div > div {
          margin: 20px;
        }
        .checked-out {
          background: #747373;
        }
        .add {
          cursor: pointer;
          color: #2f3c41;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          padding: 10px 0;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default RightPanelBreakdownView;
