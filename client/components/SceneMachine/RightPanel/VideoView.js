import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PreviewProviderContext } from '../../../contexts/SceneMachineProviders';
import { ProjectContext } from '../../../contexts/SceneMachineProviders';

/**
 * Video Upload Component
 *
 * This will allow the scene that is currently
 * selected to upload a video to that scene.
 */
const VideoView = ({ viewer, setDetail }) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoName, setVideoName] = useState();
  const [videoData, setVideoData] = useState();
  const setPreview = useContext(PreviewProviderContext)
  const project = useContext(ProjectContext);


  useEffect(() => {
    setPreview((preview) => ({
      ...preview,
      video: videoData?.Location,
      type: videoData?.Location ? 'video' : 'default',
    }));
  }, [videoData]);

  const handleVideo = async (e) => {
    // console.log('PROJECT CREATOR',project.creator._id)
    // console.log('PROJECT CONTRIBUTORS',project.contributors)
    try {
      const file = e.target.files[0];
      setLoading(true);
      const videoData = new FormData(); 
      videoData.append('video', file); 
      // videoData.append('contributors', JSON.stringify(project.contributors))

      // save progress bar and send video as formdata to backend
      // possibly send videoData in an object with scene info and update the scene at the same time
      /**
       * {_id: project._id,
       * videoData}
       * 
       */

      /**send user instead of creator */
      const { data } = await axios.post(`/api/scene/video-upload/${scene._id}`, videoData, {
        onUploadProgress: (e) => {
          setProgress(Math.round((100 * e.loaded) / e.total));
        },
      });
      await setVideoData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  console.log('VIDEO DATA',videoData)

  const handleRemoveVideo = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/scene/video-remove/${project.creator._id}`, videoData);
      console.log('remove video response data', data);
      if (data.ok === true) {
        setVideoData('');
        setVideoName('');
        setLoading(false);
      }
      console.log('error deleting video');
    } catch (err) {
      setLoading(false);
      throw new Error(err);
    }
  };

  const handleSubmit = () => {
    // setPreview with video Location from scene after putting in scene
    setDetail('overview');
  };
  
  return (
    <>
      <div className="transport-panels-section">
        <div className="transport-panels">
          <div className="body">
            <label className="label" htmlFor="scene-video">
              Upload Video
            </label>
            <input
              // value
              onChange={(e) => setVideoName(e.target.value)}
              className="input-text"
              type={'text'}
              name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
              // autoComplete={'text' && true}
              placeholder={'Give a name for this video'}
              // disabled={false}
            />
            {loading && <>Upload: {progress} %</>}
            <div className="video-upload-section">
              {!loading && videoData?.Location ? (
                <button onClick={handleRemoveVideo}>remove video</button>
              ) : (
                <section className="video-btn">
                  <input
                    disabled={loading}
                    onChange={handleVideo}
                    type="file"
                    accept="video/*"
                  />
                </section>
              )}
            </div>
            <label htmlFor="submit"></label>
            <button name="submit" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-upload-section {
          padding: 30px 0;
        }
        .body {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }
        .video-btn > input {
          // display: none;
        }
        .video-btn {
          padding: 20px;
          // background: rgb(74, 141, 102);
        }
        button {
          border: none;
          border-radius: 2px;
          background: #c1ece7;
          box-shadow: 0 0 8px;
          padding: 5px 10px;
        }
      `}</style>
    </>
  );
};

export default VideoView;
