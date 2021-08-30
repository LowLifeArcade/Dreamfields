import { useState, useContext, useEffect } from 'react';
import FormCard from '../../formlayout/FormCard';
import {
  SetDetailViewContext,
  ViewerContext,
} from '../../../contexts/SceneMachineProviders';
import Resizer from 'react-image-file-resizer';
import axios from 'axios';
import ButtonUpload from '../../ButtonUpload';
import Button from '../../Button';
import { Context } from '../../../context';
import { PreviewStateContext } from '../../../contexts/SceneMachineProviders';
import { detailView } from '../../../dataModels';

const NewBoardForm = () => {
  const [newBoard, setNewBoard] = useState({
    name: '',
    forScene: '',
    forShot: '',
    boardData: '',
    artist: {},
  });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shots, setShots] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState();
  const viewer = useContext(ViewerContext);
  const user = useContext(Context);
  const preview = useContext(PreviewStateContext);
  const [imgPreview, setImgPreview] = useState();
  const setDetail = useContext(SetDetailViewContext);

  useEffect(() => {
    setNewBoard({
      ...newBoard,
      forScene: viewer._id,
      artist: {
        userName: user.state.user.name,
        userId: user.state.user._id,
        avatar: user.state.user.picture,
      },
    });
  }, []);

  useEffect(() => {
    console.log('NEW BOARD: ', newBoard, user.state.user.name);
  });

  const getCurrentShots = async () => {
    try {
      const shots = await axios.get(`/api/shots/${viewer._id}`);
      console.log('SHOTS: ', shots.data);
      setShots(shots.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentShots();
  }, [viewer]);

  // useEffect(() => {
  //   if (shots?.length > 0) setDetail(detailView.boards);
  // }, [shots]);

  const handleSubmit = async (e) => {
    try {
      const { data } = await axios.post(`/api/create-board`, {
        newBoard,
        image,
      });

      console.log('BOARD CREATION SUCCESSFUL: ', data);
      // window.location.reload();
      setTimeout(() => {
        setDetail(detailView.boards);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImg = (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append('fullImage', file);

    setImgPreview(window.URL.createObjectURL(file));
    setIsLoading(true);

    // resize image
    // Resizer.imageFileResizer(file, 1300, 731, 'JPEG', 100, 0, async (uri) => {
    Resizer.imageFileResizer(file, 2000, 1200, 'JPEG', 100, 0, async (uri) => {
      formData.append('smallImage', uri);
      try {
        let { data } = await axios.post('/api/board/upload-image', formData);
        await console.log('IMAGE UPLOADED', data);

        setImage(data);
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

  const Redirect = () => (
    <>
      <div className="title-dx">
        <h3>Please add a breakdown first</h3>
      </div>
      <style jsx>{`
        .title-dx {
          color: #313131;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );

  return (
    <>
        {shots?.length === 0 && <Redirect />}
      <div className="new-scene-form">
        {shots?.length > 0 && (
          <FormCard
            title={
              newBoard.name
                ? `${viewer.sceneName}: ${newBoard.name} `
                : `${viewer.sceneName}: New Board`
            }>
            <div id="scene-name" className="section">
              <label className="label" htmlFor="board">
                Board Name
              </label>
              <input
                value={newBoard.sceneName}
                onChange={(e) =>
                  setNewBoard({ ...newBoard, name: e.target.value })
                }
                className="input"
                type={'text'}
                name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
                autoComplete={'text' && true}
                placeholder={'Enter Shot Name'}
                disabled={false}
              />
            </div>
            {/* Shot Number */}

            <div id="shot-number" className="section">
              <label className="label" htmlFor="shot">
                Shot Number
              </label>
              <select
                value={newBoard.forShot}
                onChange={(e) => {
                  const value = JSON.parse(e.target.value);
                  setNewBoard({
                    ...newBoard,
                    forShot: value.id,
                    shotNumber: value.number,
                  });
                }}
                name=""
                id="">
                <option selected disabled value="">
                  Select Shot
                </option>
                {shots?.map((shot, i) => (
                  <option
                    key={i}
                    value={`{"id":"${shot._id}", "number":${shot.shotNumber}}`}>
                    {shot.shotNumber}
                  </option>
                  // <option key={i}  value={JSON.stringify(`{"id":"${shot._id}", "number":"${shot.shotNumber}"}`)}>
                  //   {shot.shotNumber}
                  // </option>
                ))}
              </select>

              {/* <input
              value={newBoard.shot}
              onChange={(e) => setNewBoard({ ...newBoard, forShot: e.target.value })}
              className="input"
              type={'text'}
              name={''}
              autoComplete={'text' && true}
              placeholder={'Enter Shot Number'}
              disabled={false}
            /> */}
            </div>

            <div className="submit-section">
              <div className="button-label">Board Image</div>
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
                  Upload jpegs of any size
                </div>
              )}
              <div className="button-flex">
                <button onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? '...saving' : 'Save and Upload'}
                </button>
                {/* <Button
                color={'#3f3f3f'}
                disabled={isLoading}
                buttonName={isLoading ? '...saving' : 'Save and Continue'}
                onClick={handleSubmit}
              /> */}
              </div>
            </div>
          </FormCard>
        )}
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
        .submit-section {
          display: flex;
          align-items: flex-start;
          flex-direction: column;

          padding: 10px 0;
        }
        .disabledBtn {
          width: 80px;
          color: #777;
          background: lightblue;
          padding: 7px 20px;
          font-size: 17px;
          border-radius: 3px;
          border: none;
          cursor: pointer;

          transition: 0.4s ease-in;
        }
        .btn {
          width: 80px;

          background-color: aqua;
          padding: 7px 20px;
          font-size: 17px;
          border-radius: 3px;
          border: none;
          cursor: pointer;
          box-shadow: inset 0 0px 3px rgba(0, 0, 0, 0.2);
          transition: 0.4s ease-in;
          color: rgb(255, 255, 255);
        }
        .button-flex {
          display: flex;
          flex-direction: row;
        }
        .button-label {
          color: #333;
          font-size: small;
          color: rgb(105, 100, 85);
          padding-bottom: 15px;
        }
        .banner-preview-container {
          margin: 20px 0;
        }
        .banner-preview {
          // height: 200px;
          width: 100%;
          object-fit: cover;
        }
        .description {
          border: solid 1px #333;
          padding: 10px;
          margin: 20px 0;
          font-size: 0.9rem;
          color: rgb(97, 97, 97);
        }
      `}</style>
    </>
  );
};

export default NewBoardForm;
