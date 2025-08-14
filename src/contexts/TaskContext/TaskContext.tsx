//exportando o context

import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

//props do task, para podemos usar o useState tbm junto ao contexts
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => { },
};

//criamos o context e dps damos o use o props para usar o useState, dai iniciamos o state, sendo o state inicial, que definimos ali em cima
export const TaskContext = createContext<TaskContextProps>(initialContextValue);


