import Loader from './Loader';
import SceneMachineTitle from './SceneMachineTitle';
import SceneMachineStripArea from './SceneMachineStripArea';
import SceneMachineLeftPanel from './SceneMachineLeftPanel';
import SceneMachineControlPanel from './SceneMachineControlPanel';
import SceneMachineOverview from './SceneMachineOverview';
import SceneMachineBody from './SceneMachineBody';
import SceneMachineRightPanel from './SceneMachineRightPanel';
import ControlPanelButtons from './SceneMachineControlPanel/ControlPanelButtons';
import ControlPanelDisplay from './SceneMachineControlPanel/ControlPanelDisplay';
import ControlPanelContextualMenu from './SceneMachineControlPanel/ControlPanelContextualMenu';

import {
  TitleButtonProvider,
  ControlPanelButtonsProvider,
  PreviewContextProvider,
  ViewerProvider,
  MachineStateContext,
  ModalProvider,
} from '../../contexts/SceneMachineProviders';

const Providers = ({ children }) => {

  return (
    <>
      <MachineStateContext>
        <ModalProvider>
          <ViewerProvider>
            <PreviewContextProvider>
              <TitleButtonProvider>
                <ControlPanelButtonsProvider>
                    {children}
                </ControlPanelButtonsProvider>
              </TitleButtonProvider>
            </PreviewContextProvider>
          </ViewerProvider>
        </ModalProvider>
      </MachineStateContext>
    </>
  );
};

const SceneMachine = () => {
  return (
    <>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      {/* <Loader /> */}
      <Providers>
        <SceneMachineBody>
          <SceneMachineTitle />
          <SceneMachineStripArea />
          <SceneMachineControlPanel>
            <ControlPanelDisplay />
            <ControlPanelButtons />
            <ControlPanelContextualMenu />
          </SceneMachineControlPanel>
          <SceneMachineOverview>
            <SceneMachineLeftPanel />
            <SceneMachineRightPanel />
          </SceneMachineOverview>
        </SceneMachineBody>
      </Providers>
    </>
  );
};

export default SceneMachine;
