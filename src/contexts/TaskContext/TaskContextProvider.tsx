import { useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState)

  //monitorar o estado, toda vez o estado mudar, assim a gente ve, quando a task ali no console.
  // useEffect(()=>{
  // console.log(state);
  // }, [state]);

  type ActionType = {
    type: string;
    payload?: number;
  };


  const [myState, dispatch] = useReducer((state, action: ActionType) => {
    console.log(state, action);

    switch (action.type) {
      case 'INCREMENT': {
        if(!action.payload) return state;
        return {
          ...state,
          secondsRemaing: state.secondsRemaing + action.payload
        }
      }
    }

    return state; // estado atual (não altera)
  }, {
    secondsRemaing: 0,
  });


  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>O estado é: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>
        Incrementar +10
      </button>


    </TaskContext.Provider>
  );
}
