import { useState } from 'react';
import axios from 'axios';

/**
 * Video Upload Component
 * 
 * This will allow the scene that is currently
 * selected to upload a video to that scene.
 */
const RightPanelVideoView = ({viewer}) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
console.log('viewer of scene in videoview',viewer)
  const handleSubmit = () => {
    // 
  }

  const handleVideo = async (e) => {
    try {
      const file = e.target.files[0];
      // console.log('video file', file)
      setLoading(true);
      const videoData = new FormData();
      videoData.append('video', file);
      console.log(file)
      // console.log('video data', videoData);
      // save progress bar and send video as formdata to backend
      const { data } = await axios.post('/api/field/video-upload', videoData, {
        onUploadProgress: (e) => {
          setProgress(Math.round((100 * e.loaded) / e.total));
        },
      });
      console.log('response ',data)
      // once res is resceived
      // console.log('video upload', data);
      // setNewSceneForm({
      //   ...newSceneForm,
      //   video: { ...newSceneForm.video, s3: { ...data } },
      // });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="body">
      <label className="label" htmlFor="scene-video">
        Upload Video
      </label>
      <input
      // value
      // onChange
        className="input-text"
        type={'text'}
        name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
        // autoComplete={'text' && true}
        placeholder={'Give a name for this video'}
        // disabled={false}
      />
      {loading && <>Upload: {progress} %</>}
        <section className="video-btn">
          <input
            disabled={loading}
            onChange={handleVideo}
            type="file"
            accept="video/*"
          />
        </section>
        <label htmlFor="submit">Submit
        </label>
          <button name='submit' onClick={handleSubmit} >Submit</button>
        
      </div>

      <style jsx>{`
        .body {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100%;
        }
        .video-btn > input {
          // display: none;
        }
        .video-btn {
          padding: 10px;
          // background: rgb(74, 141, 102);
        }
      `}</style>
    </>
  );
};

export default RightPanelVideoView;
