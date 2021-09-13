import { useState, useContext, useEffect } from 'react';
import { initialNewSceneForm } from '../../../initialStates';
import FormCard from '../../formlayout/FormCard';
import axios from 'axios';
import { frameRate, production, aspectRatio, detailView } from '../../../dataModels';
import { ProjectContext, ProjectScenesContext, SetProjectScenesContext } from '../../../contexts/SceneMachineProviders';
import { SetDetailViewContext } from '../../../contexts/SceneMachineProviders';
import Resizer from 'react-image-file-resizer';

const NewSceneForm = ({setScene}) => {
  const [state, setState] = useState({
    // id: '',
    sceneName: '', // done
    description: '', // done
    characters: [], // done
    setting: '', // done
    script: {
      script: ``,
      rev: 1,
    },
    image: '', // done
    mainImage: '',
    stripImage: '',
    forProject: '', // use ObjectId
    forReel: '', // use ObjectId

    launched: false,
    productionStage: production.pre,
    frameRate: frameRate.true24, // done
    aspectRatio: aspectRatio.HDTV, // done

    boards: [],

    animatic: '',
    video: { Location: '', videoName: '', revision: 1 },
    revision: 1,
  });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const project = useContext(ProjectContext);
  const setDetail = useContext(SetDetailViewContext);
  const projectScenes = useContext(ProjectScenesContext)
  const setProjectScenes = useContext(SetProjectScenesContext)
  const [newCharacter, setNewCharacter] = useState();
  const [imgPreview, setImgPreview] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // console.log('PROJECT DATA', project)
  useEffect(() => {
    console.log('NEW PROJECT LOADED IN NEW SCENE FORM: ', project);
    setState({ ...state, forProject: project._id });
  }, [project]);
  // const [newSceneForm, setNewSceneForm] = useState(initialNewSceneForm);
  // console.log('new scene form state', state);
  // TODO: The new scene form only sets up the basics. We get a scene overview from this with description and scene name and hopefully script. From there the creator will go through and add assets if needed, backgrounds, FX and a shot list with breakdowns and launch the scene.

  // a scene card will show up if there is no image uploaded

  const handleImg = (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append('fullImage', file);

    setImgPreview(window.URL.createObjectURL(file));
    setIsLoading(true);

    // resize image
    Resizer.imageFileResizer(file, 1300, 731, 'JPEG', 100, 0, async (uri) => {
      formData.append('smallImage', uri);
      try {
        let { data } = await axios.post('/api/board/upload-image', formData);
        await console.log('SCENE IMAGE UPLOADED', data);

        // setImage(data);
        setState({...state, image: data});
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        // toast.warning('failed uploadd');
        console.log('failed upload');
      }
    });
  };

  const handleImageRemove = async () => {
    let confirm = window.confirm('Do you want to remove this image?');

    if (confirm) {
      try {
        setIsLoading(true);
        await axios.post('/api/field/remove-image', { image });
        setNewBoard({ ...newBoard, boardData: '' });
        setImgPreview('');
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        // toast.warn('Image upload failed.');
        console.log('Image upload failed');
      }
    }
  };

  const handleVideo = async (e) => {
    try {
      const file = e.target.files[0];
      // console.log('video file', file)
      setLoading(true);
      const videoData = new FormData();
      videoData.append('video', file);
      // console.log('video data', videoData);
      // save progress bar and send video as formdata to backend
      const { data } = await axios.post('/api/field/video-upload', videoData, {
        onUploadProgress: (e) => {
          setProgress(Math.round((100 * e.loaded) / e.total));
        },
      });
      // once res is resceived
      // console.log('video upload', data);
      setNewSceneForm({
        ...newSceneForm,
        video: { ...newSceneForm.video, s3: { ...data } },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // toast('Video upload failed');
      console.log('video upload failed');
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post('/api/field', {
  //       ...values,
  //       image,
  //     });
  //     // toast.success('Awesome! Now we can start adding scenes to your field.');
  //     console.log('success')
  //     setTimeout(() => {
  //       router.push('/creator');
  //     }, 2000);
  //   } catch (err) {
  //     // toast.error(err.response.data);
  //     console.log(err.response.data)
  //   }
  // };

  const loadItem = (e, name) => {
    e.preventDefault();
    setState({
      ...state,
      [name]: [...state[name]],
    });
  };
  const addCharacter = (e, name) => {
    e.preventDefault();
    setState({
      ...state,
      [name]: [...state[name], ''],
    });
  };
  const addNewCharacter = (e, name) => {
    e.preventDefault();
    setState({
      ...state,
      [name]: [...state[name], newCharacter],
    });
    setNewCharacter('');
  };

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
  // const handleCharacterInput = (e) => {
  //   e.preventDefault();
  //   const i = e.target.getAttribute('data-index');
  //   let characters = [...state.characters];
  //   let oneCharacter = characters[i];
  //   oneCharacter = e.target.value;
  //   characters[i] = oneCharacter;

  //   setState({
  //     ...state,
  //     characters: [...characters],
  //   });
  // };

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
  const handleAddScene = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`/api/create-scene`, {
        ...state,
      });
      // redirect user to home page
      console.log('CREATE SCENE SUCCESS: ', {data})
      setProjectScenes(data.scenes)
      setScene(data.newScene)
      setDetail(detailView.overview);
      // setDetail(detailView.overview);
      // window.location.reload();
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <>
      <div className="new-scene-form">
        <FormCard title={state.sceneName || 'New Scene'}>
          {/* <NewSceneFormInput
          state={state}
          value={state.sceneName}
          onChange={setState}
          htmlFor="Scene Name"
          name="sceneName"
        /> */}
          <div id="scene-name" className="section">
            <label className="label" htmlFor="Scene Name">
              Scene Name
            </label>
            <input
              value={state.sceneName}
              onChange={(e) =>
                setState({ ...state, sceneName: e.target.value })
              }
              className="input"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              autoComplete={'text' && true}
              placeholder={'Enter Scene Name'}
              disabled={false}
            />
          </div>
          <div id="scene-description" className="section">
            <label className="label" htmlFor="Scene Description">
              Scene Description
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
              Scene Setting
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

          <br />
          <hr />
          <br />

          <div id="scene-characters" className="section">
            <label className="label" htmlFor="characters">
              Characters {state.characters.length}
            </label>
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
            <div className="inline">
              <input
                value={newCharacter}
                // data-index={i}
                onChange={(e) => setNewCharacter(e.target.value)}
                className="input"
                type={'text'}
                name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
                autoComplete={'text' && true}
                placeholder={'Enter Character Name'}
                disabled={false}
              />
              <button onClick={(e) => addNewCharacter(e, 'characters')}>
                Add
              </button>
            </div>
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
            <button onClick={(e) => addCharacter(e, 'assets')}>
              Add Asset
            </button>
          </div>
          <div id="scene-fx" className="section">
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
                <button
                  data-index={i}
                  onClick={(e) => removeCharacter(e, 'FX')}>
                  Delete
                </button>
              </div>
            ))}
            <button onClick={(e) => addCharacter(e, 'FX')}>Add Asset</button>
          </div>
          <div id="scene-backgrounds" className="section">
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
                  onClick={(e) =>
                    handleArrayInput(e, 'backgrounds', 'location')
                  }>
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
          <div id="scene-script" className="section">
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
          <br />

          <div id="scene-framerate" className="section">
            <label className="label" htmlFor="framerate">
              Frame Rate
            </label>
            <select
              value={state.frameRate}
              onChange={(e) =>
                setState({ ...state, frameRate: e.target.value })
              }
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
          <br />

          {/* <div id="scene-image" className="section">
            <label className="label" htmlFor="scene-image">
              Upload Scene Image
            </label>
            <section>
              <button>Upload Image</button>
            </section>
          </div> */}

          <div id="scene-image" className="section">
            {/* <div className="button-label">Board Image</div> */}
            <label className="label" htmlFor="scene-image">
              Upload Scene Image
            </label>
            <div className="button-flex">
              <label
                disabled={isLoading || imgPreview}
                // className={isLoading || imgPreview ? 'disabledBtn' : 'btn'}
                htmlFor="uploader"
                type="submit">
                {imgPreview ? 'Preview' : 'Upload '}
                <input
                  type="file"
                  accept="image"
                  name="image"
                  onChange={handleImg}
                />
              </label>
              {/* <ButtonUpload
                color={'#3f3f3f'}
                disabled={isLoading || imgPreview}
                uploadType="image"
                buttonName={imgPreview ? 'Preview' : 'Upload Banner Image'}
                onChange={handleImg}
              /> */}
            </div>
            {imgPreview ? (
              <div>
                <div
                  onClick={handleImageRemove}
                  className="banner-preview-container">
                  <img className="banner-preview" src={imgPreview} alt="" />
                </div>
                {/* <div className="banner-preview-container">
                  <img className="banner-preview" src={image.Location} alt="" />
                </div> */}
              </div>
            ) : (
              <div className="description">
                {/* Upload jpegs of any size */}
              </div>
            )}
            {/* <div className="button-flex">
                <button onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? '...saving' : 'Save and Upload'}
                </button>
                {/* <Button
                color={'#3f3f3f'}
                disabled={isLoading}
                buttonName={isLoading ? '...saving' : 'Save and Continue'}
                onClick={handleSubmit}
              /> *
              </div> */}
          </div>

          {state.productionStage === 'Production' && (
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
          )}
          {isLoading && <>Upload: {progress} %</>}
          <div id="scene-submit" className="section">
            <section>
              <button
                disabled={isLoading}
                className="submit-btn"
                onClick={handleAddScene}>
                Create Scene
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
            .banner-preview-container {
              margin: 20px 0;
            }
            .banner-preview {
              // height: 200px;
              width: 100%;
              object-fit: cover;
            }
          `}</style>
        </FormCard>
      </div>
    </>
  );
};

export default NewSceneForm;
