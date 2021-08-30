import { useContext, useEffect, useState } from 'react';
import { initAddBoardState } from '../../../initialStates';
import {
  SetDetailViewContext,
  DetailViewContext,
  SetBoardsContext,
  BoardsContext,
} from '../../../contexts/SceneMachineProviders';
import { detailView, previewPreset } from '../../../dataModels';
import axios from 'axios';

const RightPanelBoardsView = ({
  activeShot,
  setActiveShot,
  viewer,
  preview,
  setPreview,
}) => {
  // const [boards, setBoards] = useState();
  // const [shots, setShots] = useState();
  const setDetail = useContext(SetDetailViewContext);
  const detail = useContext(DetailViewContext);
  const getBoards = useContext(SetBoardsContext);
  const boards = useContext(BoardsContext);

  // const getBoards = async () => {
  //   const {data} = await axios.get(`/api/boards/${viewer._id}`);
  //   setBoards(data)
  // }

  // reload viewer when detail view is changed
  useEffect(() => {
    console.log('VIEWER ID', viewer._id);
    getBoards(viewer._id);
    console.log('BOARDS: ', boards);
  }, [viewer]);
  console.log('ACTIVE SHOT: ', activeShot);

  // useEffect(() => {
  //   if (viewer.shotList.length === 0) setDetail(detailView.addShot)
  //   if (boards.length === 0) setDetail(detailView.addBoard);
  // }, [viewer]);

  // const getCurrentShots = async () => {
  //   try {
  //     const shots = await axios.get(`/api/shots/${viewer._id}`);
  //     setShots(shots.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getCurrentShots();
  //   // console.log('PREVIEW: ', preview)
  // }, []);

  // console.log('ACTIVE SHOT: ', activeShot);

  const handleAddBoard = () => {
    console.log('add board');
    setPreview(initAddBoardState);
    setDetail(detailView.addBoard);
  };

  const handleSelect = (i, board) => {
    setPreview({
      type: 'image',
      image: board.smallImage.Location,
      fullImage: board.fullImage.Location,
      sceneName: viewer.sceneName,
      panel: i + 1,
      shotNumber: board.shotNumber,
      id: board._id,
    });
    setActiveShot({ shot: board.shotNumber });
  };

  return (
    <div className="transport-panels-section">
      {/* <h2>Scene Panels: </h2> */}
      <div className="bread-crumb">
        <div>
          Boards &gt;{' '}
          {activeShot.shot ? 'Shot number: ' + activeShot.shot : 'All'}
        </div>
        {/* <div></div> */}
        <div>Layouts | Beat Boards | Scene Boards</div>
      </div>
      {
        viewer.shotList?.length === 0 && (
          <div className="board-titles">
            <h3>Please add a breakdown first!</h3>
          </div>
        )
        // <div className="transport-panels">
        // <section className="transport-panel-add">
        //   <div onClick={handleAddBoard}>
        //     <i class="fas fa-plus "></i>
        //   </div>
        // </section>
        //   </div>
      }
      {viewer.shotList?.length > 0 && (
        <>
          {' '}
          <div className="board-titles">Boards</div>
          <div className="transport-panels">
            {boards?.length > 0 &&
              boards?.map(
                (board, i) =>
                  (activeShot.shot === board.shotNumber && (
                    <>
                      {console.log('BOARD: ', board)}
                      <div
                        onClick={() => handleSelect(i, board)}
                        className="transport-panel">
                        <div className="transport-label">{board.panel}</div>
                        <div className="panel-index">{i + 1}</div>
                        <div className="panel-shot">{board.shotNumber}</div>
                        <img
                          className={board._id === preview.id && 'active'}
                          src={board.smallImage.Location}
                          alt=""
                        />
                        {/* <p>shot: {board.shotNumber}</p> */}
                      </div>
                    </>
                  )) ||
                  (activeShot.shot !== board.shotNumber && (
                    <div
                      onClick={() => handleSelect(i, board)}
                      className="transport-panel">
                      <div className="transport-label">{board.panel}</div>
                      <div className="panel-index">{i + 1}</div>
                      <div className="panel-shot">{board.shotNumber}</div>
                      <img
                        className={board._id === preview.id && 'active'}
                        src={board.smallImage.Location}
                        alt=""
                      />
                      {/* <p>shot: {board.shotNumber}</p> */}
                    </div>
                  ))
              )}

            <section className="transport-panel-add">
              <div onClick={handleAddBoard}>
                <i class="fas fa-plus "></i>
              </div>
            </section>
          </div>{' '}
        </>
      )}

      {/* <div className="board-titles">Layouts</div>
      <div className="transport-panels">
        {viewer.layoutBoards.map(
          (board, i) =>
            (activeShot.shot === board.shotNumber && (
              <>
                <div
                  onClick={() =>
                    setPreview({
                      image: board.board,
                      sceneName: viewer.sceneName,
                      panel: i + 1,
                      shotNumber: board.shotNumber,
                      id: board.id,
                    })
                  }
                  className="transport-panel">
                  <div className="transport-label">{board.panel}</div>
                  <div className="panel-index">{i + 1}</div>
                  <div className="panel-shot">{board.shotNumber}</div>
                  <img
                    className={board.id === preview.id && 'active'}
                    src={board.board}
                    alt=""
                  />

                </div>
              </>
            )) ||
            (activeShot === '' && (
              <div
                onClick={() =>
                  setPreview({
                    image: board.board,
                    sceneName: viewer.sceneName,
                    panel: i + 1,
                    shotNumber: board.shotNumber,
                    id: board.id,
                  })
                }
                className="transport-panel">
                <div className="transport-label">{board.panel}</div>
                <div className="panel-index">{i + 1}</div>
                <div className="panel-shot">{board.shotNumber}</div>
                <img
                  className={board.id === preview.id && 'active'}
                  src={board.board}
                  alt=""
                />

              </div>
            ))
        )}

        <section className="transport-panel-add">
          <div onClick={() => setPreview(initPreviewState)}>
            <i class="fas fa-plus "></i>
          </div>
        </section>
      </div> */}

      {/* <div className="board-titles">Beat Boards</div>
      <div className="transport-panels">
        {viewer.beatBoards.map(
          (board, i) =>
            (activeShot.shot === board.shotNumber && (
              <>
                <div
                  onClick={() =>
                    setPreview({
                      image: board.board,
                      sceneName: viewer.sceneName,
                      panel: i + 1,
                      shotNumber: board.shotNumber,
                      id: board.id,
                    })
                  }
                  className="transport-panel">
                  <div className="transport-label">{board.panel}</div>
                  <div className="panel-index">{i + 1}</div>
                  <div className="panel-shot">{board.shotNumber}</div>
                  <img
                    className={board.id === preview.id && 'active'}
                    src={board.board}
                    alt=""
                  />

                </div>
              </>
            )) ||
            (activeShot === '' && (
              <div
                onClick={() =>
                  setPreview({
                    image: board.board,
                    sceneName: viewer.sceneName,
                    panel: i + 1,
                    shotNumber: board.shotNumber,
                    id: board.id,
                  })
                }
                className="transport-panel">
                <div className="transport-label">{board.panel}</div>
                <div className="panel-index">{i + 1}</div>
                <div className="panel-shot">{board.shotNumber}</div>
                <img
                  className={board.id === preview.id && 'active'}
                  src={board.board}
                  alt=""
                />

              </div>
            ))
        )}

        <section className="transport-panel-add">
          <div onClick={() => setPreview(initPreviewState)}>
            <i class="fas fa-plus "></i>
          </div>
        </section>
      </div> */}

      {/* <div className="board-titles">Scene Boards</div>
      <div className="transport-panels">
        {viewer.storyBoards.map(
          (board, i) =>
            (activeShot.shot === board.shotNumber && (
              <>
                <div
                  onClick={() =>
                    setPreview({
                      image: board.board,
                      sceneName: viewer.sceneName,
                      panel: i + 1,
                      shotNumber: board.shotNumber,
                      id: board.id,
                    })
                  }
                  className="transport-panel">
                  <div className="transport-label">{board.panel}</div>
                  <div className="panel-index">{i + 1}</div>
                  <div className="panel-shot">{board.shotNumber}</div>
                  <img
                    className={board.id === preview.id && 'active'}
                    src={board.board}
                    alt=""
                  />
                </div>
              </>
            )) ||
            (activeShot === '' && (
              <div
                onClick={() =>
                  setPreview({
                    image: board.board,
                    sceneName: viewer.sceneName,
                    panel: i + 1,
                    shotNumber: board.shotNumber,
                    id: board.id,
                  })
                }
                className="transport-panel">
                <div className="transport-label">{board.panel}</div>
                <div className="panel-index">{i + 1}</div>
                <div className="panel-shot">{board.shotNumber}</div>
                <img
                  className={board.id === preview.id && 'active'}
                  src={board.board}
                  alt=""
                />
              </div>
            ))
        )}

        <section className="transport-panel-add">
          <div onClick={() => setPreview(initPreviewState)}>
            <i class="fas fa-plus "></i>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default RightPanelBoardsView;
