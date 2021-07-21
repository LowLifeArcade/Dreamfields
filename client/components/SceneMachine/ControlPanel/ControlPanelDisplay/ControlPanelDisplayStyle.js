export const ControlPanelDisplayStyle = () => {
  return (
    <style jsx>{`
      .control-panel {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }


      .control-panel-display {
        font-size: 1rem;
        color: rgb(10, 59, 6);
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        width: 200px;
        border-radius: 4px;
        background: rgb(180, 224, 154);
        // box-shadow: inset 0 0 10px, inset 0 0 3px, inset 0 0 10px;
        box-shadow: inset 0 0px 5px rgba(0, 0, 0, 0.8),
          inset 0 0px 3px rgba(0, 0, 0, 0.8);
        // box-shadow: 0 0px 10px rgba(256, 256, 256, 0.8), 0 0px 5px rgba(256, 256, 256, 0.8);
      }
      .control-panel-other {
        height: 60px;
        display: flex;
        align-items: center;
        margin: 5px;
        width: 200px;
        flex-direction: row-reverse;
      }


    `}</style>
  );
};
