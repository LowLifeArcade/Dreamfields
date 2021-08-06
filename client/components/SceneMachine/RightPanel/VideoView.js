import { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import {
  PreviewProviderContext,
  SetViewerContext,
  ProjectContext,
} from '../../../contexts/SceneMachineProviders';
// import { ProjectContext } from '../../../contexts/SceneMachineProviders';

/**
 * Video Upload Component
 *
 * This will allow the scene that is currently
 * selected to upload a video to that scene.
 */

const VideoEdit = ({ setAddVideo, setDetail, viewer }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingSN, setIsEditingSN] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoName, setVideoName] = useState();
  const [videoShotNumber, setVideoShotNumber] = useState();
  const [videoData, setVideoData] = useState();
  const [videoThumb, setVideoThumb] = useState();
  const setPreview = useContext(PreviewProviderContext);
  const setViewer = useContext(SetViewerContext);
  const project = useContext(ProjectContext);
  const videoInput = useRef();
  const videoSN = useRef();
  useEffect(() => {
    if (isEditing) {
      videoInput.current.focus();
    }
    if (isEditingSN) {
      videoSN.current.focus();
    }
  });

  useEffect(() => {
    setPreview((preview) => ({
      ...preview,
      video: videoData?.Location,
      type: videoData?.Location ? 'video' : 'default',
    }));
  }, [videoData]);

  const handleVideo = async (e) => {
    console.log('VIEWER IN VIDEO UPLOAD', viewer);
    // return

    try {
      const file = e.target.files[0];
      setLoading(true);
      const videoData = new FormData();
      videoData.append('video', file);

      const { data } = await axios.post(
        `/api/scene/video-upload/${viewer._id}`,
        videoData,
        {
          onUploadProgress: (e) => {
            setProgress(Math.round((100 * e.loaded) / e.total));
          },
        }
      );
      await console.log('VIDEO DATA', data);
      // const returnedData = {
      //   Location: 'https://dreamfields-bucket.s3.us-west-1.amazonaws.com/M3Cj--wcPikYLzcj05QSC.quicktime',
      //   Bucket: 'dreamfields-bucket',
      //   Key: 'M3Cj--wcPikYLzcj05QSC.quicktime',
      //   ETag: '"1d6f3e4fdad50601ca63ab686f151ae3-7"',
      // };
      await setVideoData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleRemoveVideo = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `/api/scene/video-remove/${project.creator._id}`,
        videoData
      );
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

  const handleSubmit = async () => {
    const { data } = await axios.post(`/api/scene/video-add/${viewer._id}`, {
      videoName,
      videoData,
      videoShotNumber,
    });
    console.log('VIDEO ADDED', data);
    setViewer(data);
    // await axios.post(`/api/scene/video-add/${viewer._id}`, videoData);
    setAddVideo(false);
  };

  return (
    <>
      <div className="transport-panels-section">
        <div className="transport-panels">
          <div className="video-add-body">
            <button onClick={(e) => setAddVideo(false)}>Cancel</button>
            {isEditing ? (
              <>
                <input
                  value={videoName}
                  ref={videoInput}
                  onChange={(e) => setVideoName(e.target.value)}
                  className="input-text"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setIsEditing(false);
                    }
                  }}
                  
                  type={'text'}
                  name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
                  // autoComplete={'text' && true}
                  onBlur={(e) => setIsEditing(false)}
                  placeholder={'Give a name for this video'}
                  // disabled={false}
                />
              </>
            ) : (
              <>
                <label
                  onClick={(e) => setIsEditing(true)}
                  className="label"
                  htmlFor="scene-video">
                  {videoName ? <div>{videoName}</div> : <div>Video Name</div>}
                </label>
              </>
            )}
            {isEditingSN ? (
              <>
                <input
                  value={videoShotNumber}
                  ref={videoSN}
                  onChange={(e) => setVideoShotNumber(e.target.value)}
                  className="input-text"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setIsEditingSN(false);
                    }
                  }}
                  type={'text'}
                  name={''} // use this field to handle state with [e.target.name]: [e.target.value] in the object
                  // autoComplete={'text' && true}
                  onBlur={(e) => setIsEditingSN(false)}
                  placeholder={'Give a name for this video'}
                  // disabled={false}
                />
              </>
            ) : (
              <>
                <label
                  onClick={(e) => setIsEditingSN(true)}
                  className="label"
                  htmlFor="scene-video">
                  {videoShotNumber ? (
                    <div>{videoShotNumber}</div>
                  ) : (
                    <div>Shot Number</div>
                  )}
                </label>
              </>
            )}

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
            <button disabled={!videoData} name="submit" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-upload-section {
          padding: 30px 0;
        }
        .video-add-body {
          margin-top: 20px;
          background: #ebe9e3;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          width: 100%;
          box-shadow: 0 3px 10px;
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
          background: #86dfd4;

          padding: 5px 10px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
const VideoView = ({ activeShot, viewer, preview, setPreview, setDetail }) => {
  const [addVideo, setAddVideo] = useState(false);
  console.log('VIDEO VIEW VIEWER DATA', viewer)
  return (
    <>
      <div className="transport-panels-section">
        {/* <h2>Scene Panels: </h2> */}
        <div className="bread-crumb">
          <div>
            Videos &gt;{' '}
            {activeShot.shot ? 'Shot number: ' + activeShot.shot : 'All'}
          </div>
          {/* <div></div> */}
          <div>Videos | Beat Boards | Scene Boards</div>
        </div>

        {!addVideo && (
          <>
            <div className="board-titles">Videos</div>
            <div className="transport-panels">
              {viewer.videos?.map(
                //TODO: change to viewer.videos.map
                // Make it so that it's broken up by shot number

                /**
                 * 'video' is the video object
                 * 
                 * @param {Object} video `{sceneId, videoData, videoName, _id}`
                 * @param {string} video.sceneId
                 * @param {string} video.videoName
                 * @param {string} video._id
                 * 
                 * 'Video Data' is the video data that is uploaded to the server
                 * @param {Object} video.videoData `{Bucket, ETag, Key, Location}`
                 * @param {string} video.videoData.Bucket
                 * @param {string} video.videoData.ETag
                 * @param {string} video.videoData.Key
                 * @param {string} video.videoData.Location
                 */
                (video, i) =>
                  (true && (
                    <>
                      <div className="transport-panel">
                        {console.log(video._id)}
                        {console.log(preview)}
                        <img
                          onClick={() =>
                            setPreview({
                              video: video.videoData?.Location,
                              type: 'video',
                              image: '',
                              sceneName: video.videoName,
                              panel: i + 1,
                              shotNumber: video.videoShotNumber,
                              id: video._id,
                              // id: video.id,
                            })
                          }
                          src={`https://picsum.photos/id/1${i}/100/50`}
                          // className="img-transport-panel active"
                          className={`img-transport-panel ${video._id === preview.id && 'active'}`}
                        />
                        <div className="panel-index">{i + 1}</div>
                        <div className="panel-shot">
                          {video.videoShotNumber}
                        </div>
                        <div className="transport-video-label">
                          {video.videoName}
                        </div>
                      </div>

                      {/* <p>shot: {board.shotNumber}</p> */}
                    </>
                  )) ||
                  (false && (
                    <div className="transport-panel">
                      <div className="transport-label">
                        <img
                          onClick={() =>
                            setPreview({
                              video: video.videoData?.Location,
                              type: 'video',
                              image: '',
                              sceneName: video.videoName,
                              panel: i + 1,
                              shotNumber: video.videoShotNumber,
                              // id: video.id,
                            })
                          }
                          src={`https://picsum.photos/id/1${i}/100/50`}
                          className="img-transport-panel"
                        />
                        <div className="panel-index">{i + 1}</div>
                        <div className="panel-shot">
                          {video.videoShotNumber}
                        </div>
                        <div className="transport-video-label">
                          {video.videoName}
                        </div>
                      </div>
                      <div className="panel-index">{i + 1}</div>
                      <div className="panel-shot">
                        {video.Location?.Location}
                      </div>
                      {/* <img
                        className={video._id === preview.id && 'active'}
                        src={video.videoName}
                        alt=""
                      /> */}
                      {/* <p>shot: {board.shotNumber}</p> */}
                    </div>
                  ))
              )}

              <section className="transport-video-add">
                <div onClick={() => setAddVideo(true)}>
                  <i className="fas fa-plus "></i>
                </div>
              </section>
            </div>
            {/* <style jsx>{`
            .transport-video-panel {
              padding: 20px;
            }
            `}</style> */}
          </>
        )}
        <style jsx>{`
          .transport-video-label {
            font-size: 0.8em;
            color: #ebe9e3;
          }
          .transport-video-add {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 110px;
            height: 80px;
          }

          .transport-video-add > div > i {
            color: #b6b6b6;
            // background: #e6e6e6;
            z-index: 1;
          }
          .transport-video-add > div {
            cursor: pointer;
            color: #2f3c41;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(228, 227, 227, 0.192);
            border-radius: 50%;
            width: 33px;
            height: 33px;
            padding: 10px 0;
            border: none;
          }
          .img-transport-panel .active {
        border: solid 2px rgb(28, 226, 183);
      }
        `}</style>
      </div>

      {addVideo && (
        <VideoEdit
          setAddVideo={setAddVideo}
          setDetail={setDetail}
          viewer={viewer}
        />
      )}
    </>
  );
};

export default VideoView;
