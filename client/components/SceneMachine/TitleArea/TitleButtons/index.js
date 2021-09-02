import { useContext } from 'react';
import {
  TitleSetButtonContext,
  TitleButtonContext,
} from '../../../../contexts/SceneMachineProviders';
import { machineType } from '../../../../dataModels';
import TitleButtonsStyle from './TitleButtonsStyle';

const TitleButtons = () => {
  const machine = useContext(TitleButtonContext);
  const setMachine = useContext(TitleSetButtonContext);

  return (
    <>
      <TitleButtonsStyle />
      <div
        onClick={() => setMachine({ machine: machineType.scene })}
        className="btn-ctrl">
        <div
          className={`btn-ctrl-inside ${
            machine.machine === machineType.scene && 'active'
          }`}>
          <div
            className={`btn-mini ${
              machine.machine === machineType.scene && 'active'
            }`}>
            {/* <i className="fas fa-power-off"></i> */}
            <i class="fas fa-camera-retro fa-xs"></i>
          </div>
        </div>
      </div>
      <div
        onClick={() => setMachine({ machine: machineType.asset })}
        className="btn-ctrl">
        <div
          className={`btn-ctrl-inside ${
            machine.machine === machineType.asset && 'active'
          }`}>
          <div
            className={`btn-mini ${machine.machine === machineType.asset && 'active'}`}>
            {/* <i className="fas fa-power-off"></i> */}
            <i class="fas fa-palette fa-xs"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleButtons;
