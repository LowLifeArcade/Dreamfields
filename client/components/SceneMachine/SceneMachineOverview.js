const SceneMachineOverview = ({ children }) => {
  return (
    <div className="scene-overview">
      {children}
      <style jsx>{`
        .scene-overview {
          height: 100%;
          overflow: scroll;
          background: rgba(46, 35, 35, 0.6);
          margin-bottom: 10px;
          width: 100%;
          display: flex;
          border: solid 1px rgb(22, 19, 19);
          border-radius: 10px;
          box-shadow: inset 0 0px 10px, 0 0 4px;
        }

        @media (max-width: 800px) {
          .scene-overview {
            flex-direction: column;
            // height: 100%;
          }

          .left-panel {
            width: 100%;
          }
          .right-panel {
            width: 100%;
          }
          .scene-overview-right-container > div {
            max-height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default SceneMachineOverview