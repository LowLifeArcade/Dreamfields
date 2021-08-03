

const RightPanelOverview = ({viewer}) => {
  return (
    <div id="scene-card" className="transport-description">
      <h3>Scene: "{viewer.sceneName}"</h3>
      <div className="transport-description-detail">{viewer.description}</div>
      <table className="details-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Setting: </td>
            <td>{viewer && viewer.setting}</td>
          </tr>

          <tr>
            <td>Character Count: </td>
            <td>{viewer && viewer.characters?.length}</td>
          </tr>
          <tr>
            <td> Shot Count: </td>
            <td>{viewer && viewer.shotList?.length}</td>
          </tr>
          <tr>
            <td> Backgrounds: </td>
            <td>{viewer && viewer.backgrounds?.length}</td>
          </tr>
          <tr>
            <td> Asset Count: </td>
            <td>{viewer && viewer.assets?.length}</td>
          </tr>
          <tr>
            <td> FX: </td>
            <td>{viewer && viewer.FX?.length}</td>
          </tr>
          <tr>
            <td>Frame Rate: </td>
            <td>{viewer && viewer.frameRate && viewer.frameRate}</td>
          </tr>
          <tr>
            <td>Aspect Ratio: </td>
            <td>{viewer && viewer.aspectRatio && viewer.aspectRatio}</td>
          </tr>
          <tr>
            <td>Launched: </td>
            <td>{viewer && viewer.launched ? 'true' : 'false'}</td>
          </tr>
          <tr>
            <td>Production Stage: </td>
            <td>{viewer && viewer.productionStage && viewer.productionStage}</td>
          </tr>
        </tbody>
      </table>
      Contributers and their hard work are how this project gets made
      <table className="details-table">
        <thead>
          <tr>
            <th>Contributers</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {/* obviously do a map here from viewer */}
          <tr>
            <td>Keith</td>
            <td>Key Frames</td>
          </tr>
          <tr>
            <td>Sonny</td>
            <td>Inbetweens</td>
          </tr>
          <tr>
            <td>Loralai</td>
            <td>Inbetweens</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RightPanelOverview;
