const RightPanelBoardsView = ({activeShot, viewer, preview, setPreview}) => {
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

      <div className="board-titles">Layouts</div>
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
                  {/* <p>shot: {board.shotNumber}</p> */}
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
                {/* <p>shot: {board.shotNumber}</p> */}
              </div>
            ))
        )}

        <section className="transport-panel-add">
          <div onClick={() => setPreview(initPreviewState)}>
            <i class="fas fa-plus "></i>
          </div>
        </section>
      </div>

      <div className="board-titles">Beat Boards</div>
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
                  {/* <p>shot: {board.shotNumber}</p> */}
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
                {/* <p>shot: {board.shotNumber}</p> */}
              </div>
            ))
        )}

        <section className="transport-panel-add">
          <div onClick={() => setPreview(initPreviewState)}>
            <i class="fas fa-plus "></i>
          </div>
        </section>
      </div>

      <div className="board-titles">Scene Boards</div>
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
                  {/* <p>shot: {board.shotNumber}</p> */}
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
                {/* <p>shot: {board.shotNumber}</p> */}
              </div>
            ))
        )}

        <section className="transport-panel-add">
          <div onClick={() => setPreview(initPreviewState)}>
            <i class="fas fa-plus "></i>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default RightPanelBoardsView;
