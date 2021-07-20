const RightPanelFrame = ({ children }) => {
  return (
    <div className="right-panel">
      <div className="scene-overview-right-container">
        <div className="transport-frame">{children}</div>
      </div>
      <style jsx>{`
        .right-panel {
          width: 60%;
          max-height: 100%;
          overflow: auto;
        }
        .scene-overview-right-container {
          // background: #fff;
          padding: 10px;
          height: 100%;
          max-height: 100%;
        }
        .transport-frame {
          box-shadow: inset 0 0 20px, inset 0 0 4px, inset 0 0 10px;
          height: 100%;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          // align-items: flex-start;
        }
      `}</style>
    </div>
  );
};

export default RightPanelFrame