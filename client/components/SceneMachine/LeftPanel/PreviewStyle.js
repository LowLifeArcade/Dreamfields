export const PreviewStyle = () => {
  return (
    <style jsx>{`
      .left-panel {
        padding: 10px;
        width: 40%;
        max-height: 100%;
        overflow: auto;
      }

      .viewer {
        position: relative;
        // max-width: 500px;
        // height: 370px;
        border-radius: 5px;
        // height: 100%;
        // border: solid 15px rgb(24, 4, 4);
        box-shadow: inset 0 0px 10px rgba(0, 0, 0, 1);
      }
      .viewer > img {
        // max-height: 90%;
        padding: 8px;
        // height: 100%;
        width: 100%;
        // max-height: 270px;
      }

      .viewer > div {
        color: rgba(238, 238, 238, 0.699);
        position: absolute;
        bottom: 18px;
        right: 10px;
        cursor: pointer;
      }
      .preview-state {
        color: rgba(238, 238, 238, 0.699);
        position: absolute;
        bottom: 18px;
        left: 15px;
      }

      .transport-title {
        border-bottom: solid 1px;
        background: rgb(206, 230, 169);
        // border: solid 1px rgb(65, 11, 11);
        border-radius: 3px;
        margin: 10px 0;
        box-shadow: inset 0 0 10px, inset 0 0 5px, inset 0 0 3px;
        padding: 10px 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .transport-title > div {
        width: 100%;
        height: 30px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .transport-viewer-controls {
        // height: 100%;
        display: flex;
        justify-content: center;
      }
      .transport-viewer-controls > button {
        // margin-top: 10px;
        padding: 13px 10px;
        margin: 1px;
        box-shadow: inset 0 4px 0px,
          inset -2px -2px 2px 0px rgba(102, 91, 91, 0.774),
          inset 2px -2px 2px 0px rgba(102, 91, 91, 0.774);
        color: rgb(141, 29, 29);
        cursor: pointer;
      }
    `}</style>
  );
};