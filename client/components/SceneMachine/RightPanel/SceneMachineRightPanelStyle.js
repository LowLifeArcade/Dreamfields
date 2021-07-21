export const SceneMachineRightPanelStyle = ({ background }) => {
  return (
    <style jsx>{`
      .transport > div > button {
        font-size: 0.6rem;
        cursor: pointer;
        color: #fff;
        background: rgb(57, 92, 97);
        // border: solid 1px rgb(54, 23, 23);
        border-style: double;
        padding: 2px 4px;
        box-shadow:  2px 2px 2px rgba(0, 0, 0, 0.5), 0 1px 2px black, inset -.4px -.5px .6px black;
      }
      .transport {
        // box-shadow: inset 0 0 10px;
        border-bottom: solid 1px;
        // border-radius: 5px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .transport-left-controls {
        width: 30px;
        display: flex;
      }
      .transport-center-controls {
        width: 30px;
        display: flex;
        justify-content: center;
      }
      .transport-right-controls {
        width: 30px;
        display: flex;
        // flex-direction: row-reverse;
        justify-content: flex-end;
      }
      .btn-small {
        background: #1b1e1f;
        box-shadow: 0 2px 2px;
      }

      .btn-small.active {
        color: rgb(7, 245, 233);
        // box-shadow: 0 0 1px rgba(167, 175, 175, 0.3);
      }
      .transport-overview {
        // z-index: 1;
        background-color: ${background};
        width: auto;
        // border: solid 1px rgb(65, 11, 11);
        margin: 15px;

        // overflow: auto;
        height: 100%;
        // max-height: 100%;
        border-radius: 10px;
        // box-shadow: inset 0 0 10px, inset 0 0 3px;
        box-shadow:  0 0 10px, 0 0 9px, 0 0 8px, 0 0 3px, 0 0 6px, inset 0 0 3px;
        padding: 0 3px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        z-index: 2;
      }
      .transport-overview-frame {
        padding: 20px;
      }
      .transport-description {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .transport-description > h3 {
        margin-bottom: 20px;
        background: #fff;
        padding: 10px 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
      }

      .transport-description-detail {
        background: #fff;
        line-height: 1.8rem;
        text-indent: 2rem;
        padding: 20px;
        border: solid 1px;
      }
      .details-table {
        padding: 20px;
        width: 100%;
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 200px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
      }

      .details-table thead tr {
        // background-color: #009879;
        color: #ffffff;
        text-align: left;
      }

      .details-table th,
      .details-table td {
        padding: 12px 15px;
      }

      .details-table tbody tr {
        border-bottom: 1px solid #aaaaaa;
      }

      .details-table tbody tr:nth-of-type(odd) {
        background-color: #f3f3f3;
      }

      // .details-table tbody tr:last-of-type {
      //   border-bottom: 2px solid #009879;
      // }

      //   .details-table tbody tr.active-row {
      //     font-weight: bold;
      //     color: #009879;
      // }
      .transport-script {
        font-family: 'Courier New', Courier, monospace;
        padding: 10px 20px;
      }
      .transport-script > textarea {
        font-family: 'Courier New', Courier, monospace;
        outline: none;
        border: none;
      }

      .transport-breakdown {
        // background: #2f3c41;
        padding: 20px 10px;
      }
      .transport-breakdown-shot {
        cursor: pointer;
        border: solid rgba(0, 0, 0, 0.15);
      }
      .transport-breakdown-shot.active {
        border: solid;
      }
      .transport-breakdown-shot.checked-out {
        color: #2f3c41;
        background: #acb7bb;
      }
      .transport-breakdown-shot.checked-out.not-user {
        color: #2f3c41;
        background: #acb7bb;
        pointer-events: none;
        cursor: default;
      }

      .transport-breakdown > div {
        background-color: white;
        padding: 20px;
        margin-bottom: 10px;
      }
      .transport-breakdown > div > div {
        margin: 20px;
      }
      .checked-out {
        background: #747373;
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
      .transport-panels-section {
        width: 100%;
        // padding: 10px 10px;
      }
      .bread-crumb {
        overflow: hidden;
        // width: 100%;
        // background: #2f3c41;
        font-size: 0.7rem;
        color: #c5c3c3;
        padding: 5px 10px;
        padding-top: 10px;
        border-bottom: solid 1px grey;
        // position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .bread-crumb > div {
        width: 400px;
        display: flex;
        // justify-content: flex-end;
      }

      .bread-crumb > div:last-child {
        width: 400px;
        display: flex;
        justify-content: flex-end;
      }
      .board-titles {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 1.4rem;
        color: #aaaaaa;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .transport-panels {
        padding: 0px 20px;
        display: flex;
        flex-wrap: wrap;
        // border-bottom: solid 1px grey;
        padding-bottom: 20px;
      }
      .transport-panel.active {
        // border: solid;
      }
      .transport-panel {
        cursor: pointer;
        position: relative;
        max-width: 100px;
        padding: 10px 0;
        margin: 5px;
      }
      .transport-panel > img.active {
        border: solid 2px rgb(28, 226, 183);
      }
      .transport-panel > img {
        border: solid 2px rgba(0, 0, 0, 0.3);
        width: 100%;
      }
      .transport-label {
        background: rgba(0, 0, 0, 0.3);
        // border-radius: 2px;
        color: #fff;
        position: absolute;
        padding: 1px 5px;
        font-size: 0.5em;
        top: 12px;
        right: 2px;
        cursor: pointer;
      }

      .panel-index {
        top: 12px;
        left: 2px;
        position: absolute;
        background: rgba(256, 256, 256, 0.8);
        font-size: 0.6rem;
        padding: 1px 4px;
      }
      .panel-shot {
        position: absolute;
        top: 12px;
        right: 42px;
        background: rgba(256, 256, 256, 0.4);
        font-size: 0.6rem;
        padding: 1px 4px;
      }
      .transport-panel-add {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 110px;
      }

      .transport-panel-add > div {
        cursor: pointer;
        color: #2f3c41;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(228, 227, 227, 0.9);
        border-radius: 50%;
        width: 33px;
        height: 33px;
        padding: 10px 0;
        border: none;
      }
      .new-scene-form {
        display: flex;
        justify-content: center;
      }
    `}</style>
  );
};