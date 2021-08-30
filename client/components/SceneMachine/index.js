import { useEffect, useContext } from 'react';
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
import { machineView } from '../../dataModels';
import axios from 'axios';

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
  ShotsProvider,
  ControlPanelButtonsContext,
  ProjectContext,
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
                      <ShotsProvider>
                        {/* <ProjectProvider> */}
                        {children}
                        {/* </ProjectProvider> */}
                      </ShotsProvider>
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

const FieldOverview = () => {
  const project = useContext(ProjectContext);

  console.log('project', project);

const handleDeleteField = async () => {
  // axios delete field
  const {data} = await axios.delete(`/api/field/${project._id}`)

  console.log('DELETED FIELD', data)
  window.location.reload();
  // const slug = data.slug
  // res should give me last project to put in project context
  // await projectDispatch(['LOAD_PROJECT', {data, slug}])

} 
  
  return (
    <>
      {/* <SceneMachineRightPanel /> */}
      <div className="page">
        {/* <h3>{machineView.view1.name}</h3> */}
        <pre>{JSON.stringify(project, null, 4)}</pre>

        <label htmlFor="delete-button">Delete Field</label>
        <button onClick={handleDeleteField} >Delete Field</button>
      </div>
        
        <style jsx>{`
          button {
            padding: 10px;
          }
          label {
            padding: 20px;
          }
          .page {
            // background: rgb(133, 133, 133);
            margin: 20px;
            background: #eee;
            color: #1d1d1d;
            width: 100%;
            display: flex;
            align-items: center;
            //justify-content: center;
            flex-direction: column;
          }
        `}</style>
    </>
  );
};

const SceneMachineComponents = () => {
  const { display } = useContext(ControlPanelButtonsContext);
  
  return (
    <>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <Spinner opacity={0} />
      <SceneMachineBody>
        <SceneMachineTitle />
        <SceneMachineStripArea />
        <SceneMachineControlPanel>
          <ControlPanelDisplay />
          <ControlPanelButtons />
          <ControlPanelContextualMenu />
        </SceneMachineControlPanel>
        <SceneMachineOverview>
          {display === machineView.view1.name && <FieldOverview />}
          {display === machineView.view2.name && (
            <>
              {/* <SceneMachineRightPanel /> */}
              <div className="page">
                <h3>{machineView.view2.name}</h3>
                <style jsx>{`
                  .page {
                    color: #e2e2e2;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                `}</style>
              </div>
            </>
          )}
          {display === machineView.view3.name && (
            <>
              {/* <SceneMachineRightPanel /> */}
              <div className="page">
                <h3>{machineView.view3.name}</h3>
                <style jsx>{`
                  .page {
                    color: #e2e2e2;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                `}</style>
              </div>
            </>
          )}
          {display === machineView.view4.name && (
            <>
              <SceneMachineLeftPanel />
              <SceneMachineRightPanel />
            </>
          )}
          {display === machineView.view5.name && (
            <>
              {/* <SceneMachineRightPanel /> */}
              <div className="page">
                <h3>{machineView.view5.name}</h3>
                <style jsx>{`
                  .page {
                    color: #e2e2e2;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                `}</style>
              </div>
            </>
          )}
        </SceneMachineOverview>
      </SceneMachineBody>
    </>
  );
};

const SceneMachine = () => {
  return (
    <>
      <Providers>
        <SceneMachineComponents />
      </Providers>
    </>
  );
};

export default SceneMachine;
