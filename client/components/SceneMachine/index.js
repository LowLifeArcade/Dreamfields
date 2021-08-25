import { useEffect } from 'react';
// /@ts-check
import Spinner from './Spinner';
import SceneMachineTitle from './TitleArea';
import SceneMachineStripArea from './StripArea';
import SceneMachineLeftPanel from './LeftPanel';
import SceneMachineControlPanel from './ControlPanel';
import SceneMachineOverview from './SceneMachineOverview';
import SceneMachineBody from './SceneMachineBody';
import SceneMachineRightPanel from './RightPanel';
import ControlPanelButtons from './ControlPanel/ControlPanelButtons';
import ControlPanelDisplay from './ControlPanel/ControlPanelDisplay';
import ControlPanelContextualMenu from './ControlPanel/ControlPanelContextualMenu';

import {
  TitleButtonProvider,
  ControlPanelButtonsProvider,
  PreviewContextProvider,
  ViewerProvider,
  MachineStateContext,
  ModalProvider,
  DetailViewProvider,
  BoardsProvider,
  ProjectProvider,
} from '../../contexts/SceneMachineProviders';

/**
 * These Provider provide both the values and setters
 * The providers are split up to prevent unnecessary rerenders
 * @returns context values and setters
 */
const Providers = ({ children }) => {
  return (
    <>
      <BoardsProvider>
        <MachineStateContext>
          <ModalProvider>
            <ViewerProvider>
              <PreviewContextProvider>
                <TitleButtonProvider>
                  <ControlPanelButtonsProvider>
                    <DetailViewProvider>
                      {/* <ProjectProvider> */}
                      {children}
                      {/* </ProjectProvider> */}
                    </DetailViewProvider>
                  </ControlPanelButtonsProvider>
                </TitleButtonProvider>
              </PreviewContextProvider>
            </ViewerProvider>
          </ModalProvider>
        </MachineStateContext>
      </BoardsProvider>
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
      <Spinner opacity={0} />
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
