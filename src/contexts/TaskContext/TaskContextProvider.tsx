import { useEffect, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState)

//monitorar o estado, toda vez o estado mudar, assim a gente ve, quando a task ali no console.
useEffect(()=>{
console.log(state);
}, [state]);

  return (
    <TaskContext.Provider value={{ state, setState}}>
      {children}
    </TaskContext.Provider>
  );
}
