import { useContext } from 'react';
import {
  TitleSetButtonContext,
  TitleButtonContext,
} from '../../../../contexts/SceneMachineProviders';
import TitleButtonsStyle from './TitleButtonsStyle';

const TitleButtons = () => {
  const machine = useContext(TitleButtonContext);
  const setMachine = useContext(TitleSetButtonContext);

  return (
    <>
      <TitleButtonsStyle />
      <div
        onClick={() => setMachine({ machine: 'Scene' })}
        className="btn-ctrl"
        >
        <div
          className={`btn-ctrl-inside ${
            machine.machine === 'Scene' && 'active'
          }`}>
          <div
            className={`btn-mini ${machine.machine === 'Scene' && 'active'}`}>
            {/* <i className="fas fa-power-off"></i> */}
            <i class="fas fa-camera-retro fa-xs"></i>
          </div>
        </div>
      </div>
      <div
        onClick={() => setMachine({ machine: 'Asset' })}
        className="btn-ctrl">
        <div
          className={`btn-ctrl-inside ${
            machine.machine === 'Asset' && 'active'
          }`}>
          <div
            className={`btn-mini ${machine.machine === 'Asset' && 'active'}`}>
            {/* <i className="fas fa-power-off"></i> */}
            <i class="fas fa-palette fa-xs"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleButtons;
