const SceneMachineStripStyle = () => {
  return (
    <style jsx>{`
      .section-strip-container {
        background: rgb(218, 210, 210);
        // padding-top: 20px;
        width: 100%;
        height: 100px;
        border: solid 1px rgb(22, 19, 19);
        border-radius: 2px;
        box-shadow: inset 0 0px 10px, inset 0 0 4px, inset 0 0 4px, 0 0 5px,
          0 0 7px;
      }
      .scenes-section-strip {
        // background: rgb(226, 222, 205);
        background: rgb(29, 24, 24);
        display: flex;
        padding: 3px;
        overflow-x: scroll;
        margin: 5px 0;
        box-shadow: 0 0 3px;
        height: 80px;
        // border-radius: 7px;
        // margin-left: 30px;
        // margin-right: 30px;
      }
      .scene-strip {
        border-top: dashed 5.5px rgb(87, 85, 85);
        border-bottom: dashed 5.5px rgb(107, 104, 104);
        // border-top: dashed 6px rgb(201, 196, 196);
        // border-bottom: dashed 6px rgb(201, 196, 196);
        // border-bottom: dashed 8px rgb(7, 7, 5);;
        // width: 89px;
        background: #1D1818;
        padding: 6px 20px;
        margin: 0 3px;
        // border-right: solid 2px rgb(15, 11, 11);
        // cursor: pointer;
        position: relative;
      }

      .scenes-section-strip::-webkit-scrollbar {
        display: none;
      }

      .empty-strip-area > img {
        height: 50px;
        background: #e0e0e0;
        border-radius: 3px;
        // position: relative;
        // transform: rotate(-90deg);
        
        cursor: pointer;
        opacity: 0.6;
      }
      .empty-strip-area {
        
        height: 50px;
        // width: 88.89px;
        width: 89px;
        background: #3f3f3f;
        // position: relative;
        // transform: rotate(-90deg);
        // opacity: 0.6;
        cursor: pointer;
        border-radius: 3px;
      }
      .active-strip-border {
        border: solid 1px rgb(54, 41, 41);
      }
      .active-strip > img {
        // border: solid 2px rgb(220, 226, 171);
        // position: absolute;
        // outline: solid #b4b4b4 2px;
        opacity: 1;
        // border-radius: 0px;
        // width: 110px;
        // height: 60px;
        // background: rgba(3, 150, 3);
        // box-shadow: 0 0 2px rgba(231, 230, 230, 0.2),
        //   0 0 6px rgba(231, 230, 230, 0.747), 0px 0px 10px rgba(253, 253, 253, 0.582);
        // margin: 1px;
      }
      .scene-strip > p {
        padding: 1px;
        background: rgba(0, 0, 0, 0.5);
        bottom: 12px;
        position: absolute;
        font-size: 0.6rem;
        color: rgb(179, 174, 174);
      }
      .add {
        cursor: pointer;
        color: #2f3c41;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        padding: 10px 0;
        border: none;
      }
      .scene-strip-add {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 89px;
      }
      .scene-strip-add > div {
        top: 15px;
        // left: 48px;
        cursor: pointer;
        color: #2f3c41;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(228, 227, 227, 0.9);
        border-radius: 50%;
        width: 33px;
        height: 33px;
        // padding: 10px 0;
        position: absolute;
        border: none;
      }
    `}</style>
  );
};

export default SceneMachineStripStyle