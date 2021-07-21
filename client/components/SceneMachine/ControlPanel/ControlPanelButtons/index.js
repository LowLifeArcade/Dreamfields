import { useContext } from 'react';
import {
  ControlPanelButtonsContext,
  ControlSetPanelButtonsContext,
} from '../../../../contexts/SceneMachineProviders';
import { ControlPanelButtonsStyle } from './ControlPanelButtonsStyle';
import { machineView } from '../../../../dataModels';

const ControlPanelButtons = () => {
  const buttons = useContext(ControlPanelButtonsContext);
  const setButtons = useContext(ControlSetPanelButtonsContext);
  const { button1, button2, button3, button4, button5 } = buttons;
  const { view1, view2, view3, view4, view5 } = machineView;

  const handleButtonPress = (e, display) => {
    e.preventDefault();
    setButtons({
      ...buttons,
      display: display,
      button1: { active: e.target.id === 'button1' ? true : false },
      button2: { active: e.target.id === 'button2' ? true : false },
      button3: { active: e.target.id === 'button3' ? true : false },
      button4: { active: e.target.id === 'button4' ? true : false },
      button5: { active: e.target.id === 'button5' ? true : false },
    });
  };

  return (
    <>
      <ControlPanelButtonsStyle />
      <div className="control-panel-buttons">
        <div className="btn">
          <div
            id="button1"
            onClick={(e) => handleButtonPress(e, view1.name)}
            className={`btn-inside ${button1.active && 'active'}`}></div>
        </div>
        <div className="btn">
          <div
            id="button2"
            onClick={(e) => handleButtonPress(e, view2.name)}
            className={`btn-inside ${button2.active && 'active'}`}></div>
        </div>
        <div className="btn">
          <div
            id="button3"
            onClick={(e) => handleButtonPress(e, view3.name)}
            className={`btn-inside ${button3.active && 'active'}`}></div>
        </div>
        <div className="btn">
          <div
            id="button4"
            onClick={(e) => handleButtonPress(e, view4.name)}
            className={`btn-inside ${button4.active && 'active'}`}></div>
        </div>
        <div className="btn">
          <div
            id="button5"
            onClick={(e) => handleButtonPress(e, view5.name)}
            className={`btn-inside ${button5.active && 'active'}`}></div>
        </div>
      </div>
    </>
  );
};

export default ControlPanelButtons;
