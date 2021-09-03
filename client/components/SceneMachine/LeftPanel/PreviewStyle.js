export const PreviewStyle = () => {
  return (
    <style jsx>{`
      .img {
        width: 100%;
        // aspect-ratio: 1.7777777777777777;
        // max-height: 20rem;
        cursor: pointer;
        border-radius: 4px;
        // box-shadow: 0 0 5px rgba(240, 240, 240, 0.212),
        //   0 0 2px rgba(240, 240, 240, 0.452), 0 0 5px rgba(233, 224, 194, 0.822),
        //   0 0 1px, inset 0 0 15px rgba(238, 238, 238, 0.849);
      }

      .video {
        width: 100%;
        aspect-ratio: 1.7777777777777777;
        // max-height: 20rem;
        border-radius: 8px;
        box-shadow: 0 0 5px rgb(0, 0, 0), 0 0 7px, 0 0 8px, 0 0 1px,
          inset 0 0 10px rgba(63, 63, 63, 0.699);
      }

      .left-panel {
        padding: 10px;
        width: 40%;
        max-height: 100%;
        overflow: auto;
      }

      .viewer-frame {
        background: rgba(39, 39, 39, 0.534);
        // max-width: 500px;
        // height: 370px;
        border-radius: 5px 5px 5px 5px;
        // height: 100%;
        // border: solid 15px rgb(24, 4, 4);
        box-shadow: inset 0 0px 15px rgba(0, 0, 0, 0.192), inset 0 0 5px,
          inset 0 0 8px rgba(43, 43, 43, 0.034);
      }
      .viewer-media {
        position: relative;
        // max-height: 90%;
        padding: 13px;
        // height: 100%;
        // background: rgb(66, 66, 66);
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
        border-radius: 35px;
        margin: 20px 30px;
        box-shadow: inset 0 0 30px rgba(15, 15, 15, 0.247), inset 0 0 5px,
          inset 0 0 3px, 0 0 5px rgba(163, 162, 162, 0.212),
          0 0 10px rgba(241, 241, 241, 0.514),
          0 5px 10px rgba(40, 44, 41, 0.822);
        padding: 7px 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .transport-title-container {
        // content: "";
        background: rgba(163, 163, 163, 0.466);

        margin: 20px;
        margin-bottom: 30px;
        padding: 1px;
        border-radius: 15px;
        border: solid 1px rgba(42, 44, 43, 0.603);
        box-shadow: 0 0px 7px rgba(223, 223, 223, 0.253),
          0 0px 10px rgba(218, 218, 218, 0.329),
          0 10px 20px rgba(8, 8, 8, 0.877), 0 4px 20px rgba(63, 63, 63, 0.678);
      }
      .transport-title > div {
        margin: 10px 0;
        padding: 10px 0;
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
        // background: rgba(163, 163, 163, 0.459);
        background: rgba(69, 128, 167, 0.267);
        border-radius: 5px;
        margin: 20px 100px;
        border: solid 1px rgba(27, 29, 28, 0.452);
        box-shadow: 0 -2px 3px rgba(255, 255, 255, 0.301),
          3px -2px 10px rgba(20, 42, 56, 0.322),
          -3px -2px 10px rgba(20, 42, 56, 0.322),
          6px 5px 10px rgba(121, 121, 121, 0.514),
          -6px 5px 10px rgba(121, 121, 121, 0.514),
          0px 4px 15px rgba(0, 0, 0, 0.521),
          1px 2px 2px rgba(100, 100, 100, 0.705), 
          -1px 2px 2px rgba(240, 240, 240, 0.705), 
          0 20px 30px rgba(0, 0, 0, 0.842);
        padding: 15px;
        display: flex;
        justify-content: center;
      }
      // .transport-viewer-controls::after {
      //   content: "";
      //   display: flex;
      //   align-items: center;
      //   justify-content: center;
      //   display: block;
      //   clear: both;
      //   border-radius: 50px;
      //   height: 5px;
      //   width: 5px;
      //   border: solid 1px rgba(27, 29, 28, 0.452);

      //   // box-shadow: inset 0 0px 10px rgba(0, 0, 0, 1), inset 0 0 5px, inset 0 0 8px;
      // }
      .transport-viewer-controls > button {
        // margin-top: 10px;
        border: none;
        padding: 13px 10px;
        margin: 2px;
        border-radius: 1px;
        box-shadow: inset 0 2px 0 rgb(255, 255, 255), inset 0 4px 0px, 0 2px 2px 2px rgba(31, 31, 31, 0.445);
        //  -2px -2px 2px 0px rgba(102, 91, 91, 0.774);
        // inset 2px -2px 2px 0px rgba(102, 91, 91, 0.774);
        color: rgb(141, 29, 29);
        cursor: pointer;
      }
    `}</style>
  );
};
