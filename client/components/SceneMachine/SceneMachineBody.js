const SceneMachineBody = ({ children }) => {
  const BodyStyle = () => (
    <style jsx>{`
      #scene-machine-container {
        height: 100%;
        width: 100%;
        display: flex;

        justify-content: stretch;
      }

      .scene-machine {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: rgba(89, 119, 131, 0.7);
        padding: 10px 40px;
        padding-bottom: 30px;
        width: 100%;
        // border-top-left-radius: 14px;
        // border-top-right-radius: 14px;
        // border-bottom-left-radius: 8px;
        // border-bottom-right-radius: 8px;

        // box-shadow: inset 0 0px 10px, inset 0 0 15px, inset 0 0 5px;
        
        box-shadow: inset 0 0px 10px, inset 0 0 15px, inset 0 0 5px, 0 20px 100px 100px rgb(8, 8, 8), 0 0 20px rgb(8, 8, 7);
        // box-shadow: inset 0 0px 10px, inset 0 0 15px, inset 0 0 5px, 0 20px 100px 100px rgba(8, 8, 8, 0.418), 0 0 20px rgb(39, 44, 29);
      }

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
  );
  return (
    <>
      <BodyStyle />
      <div id="scene-machine-container" className="">
        <div id="scene-machine-location" className="scene-machine">
          {children}
        </div>
      </div>
    </>
  );
};

export default SceneMachineBody