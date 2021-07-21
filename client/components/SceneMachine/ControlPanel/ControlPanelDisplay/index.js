import { useContext, useState, useEffect } from "react";
import { TitleButtonContext, ControlPanelButtonsContext } from "../../../../contexts/SceneMachineProviders";
import { ControlPanelDisplayStyle } from "./ControlPanelDisplayStyle";

const ControlPanelDisplay = () => {
  const machine = useContext(TitleButtonContext);
  const buttons = useContext(ControlPanelButtonsContext);
  const [display, setDisplay] = useState('Scene Machine');

  useEffect(() => {
    setDisplay(machine.machine + ' Machine');
  }, [machine]);

  useEffect(() => {
    setDisplay(buttons.display);
  }, [buttons]);

  return (
    <>
    <ControlPanelDisplayStyle/>
      {/* <ControlPanelButtonsContext.Consumer>
        {(value) => {setDisplay(value.buttons.display)}}
      </ControlPanelButtonsContext.Consumer>
      <TitleButtonContext.Consumer>
        {(value) => {
          setDisplay(value.machine.machine + ' Machine');
        }}
      </TitleButtonContext.Consumer> */}
      <code className="control-panel-display">
        <strong>**{display}**</strong>
      </code>
    </>
  );
};


export default ControlPanelDisplay