export const PreviewStyle = () => {
  return (
    <style jsx>{`
      .img, .video {
        width: 100%;
        aspect-ratio: 1.7777777777777777;
        // max-height: 20rem;
        border-radius: 8px;
        box-shadow: 0 0 5px rgb(0, 0, 0), 0 0 7px, 0 0 8px, 0 0 1px, inset 0 0 10px rgba(63, 63, 63, 0.699);
      }
      .left-panel {
        padding: 10px;
        width: 40%;
        max-height: 100%;
        overflow: auto;
      }

      .viewer-frame {
        // max-width: 500px;
        // height: 370px;
        border-radius: 5px;
        // height: 100%;
        // border: solid 15px rgb(24, 4, 4);
        box-shadow: inset 0 0px 10px rgba(0, 0, 0, 1), inset 0 0 5px, inset 0 0 8px;
      }
      .viewer-media {
        position: relative;
        // max-height: 90%;
        padding: 13px;
        // height: 100%;
        width: 100%;

        // max-height: 270px;
      }

      .media {
        object-fit: cover;
      }

      .expand {
        color: rgba(238, 238, 238, 0.699);
        position: absolute;
        bottom: 25px;
        right: 25px;
        cursor: pointer;
      }
      .preview-state {
        color: rgba(238, 238, 238, 0.699);
        position: absolute;
        bottom: 25px;
        left: 25px;
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
