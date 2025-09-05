import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workes/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../Utils/loadBeap";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState)

  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;
    // console.log(countDownSeconds);

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      // console.log('Worker COMPLETED');
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }

  });


  //monitorar o estado, toda vez o estado mudar, assim a gente ve, quando a task ali no console.
  useEffect(() => {
    // console.log(state);

    if (!state.activeTask) {
      // console.log('Worker terminado por falta de activeTask');
      worker.terminate();
    }

    worker.postMessage(state);

  }, [worker, state]);

  //esse aqui só vai chegar quando o state.activeTask mudar
  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }

  }, [state.activeTask]);


  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}







// ----------------------------- Antigo provider, usando o useState
// import { useEffect, useState } from "react";
// import { initialTaskState } from "./initialTaskState";
// import { TaskContext } from "./TaskContext";

// type TaskContextProviderProps = {
//   children: React.ReactNode;
// };

// export function TaskContextProvider({ children }: TaskContextProviderProps) {
//   const [state, setState] = useState(initialTaskState)

//   //monitorar o estado, toda vez o estado mudar, assim a gente ve, quando a task ali no console.
//   useEffect(() => {
//     console.log(state);
//   }, [state]);


//   return (
//     <TaskContext.Provider value={{ state, setState }}>
//       {children}
//     </TaskContext.Provider>
//   );
// }
