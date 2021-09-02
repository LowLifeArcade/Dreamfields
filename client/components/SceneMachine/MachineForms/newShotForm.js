import { useState, useContext, useEffect } from 'react';
import { initialNewSceneForm } from '../../../initialStates';
import FormCard from '../../formlayout/FormCard';
import axios from 'axios';
import { frameRate } from '../../../dataModels';
import {
  DetailViewContext,
  ProjectContext,
  SetShotsContext,
  ShotsContext,
  ViewerContext,
} from '../../../contexts/SceneMachineProviders';
import { SetDetailViewContext } from '../../../contexts/SceneMachineProviders';
import {
  shotLength,
  shotComplexity,
  shotAngle,
  shotFocal,
  shotFrame,
  detailView,
  view,
} from '../../../dataModels';

// TODO:
// NOT NEEDED Make dropdown for 'forScene'
// DONE dropdown for shot complexity
// DONE dropdown for characters (list should  bbe availabe in the project context)
// DONE dropdown for shot length
// dropdown for contriubtors
// make shotNumber a number dropdown from scene / viewer data where there is an array of shots avaiable

const NewShotForm = () => {
  const [state, setState] = useState({
    shotNumber: '',
    shotName: '', // this should be dynamic or a dropdown or something that disables chosen shots
    shotLength: shotLength.medium,
    shotComplexity: shotComplexity.medium,
    shotFrame: shotFrame.medium,
    shotAngle: shotAngle.normal,
    shotFocal: shotFocal.normal,
    forScene: '',
    forProject: '',
    complexity: shotComplexity.medium,
    characters: [],
    setting: '',
    description: '',
    breakdown: '',
    contributors: [], // push object ids from artist list in project/field
  });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const project = useContext(ProjectContext);
  const setDetail = useContext(SetDetailViewContext);
  const detail = useContext(DetailViewContext);
  const viewer = useContext(ViewerContext); // all the scene data is in here
  const shots = useContext(ShotsContext);
  const getShots = useContext(SetShotsContext);
  console.log('viewer', viewer);

  let shotNumbersData = shots ? [shots?.length + 1] : [1];

  useEffect(() => {
    shotNumbersData = shots ? [shots?.length + 1] : [1];
  }, [shots]);
  // const shotNumbersData = viewer.shotList
  //   ? [...viewer?.shotList?.map((shot) => shot.shotNumber), (viewer.shotList?.length + 1)]
  //   : [1];

  const [shotNumbers, setShotNumbers] = useState(shotNumbersData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [detail]);

  useEffect(() => {
    setState({
      ...state,
      forScene: viewer._id,
      forProject: viewer.forProject,
      shotNumber: viewer.shotList.length + 1,
    });
  }, [shotNumbers]);

  const addCharacter = (e) => {
    e.preventDefault();
    if (state.characters.includes(e.target.value)) return;
    let currentCharacters;
    if (state.characters.length !== 0) {
      currentCharacters = state.characters.filter((c) => c !== e.target.value);
    } else {
      currentCharacters = state.characters;
    }
    console.log(state.characters);
    setState({
      ...state,
      characters: [...currentCharacters, e.target.value],
    });
  };
  // const addCharacter = (e, name) => {
  //   e.preventDefault();
  //   setState({
  //     ...state,
  //     [name]: [...state[name], ''],
  //   });
  // };
  console.log('STATE', state);

  const removeCharacter = (e, name) => {
    const i = e.target.getAttribute('data-index');
    e.preventDefault();
    const list = [...state[name]];
    list.splice(i, 1);
    setState({ ...state, [name]: list });
  };

  const handleCharacterInput = (e) => {
    e.preventDefault();
    const i = e.target.getAttribute('data-index');
    let characters = [...state.characters];
    let oneCharacter = characters[i];
    oneCharacter = e.target.value;
    characters[i] = oneCharacter;

    setState({
      ...state,
      characters: [...characters],
    });
  };
  const handleArrayInput = (e, name, item) => {
    e.preventDefault();
    const i = e.target.getAttribute('data-index');
    let array = [...state[name]];
    let arrayItem = { ...array[i] };
    arrayItem[item] = e.target.value;
    array[i] = arrayItem;

    setState({
      ...state,
      [name]: [...array],
    });
  };
  // backend submission
  // TODO: add an id field that links the field to the scene
  const handleAddShot = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/create-shot`, {
        ...state,
      });

      console.log('Added Shot Succesfully', data.response);
      await getShots(viewer._id);
      // redirect user to home page
      // setTimeout(() => {
        setDetail(detailView.boards);
      // }, 1000);

      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
      // window.location.reload();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <>
      <div className="new-scene-form">
        {/* TODO: should be numeric | Maybe a dropdown */}
        <FormCard
          title={
            state.shotName
              ? `${viewer.sceneName}: ${state.shotName} `
              : `${viewer.sceneName}: New Shot Breakdown`
          }>
          <div id="scene-name" className="section">
            <label className="label" htmlFor="Scene Name">
              Shot Name
            </label>
            <input
              value={state.sceneName}
              onChange={(e) => setState({ ...state, shotName: e.target.value })}
              className="input"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              autoComplete={'text' && true}
              placeholder={'Enter Scene Name'}
              disabled={false}
            />
          </div>

          <div id="scene-settings" className="section">
            <label className="label" htmlFor="Scene Setting">
              Shot Number
            </label>
            <select
              value={state.shotNumber}
              onChange={(e) =>
                setState({ ...state, shotNumber: e.target.value })
              }
              className="input"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              autoComplete={'text' && true}
              placeholder={'Where is this scene taking place?'}
              disabled={false}>
              {Object.values(shotNumbers).map((frame, i) => (
                <option key={i} value={frame}>
                  {frame}
                </option>
              ))}
            </select>
          </div>

          <div id="scene-description" className="section">
            <label className="label" htmlFor="Scene Description">
              Shot Description
            </label>
            <textarea
              value={state.description}
              onChange={(e) =>
                setState({ ...state, description: e.target.value })
              }
              className="input"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              autoComplete={'text' && true}
              placeholder={'Describe the scene...'}
              disabled={false}
              rows="10"
            />
          </div>

          <div id="scene-settings" className="section">
            <label className="label" htmlFor="Scene Setting">
              Shot Setting / Background
            </label>
            <input
              value={state.setting}
              onChange={(e) => setState({ ...state, setting: e.target.value })}
              className="input"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              autoComplete={'text' && true}
              placeholder={'Where is this scene taking place?'}
              disabled={false}
            />
          </div>
          <div id="scene-settings" className="section">
            <label className="label" htmlFor="Scene Setting">
              Shot Length
            </label>
            <select
              value={state.shotLength}
              onChange={(e) =>
                setState({ ...state, shotLength: e.target.value })
              }
              className="input"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              autoComplete={'text' && true}
              placeholder={'Where is this scene taking place?'}
              disabled={false}>
              {Object.values(shotLength).map((frame, i) => (
                <option key={i} value={frame}>
                  {frame}
                </option>
              ))}
            </select>
          </div>
          <div id="scene-settings" className="section">
            <label className="label" htmlFor="Scene Setting">
              Shot Complexity
            </label>
            <select
              value={state.shotComplexity}
              onChange={(e) =>
                setState({ ...state, shotComplexity: e.target.value })
              }
              className="input"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              autoComplete={'text' && true}
              placeholder={'Where is this scene taking place?'}
              disabled={false}>
              {Object.values(shotComplexity).map((frame, i) => (
                <option key={i} value={frame}>
                  {frame}
                </option>
              ))}
            </select>
          </div>
          <div id="scene-settings" className="section">
            <label className="label" htmlFor="Scene Setting">
              Shot Type (Framing)
            </label>
            <select
              value={state.shotFrame}
              onChange={(e) =>
                setState({ ...state, shotFrame: e.target.value })
              }
              className="input"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              autoComplete={'text' && true}
              placeholder={'Where is this scene taking place?'}
              disabled={false}>
              {Object.values(shotFrame).map((frame, i) => (
                <option key={i} value={frame}>
                  {frame}
                </option>
              ))}
            </select>
          </div>

          <div id="scene-settings" className="section">
            <label className="label" htmlFor="Scene Setting">
              Shot Angle (Angle of Camera to Subject)
            </label>
            <select
              value={state.shotAngle}
              onChange={(e) =>
                setState({ ...state, shotAngle: e.target.value })
              }
              className="input"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              autoComplete={'text' && true}
              placeholder={'Where is this scene taking place?'}
              disabled={false}>
              {Object.values(shotAngle).map((frame, i) => (
                <option key={i} value={frame}>
                  {frame}
                </option>
              ))}
            </select>
          </div>
          <div id="scene-settings" className="section">
            <label className="label" htmlFor="Scene Setting">
              Shot Focal Length <br /> (Lens Type determines the overall working
              distance from camera to subject and also the effect a lens has on
              the subject visually)
            </label>
            <select
              value={state.shotFocal}
              onChange={(e) =>
                setState({ ...state, shotFocal: e.target.value })
              }
              className="input"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              autoComplete={'text' && true}
              placeholder={'Where is this scene taking place?'}
              disabled={false}>
              {Object.values(shotFocal).map((frame, i) => (
                <option key={i} value={frame}>
                  {/* {console.log('FOCAL', frame)} */}
                  {frame}
                </option>
              ))}
            </select>
          </div>

          <br />
          <hr />
          <br />

          <div id="scene-characters" className="section">
            {state.characters.length !== 0 && (
              <label className="label" htmlFor="characters">
                Characters in shot {state.characters.length}
              </label>
            )}
            {state.characters.map((character, i) => (
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
                  onClick={(e) => removeCharacter(e, 'characters')}>
                  Delete
                </button>
              </div>
            ))}
            {/* <button onClick={(e) => addCharacter(e, 'characters')}>
              Add Character
            </button> */}
          </div>

          <div id="scene-settings" className="section">
            <label className="label" htmlFor="Scene Setting">
              Add Characters
            </label>
            <select
              // value={state.characters}
              value=""
              defaultValue=""
              onChange={(e) => addCharacter(e)}
              className="input"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              autoComplete={'text' && true}
              placeholder={'Where is this scene taking place?'}
              disabled={false}>
              <option disabled value="">
                Choose Characters
              </option>
              {viewer.characters.map((character, i) => (
                <option key={i} id={character} value={character}>
                  {character}
                </option>
              ))}
            </select>
          </div>

          {/* <div id="scene-assets" className="section">
          <label className="label" htmlFor="assets">
            Assets {state.assets.length}
          </label>
          {state.assets.map((asset, i) => (
            <div className="inline">
              <input
                value={asset.name}
                data-index={i}
                onChange={(e) => handleArrayInput(e, 'assets', 'name')}
                className="input"
                type={'text'}
                name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
                autoComplete={'text' && true}
                placeholder={'Enter asset name'}
                disabled={false}
              />
              <button
                className="loader-btn"
                data-index={i}
                onClick={(e) => handleArrayInput(e, 'assets', 'location')}>
                <p>Load</p>
              </button>
              <button
                data-index={i}
                onClick={(e) => removeCharacter(e, 'assets')}>
                Delete
              </button>
            </div>
          ))}
          <button onClick={(e) => addCharacter(e, 'assets')}>Add Asset</button>
        </div> */}
          {/* <div id="scene-fx" className="section">
          <label className="label" htmlFor="fx">
            FX {state.FX.length}
          </label>
          {state.FX.map((fx, i) => (
            <div className="inline">
              <input
                value={fx.name}
                data-index={i}
                onChange={(e) => handleArrayInput(e, 'FX', 'name')}
                className="input"
                type={'text'}
                name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
                autoComplete={'text' && true}
                placeholder={'Enter FX name'}
                disabled={false}
              />
              <button
                className="loader-btn"
                data-index={i}
                onClick={(e) => handleArrayInput(e, 'FX', 'location')}>
                <p>Load</p>
              </button>
              <button data-index={i} onClick={(e) => removeCharacter(e, 'FX')}>
                Delete
              </button>
            </div>
          ))}
          <button onClick={(e) => addCharacter(e, 'FX')}>Add Asset</button>
        </div> */}
          {/* <div id="scene-backgrounds" className="section">
          <label className="label" htmlFor="backgrounds">
            Backgrounds {state.backgrounds.length}
          </label>
          {state.backgrounds.map((background, i) => (
            <div className="inline">
              <input
                value={background.name}
                data-index={i}
                onChange={(e) => handleArrayInput(e, 'backgrounds', 'name')}
                className="input"
                type={'text'}
                name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
                autoComplete={'text' && true}
                placeholder={'Enter background name'}
                disabled={false}
              />
              <button
                className="loader-btn"
                data-index={i}
                onClick={(e) => handleArrayInput(e, 'backgrounds', 'location')}>
                <p>Load</p>
              </button>
              <button
                data-index={i}
                onClick={(e) => removeCharacter(e, 'backgrounds')}>
                Delete
              </button>
            </div>
          ))}
          <button onClick={(e) => addCharacter(e, 'backgrounds')}>
            Add Asset
          </button>
        </div> */}
          {/* <div id="scene-script" className="section">
          <label className="label" htmlFor="Script">
            Script
          </label>
          <textarea
            value={state.script.script}
            onChange={(e) =>
              setState({
                ...state,
                script: { ...state.script, script: e.target.value },
              })
            }
            className="input"
            type={'text'}
            name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
            autoComplete={'text' && true}
            placeholder={'Describe the scene...'}
            disabled={false}
            rows="10"
          />
        </div>

        <br />
        <hr />
        <br /> */}

          {/* <div id="scene-framerate" className="section">
          <label className="label" htmlFor="framerate">
            Frame Rate
          </label>
          <select
            value={state.frameRate}
            onChange={(e) => setState({ ...state, frameRate: e.target.value })}
            className="input"
            type={'text'}
            name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
            autoComplete={'text' && true}
            placeholder={'Enter Scene Name'}
            disabled={false}>
            <option disabled value="">
              select framerate
            </option>
            <option value={frameRate.true12}>12fps</option>
            <option value={frameRate.sync24}>23.96fps</option>
            <option value={frameRate.true24}>24fps</option>
            <option value={frameRate.sync30}>29.97fps</option>
            <option value={frameRate.true30}>30fps</option>
            <option value={frameRate.sync60}>59.97fps</option>
            <option value={frameRate.true60}>60fps</option>
          </select>
        </div>
        <div id="scene-aspectratio" className="section">
          <label className="label" htmlFor="aspect-ratio">
            Aspect Ratio
          </label>
          <select
            value={state.aspectRatio}
            onChange={(e) =>
              setState({ ...state, aspectRatio: e.target.value })
            }
            className="input"
            type={'text'}
            name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
            autoComplete={'text' && true}
            placeholder={'Enter Scene Name'}
            disabled={false}>
            <option disabled value="">
              select aspect ratio
            </option>
            <option value="3:4">3:4</option>
            <option value="16:9">16:9</option>
            <option value="2">2</option>
            <option value="2.35">2.35</option>
            <option value="2.4">2.4</option>
          </select>
        </div>
        <div id="scene-productionstage" className="section">
          <label className="label" htmlFor="">
            Production Stage
          </label>
          <select
            value={state.productionStage}
            onChange={(e) =>
              setState({ ...state, productionStage: e.target.value })
            }
            className="input"
            type={'text'}
            name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
            autoComplete={'text' && true}
            placeholder={'Select Production Stage'}
            disabled={false}>
            <option selected disabled value="">
              Select Production Stage
            </option>
            <option value="Pre Production">Pre Production</option>
            <option value="Boards">Boards</option>
            <option value="Production">Production</option>
          </select>
        </div>

        <br />
        <hr />
        <br /> */}

          {/* <div id="scene-image" className="section">
            <label className="label" htmlFor="scene-image">
              Upload Shot Image
            </label>
            <section>
              <button>Upload Shot</button>
            </section>
          </div> */}

          {/* {state.productionStage === 'Production' && (
          <>
            <div id="scene-animatic" className="section">
              <label className="label" htmlFor="scene-image">
                Upload Animatic
              </label>
              <section>
                <button>Upload Animatic</button>
              </section>
            </div>

            <div className="upload-btns">
              {state.video.s3 == '' ? (
                <div id="scene-video" className="section">
                  <label className="label" htmlFor="scene-video">
                    Upload Video
                  </label>
                  <input
                    value={state.video.videoName}
                    onChange={(e) =>
                      setState({
                        ...state,
                        video: { ...state.video, videoName: e.target.value },
                      })
                    }
                    className="input"
                    type={'text'}
                    name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
                    autoComplete={'text' && true}
                    placeholder={'Give a name for this video'}
                    disabled={false}
                  />
                  <section className="video-btn">
                    <input
                      disabled={loading}
                      onChange={handleVideo}
                      type="file"
                      accept="video/*"
                    />
                  </section>
                </div>
              ) : (
                <div id="scene-video-delete" className="section">
                  <label className="label" htmlFor="scene-video">
                    Upload Video
                  </label>
                  <section>
                    <div>{state.video.videoName}</div>
                  </section>
                </div>
              )}

              <div id="scene-video-delete" className="section">
                <section>
                  <button>Delete Video</button>
                </section>
              </div>
            </div>
          </>
        )} */}
          {/* {loading && <>Upload: {progress} %</>} */}
          <div id="scene-submit" className="section">
            <section>
              <button
                disabled={loading}
                className="submit-btn"
                onClick={handleAddShot}>
                Create Shot
              </button>
            </section>
          </div>

          <style jsx>{`
            #scene-video-delete {
            }
            .upload-btns {
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
            }
            //input[type='file'] {
            //  display: none;
            //}
            .submit-btn:active {
              background: #225161;
            }
            .submit-btn {
              border: none;
              border-radius: 4px;
              justify-content: center !important;
              width: 100% !important;
              padding: 10px !important;
              background: #347991;
              color: #f3f3f3 !important;
            }
            .section {
              padding: 3px 0px;
              margin-bottom: 3px;
            }

            .video-btn {
              margin: 10px 0;
            }

            .section button {
              color: #347991;
              margin: 10px 0;
              padding: 6px;
              display: flex;
              cursor: pointer;
              // align-items: center;
              // padding: 10px;
            }
            .inline button {
              color: #347991;
              margin-left: 10px;
              padding: 6px;
              display: flex;
              cursor: pointer;
              // align-items: center;
              // padding: 10px;
            }
            .inline {
              display: flex;
              align-items: center;
              justify-content: center;
              // padding: 10px;
            }
            .label {
              color: #333;
              font-size: small;
              color: rgb(105, 100, 85);
            }

            .input {
              margin: 5px 0;
              margin-top: 9px;
              padding: 8px;
              width: 100%;
              border: solid 1px rgb(196, 188, 163);
              border-radius: 3px;
            }
          `}</style>
        </FormCard>
      </div>
    </>
  );
};

export default NewShotForm;
