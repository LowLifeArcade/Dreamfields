import SceneMachineControlPanelStyle from './SceneMachineControlPanelStyle';

const SceneMachineControlPanel = ({children}) => {
  return (
    <>
      <SceneMachineControlPanelStyle />
      <div className="control-panel">
        {children}
      </div>
    </>
  );
};

export default SceneMachineControlPanel;
