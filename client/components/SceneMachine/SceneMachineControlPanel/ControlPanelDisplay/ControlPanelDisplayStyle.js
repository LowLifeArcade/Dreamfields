export const ControlPanelDisplayStyle = () => {
  return (
    <style jsx>{`
      .control-panel {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .control-panel-buttons {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        cursor: pointer;
        // width: 30px;
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

      .btn {
        width: 45px;
        height: 43px;
        // border: solid 1px rgb(10, 1, 1);
        border: solid 1px rgb(54, 58, 61);
        border-right: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .btn:last-child {
        border-right: solid 1px rgb(54, 58, 61);
        // border-right: solid 1px rgb(10, 1, 1);
      }

      .btn-inside {
        width: 25px;
        height: 25px;
        border-radius: 2px;
        background: rgb(240, 248, 204);
        border: solid 1px rgb(17, 5, 1);
        transition: 0.2s ease-in;

        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8),
          inset 0 0 3px rgba(0, 0, 0, 1), 0 0 1px rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .btn-inside.active {
        transition: 0.4s ease-in;
        width: 25px;
        height: 25px;
        border-radius: 3px;
        border: solid 1px rgb(165, 150, 86);
        background: rgb(248, 227, 42);
        // background: rgb(248, 227, 42);
        // background: rgb(210, 248, 42);

        box-shadow: 0 0 5px rgba(209, 209, 209, 0.8),
          0 0 3px rgb(214, 214, 214), inset 0 0 1px rgba(228, 228, 228, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .btn-mini {
        cursor: pointer;
        color: #152125;
        padding: 2px 8px;
      }
    `}</style>
  );
};
