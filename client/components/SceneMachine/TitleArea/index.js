import { useState, useContext } from 'react';
import {
  ControlPanelButtonsContext,
  ProjectContext,
  setProjectContext,
} from '../../../contexts/SceneMachineProviders';
import TitleButtons from './TitleButtons';
import { machineView } from '../../../dataModels';
import axios from 'axios';

const SceneMachineTitle = () => {
  // TODO: if scene order changes make share available.
  const initialSceneEditState = {
    sceneSelected: '',
    sceneOrder: false,
    edited: false, // this should probably be part of the globle project state
  };
  const [sceneEdit, setSceneEdit] = useState(initialSceneEditState);
  const buttons = useContext(ControlPanelButtonsContext);
  const field = useContext(ProjectContext);
  const dispatch = useContext(setProjectContext);
  // const [isEditing, setIsEditing] = useState(false);

  const SceneMachineTitleStyle = () => {
    return (
      <style jsx>{`
        .scene-machine-title {
          // box-shadow: 0 10px 10px rgba(256 256, 256, 256, 0.8);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
          margin-top: 5px;
        }
        // .scene-machine > div > span > h1 {
        //   cursor: pointer;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   color: rgb(107, 105, 105);
        //   box-shadow: inset 0 0 15px rgb(14, 13, 12),
        //     inset 0 0 15px rgb(39, 38, 31), inset 0 0 30px rgb(55, 55, 75),
        //     inset 0 0 20px rgb(55, 55, 75);
        //   background: rgb(247, 229, 229);
        //   font-size: 1.2rem;
        //   padding: 6px 30px;
        //   border-radius: 10px;
        //   box-shadow: 0 0px 10px rgba(95, 98, 104, 0.4),
        //     0 0px 10px rgba(200, 200, 256, 0.1), 0 0 10px rgba(200, 180, 0, 0.2),
        //     inset 0 0 10px, inset 0 0 3px, inset 0 0 1px, inset 0 0 2px;
        // }
        .title-buttons-left {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          width: 300px;
        }
        .title-buttons-left > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        // .title-input {
        //   padding: 5px 5px;
        // }
        // .btn-ctrl {
        //   width: 40px;
        //   height: 40px;
        //   border: solid 1px rgb(54, 58, 61);
        //   margin: 5px 3px;
        //   // border-right: none;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   cursor: pointer;
        // }
        // .btn-ctrl-inside > div.active {
        //   color: #6d6d6d;
        //   transition: 0.3s ease-in;
        // }
        // .btn-ctrl-inside > div {
        //   color: #6d6d6d00;
        //   transition: 0.2s ease-in;
        // }
        // .btn-ctrl-inside {
        //   transition: 0.7s ease-in;
        //   width: 25px;
        //   height: 25px;
        //   border-radius: 1px;
        //   background: rgb(227, 228, 222);
        //   // background: rgb(240, 248, 204);
        //   border: solid 1px rgb(17, 5, 1);
        //   box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.8),
        //     inset 0 0 3px rgba(0, 0, 0, 1), 0 0 1px rgba(0, 0, 0, 0.8);
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        // }
        // .btn-ctrl-inside.active {
        //   transition: 0.4s ease-in;
        //   width: 25px;
        //   height: 25px;
        //   border-radius: 3px;
        //   border: solid 1px rgb(165, 150, 86);
        //   background: rgb(255, 230, 8);
        //   // background: rgb(248, 227, 42);
        //   // background: rgb(210, 248, 42);

        //   box-shadow: 0 0 5px rgba(209, 209, 209, 0.8),
        //     0 0 3px rgb(214, 214, 214), inset 0 0 4px rgba(228, 228, 228, 0.9),
        //     0px 0px 2px rgba(0, 0, 0, 1);
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        // }
        .title-buttons-right {
          display: flex;
          width: 300px;
          flex-direction: row-reverse;
        }
        .btn-mini {
          cursor: pointer;
          color: #152125;
          padding: 2px 8px;
        }
      `}</style>
    );
  };

  const Title = ({ children }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(field.name);

    const changeFieldItem = async (key, value, fieldId) => {
      const { data } = await axios.put(`/api/field/${fieldId}`, {
        [key]: value,
      });
      console.log('FIELD CHANGED: ', data);
      // setField(data);
      dispatch(['LOAD_PROJECT', { data, fieldId }]);
    };

    const handleNameChange = (e) => {
      e.preventDefault();
      console.log('EDIT NAME: ');
      changeFieldItem(e.target.id, title, field._id);
      setIsEditing(false);
    };
    const handleNameChangeEnter = (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        console.log('EDIT NAME: ');
        changeFieldItem(e.target.id, title, field._id);
        setIsEditing(false);
      }
    };

    return (
      <>
        <div className="scene-machine-top">
          <span onClick={() => setIsEditing(true)}>
            {isEditing ? (
              <input
                value={title}
                id="name"
                className="title-input"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                onBlur={handleNameChange}
                onKeyDown={handleNameChangeEnter}
              />
            ) : (
              <div className="title-box">
                <h1 className="scene-machine-title">{children === undefined ? 'The Scene Machine' : children}</h1>
              </div>
            )}
          </span>
          <style jsx>{`
            .scene-machine-top {
              height: 40px;
              display: flex;
              align-items: center;
            }
            .title-box {
              display: flex;
              align-items: center; 
              justify-content: center;
              //box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
              padding: 30px 50px;
              overflow: hidden;
            }
            .title-input {
              padding: 10px;
            }
            .scene-machine-title {
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              color: rgb(107, 105, 105);
              box-shadow: inset 0 0 15px rgb(14, 13, 12),
                inset 0 0 15px rgb(39, 38, 31), inset 0 0 30px rgb(55, 55, 75),
                inset 0 0 20px rgb(55, 55, 75);
              background: rgb(248, 239, 239);
              font-size: 1.2rem;
              padding: 6px 30px;
              border-radius: 3px;
              box-shadow: inset 0 0px 10px rgba(95, 98, 104, 0.4),
                inset 0 0px 10px rgba(200, 200, 256, 0.1),
                inset 0 0 10px rgba(200, 180, 0, 0.2), inset 0 0 10px, inset 0 0 3px,
                inset 0 0 1px, inset 0 0 2px;
              border: solid 1px rgba(51, 51, 51, 0.829);
            }
          `}</style>
        </div>
      </>
    );
  };
  return (
    <>
      <SceneMachineTitleStyle />
      <div className="scene-machine-title">
        <div className="title-buttons-left">
          <TitleButtons />
        </div>
        {/* <h1>{buttons.machine === 'scene' ? 'Scene' : 'Asset'} Machine</h1> */}
        {/* <h1>{`{ ${field.name} }`}</h1> */}
        {/* <span onClick={() => setIsEditing(true)}>
          {isEditing ? (
          <input className="title-input" type="text" onBlur={()=> setIsEditing(false)} />
          ): <h1>{field.name}</h1>}
        </span> */}
        <Title>{field.name}</Title>
        <div className="title-buttons-right">
          {false && (
            <>
              <div className="btn-mini">
                <i class="fas fa-redo-alt"></i>
              </div>
              <div className="btn-mini">
                <i class="fas fa-undo-alt"></i>
              </div>
            </>
          )}
          {buttons.display === machineView.view1.name && (
            <>
              <div className="btn-mini">
                <i className="fas fa-trash-alt"></i>
              </div>
              <div className="btn-mini">
                <i class="fas fa-film"></i>
              </div>
              {true && (
                <div className="btn-mini">
                  <i class="far fa-share-square"></i>
                </div>
              )}
            </>
          )}
          {buttons.display === machineView.view4.name && (
            <>
              <div className="btn-mini">
                <i className="fas fa-trash-alt"></i>
              </div>
              <div className="btn-mini">
                <i className="fas fa-cut"></i>
              </div>
              <div className="btn-mini">
                <i class="far fa-clone"></i>
              </div>
              {true && (
                <div className="btn-mini">
                  <i class="far fa-share-square"></i>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SceneMachineTitle;
