import { useEffect, useState, useContext, useRef } from 'react';
import axios from 'axios';
import {
  setProjectContext,
  SetViewerContext,
  ViewerContext
} from '../../../contexts/SceneMachineProviders';
import BecomeCreator from '../../../pages/user/become-creator';

const RightPanelOverview = () => {
  const [deleteScene, setDeleteScene] = useState();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [sceneItem, setSceneItem] = useState('');
  const dispatch = useContext(setProjectContext);
  const setViewer = useContext(SetViewerContext);
  const viewer = useContext(ViewerContext);
  const titleRef = useRef();
  const descRef = useRef();
  const settingRef = useRef();
  const charRef = useRef();

  useEffect(() => {
    if (isEditing == 'sceneName') {
      titleRef.current.focus();
    }
    if (isEditing == 'description') {
      descRef.current.focus();
    }
    if (isEditing == 'setting') {
      settingRef.current.focus();
    }
    if (isEditing == 'characters') {
      charRef.current.focus();
    }
  }, [isEditing]);

  // useEffect(() => {
  //   const handleClick = (event) => {
  //     if (!titleRef?.current?.contains(event.target)) {
  //       setEditing(false);
  //     }
  //   };
  //   document.addEventListener('click', handleClick);
  //   return () => document.removeEventListener('click', handleClick);
  // });

  // useEffect(() => {
  //   setSceneItem(viewer);
  // }, [viewer]);

  // useEffect(() => {
  //   axios.post(`/api/scenes/overview/${sceneItem}`)
  //     .then(({data}) => {
  //       dispatch(['FETCH_PROJECT', data])
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, [sceneItem]);

  // const loadViewerScene = async (id) => {
  //   const { data } = await axios.get(`/api/scene/${id}`);
  //   await setViewer(data);
  //   // console.log('RESPONSE SCENE',data)
  //  }
  //  console.log('VIEWER', viewer)

  const handleDelete = async (event) => {
    event.preventDefault();
    // return
    const { _id } = viewer;
    const {forProject} = viewer;
    const { data } = await axios.delete(`/api/scene/${_id}/${forProject}`);
    // await setViewer(data);
    window.location.reload();

    console.log('RESPONSE SCENE',data)
  }

  const changeItem = async (sceneItem) => {
    try {
      await axios.post(`/api/scene/overview/${viewer._id}`, sceneItem);
      const { data } = await axios.get(`/api/scene/${viewer._id}`);

      await setViewer(data);

      await setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const changeArrayItem = async (sceneItem) => {

    try {
      await axios.post(`/api/scene/overview-array/${viewer._id}`, sceneItem);
      const { data } = await axios.get(`/api/scene/${viewer._id}`);
      await setViewer(data);

      await setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const exitEdit = (e, sceneItem) => {
    if (e.key === 'Enter') {
      changeItem(sceneItem);
      setIsEditing(false);
      // loadViewerScene(viewer._id);
      setSceneItem('');
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setSceneItem('');
    }
  };

  const exitArrayEdit = (e, key, objWithArray) => {
    if (e.key === 'Enter') {
      const objToSend = {arrayName: key, itemName: objWithArray[key].split(',')}
      console.log('ARRAY TO SEND', objToSend)

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

  // TODO: fix this
  const handleArrayItem = (e, arrayName) => {
    e.preventDefault();
    setSceneItem({ arrayName: [arrayName], itemName: e.target.value });
  };
  const handleArray = (e, arrayName) => {
    e.preventDefault();
    setSceneItem({ [arrayName]: e.target.value });
  };

  const handleItem = (e, sceneItem) => {
    e.preventDefault();
    setSceneItem({ [sceneItem]: e.target.value });
  };

  const handleEditing = (e, editName) => {
    if (isEditing === editName) return
    const el = e.target.getAttribute('data-index');
    setSceneItem({[editName]: viewer[editName]})
    console.log('HANDLE EDITING', sceneItem)
    e.preventDefault();
    // set focus on the input
    setIsEditing(editName);
    // titleRef.current = el;
    // console.log('EL', el)

    // titleRef.current.focus()
  };

  const handleArrayEditing = (e, arrayName) => {
    e.preventDefault();
    setSceneItem({ [arrayName]: viewer[arrayName] });
    // set focus on the input
    setIsEditing(arrayName);
    // titleRef.current = el;
    // console.log('EL', el)

    // titleRef.current.focus()
  };

  return (
    <div id="scene-card" className="transport-description">
      <div
        className="transport-description"
        onClick={(e) => handleEditing(e, 'sceneName')}>
        {isEditing === 'sceneName' ? (
          <h3>
            <input
              ref={titleRef}
              data-index="title"
              value={sceneItem.sceneName}
              onChange={(e) => handleItem(e, 'sceneName')}
              type="text"
              // placeholder={viewer.sceneName}
              onKeyDown={(e) => exitEdit(e, sceneItem)}
              onBlur={(e) => setIsEditing(false)}
            />
          </h3>
        ) : (
          <h3>Scene: "{viewer.sceneName}"</h3>
        )}
      </div>
      <div
        className="transport-description-detail"
        onClick={(e) => handleEditing(e, 'description')}>
        {isEditing === 'description' ? (
          <textarea
            ref={descRef}
            name="text"
            id=""
            cols="50"
            rows="10"
            value={sceneItem.description}
            // placeholder={viewer.description}
            onChange={(e) => handleItem(e, 'description')}
            onKeyDown={(e) => exitEdit(e, sceneItem)}
            onBlur={(e) => setIsEditing(false)}></textarea>
        ) : (
          viewer.description
        )}
      </div>
      <table className="details-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Setting: </td>
            <td onClick={(e) => handleEditing(e, 'setting')}>
              {isEditing === 'setting' ? (
                <input
                  value={sceneItem.setting}
                  // placeholder={viewer.setting}
                  ref={settingRef}
                  onChange={(e) => handleItem(e, 'setting')}
                  onKeyDown={(e) => exitEdit(e, sceneItem)}
                  onBlur={(e) => setIsEditing(false)}
                  type="text"
                />
              ) : (
                viewer?.setting
              )}
            </td>
          </tr>

          <tr>
            <td>Characters: (count: {viewer.characters.length})</td>
            {/* TODO: add ability to see and edit whole array  */}
            <td onClick={(e) => handleArrayEditing(e, 'characters')}>
              {isEditing === 'characters' ? (
                <input
                  placeholder={viewer.characters.join(', ')}
                  value={sceneItem.characters}
                  ref={charRef}
                  onChange={(e) => handleArray(e, 'characters')}
                  onKeyDown={(e) => exitArrayEdit(e, 'characters', sceneItem)}
                  onBlur={(e) => setIsEditing(false)}
                  type="text"
                />
              ) : (
                viewer?.characters.join(', ')
              )}
            </td>
          </tr>
          <tr>
            <td> Shot Breakdown Count: </td>
            <td>{viewer && viewer.shotList?.length}</td>
          </tr>
          {/* <tr>
            <td> Backgrounds: </td>
            <td>{viewer && viewer.backgrounds?.length}</td>
          </tr>
          <tr>
            <td> Asset Count: </td>
            <td>{viewer && viewer.assets?.length}</td>
          </tr>
          <tr>
            <td> FX: </td>
            <td>{viewer && viewer.FX?.length}</td>
          </tr> */}
          <tr>
            <td>Frame Rate: </td>
            <td>{viewer && viewer.frameRate && viewer.frameRate}</td>
          </tr>
          <tr>
            <td>Aspect Ratio: </td>
            <td>{viewer && viewer.aspectRatio && viewer.aspectRatio}</td>
          </tr>
          <tr>
            <td>Launched: </td>
            <td>{viewer && viewer.launched ? 'true' : 'false'}</td>
          </tr>
          <tr>
            <td>Production Stage: </td>
            <td>
              {viewer && viewer.productionStage && viewer.productionStage}
            </td>
          </tr>
        </tbody>
      </table>
      Contributers and their hard work are how this project gets made
      <table className="details-table">
        <thead>
          <tr>
            <th>Contributers</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {/* obviously do a map here from viewer */}
          <tr>
            <td>Keith</td>
            <td>Key Frames</td>
          </tr>
          <tr>
            <td>Sonny</td>
            <td>Inbetweens</td>
          </tr>
          <tr>
            <td>Loralai</td>
            <td>Inbetweens</td>
          </tr>
        </tbody>
      </table>
      <div className="delete-section" >
        <label htmlFor="delete">Type 'delete scene' to delte</label>
        <input type="text" value={deleteScene} onChange={(e)=>setDeleteScene(e.target.value)} />
        <button disabled={deleteScene != 'delete scene'} onClick={handleDelete}>Delete Scene</button>
      </div>
      <style jsx>{`
      .delete-section {
        display: flex;
        flex-direction: column;
      }
      .delete-section input {
        padding: 5px;
      }
      .delete-section button {
        padding: 5px;
        cursor: pointer;
      }
      .delete-section label {
        color: #535353;
        padding: 5px;
      }
      `}</style>
    </div>
  );
};

export default RightPanelOverview;
