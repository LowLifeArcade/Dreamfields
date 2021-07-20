// state machine for preview
// this is an example now but was tyring to use it in scene machine
const previewMachine = {
  id: 'previewer',
  initial: 'idle',
  states: {
    idle: {
      on: {
        PLAY: 'playing', // message that corresponds to state playing
      },
      entry: () => console.log('now idle'),
      exit: () => console.log('leaving idle'),
    },
    playing: {
      on: {
        PAUSE: 'paused',
        STOP: 'stopped',
      },
      entry: () => console.log('now playing'),
    },
    paused: {
      on: {
        PLAY: 'playing',
        PAUSE: 'playing',
        STOP: 'stopped',
      },
      entry: () => console.log('now paused'),
    },
    stopped: {
      on: {
        PLAY: 'playing',
        EJECT: 'idle',
      },
      entry: () => console.log('now stopped'),
    },
  },
};

const useMachine = (machineModel) => {
  // 1 - contain current state string & nextEvents
  // 2 - should listn to events and transitions
  // 3 - invoke entry callbacks

  const initialMachine = {
    current: machineModel.initial,
    nextEvents: Object.keys(machineModel.states[machineModel.initial].on),
  };

  const [machineState, dispatch] = useReducer((state, event) => {
    const currentStateNode = machineModel.states[state.current];
    const nextState = currentStateNode?.on[event];

    if (!nextState) return state;

    return {
      current: nextState,
      nextEvents: Object.keys(machineModel.states[nextState]?.on),
    };
  }, initialMachine);

  useEffect(() => {
    machineModel.states[machineState.current]?.entry?.();
    return () => machineModel.states[machineState.current]?.exit?.();
  }, [machineState]);

  return [machineState, dispatch];
};

export default useMachine