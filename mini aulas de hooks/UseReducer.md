Exemplo de UseReducer

import { useEffect, useReducer, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

@@ -9,13 +9,31 @@ type TaskContextProviderProps = {
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  useEffect(() => {
    console.log(state);
  }, [state]);
  const [numero, dispatch] = useReducer((state, action) => {
    console.log(state, action);

    switch (action) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'INITIAL_STATE':
        return 0;
    }

    return state; // estado atual (não altera)
  }, 0);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
      <h1>O número é: {numero}</h1>
      <button onClick={() => dispatch('INCREMENT')}>Incrementar</button>
      <button onClick={() => dispatch('DECREMENT')}>Decrementar</button>
      <button onClick={() => dispatch('INITIAL_STATE')}>ZERAR</button>
    </TaskContext.Provider>
  );
}

-----
qual a parada do useReducer, ele funciona atraves de ações,
então o que rola ali, o state, tem alterção quando é disparado "dispach" uma ação "action" - 
nesse exemplo é simples, o botão ali, dispara a string"increment", e isso vai lá pro "action" do segundo parametro do useReducer, apos isso fazemos uma if e else ou um switch and case, que se o acão for tal, altere o state pra algo, ali no caso, state + 1, pra somar,

a intenção é alterar o state, usando o useReducer para gerencia os state, por ser algo mais complexo e envolver mais valores.

esse exemplo foi com algo simples, mas no nosso codigo estamos tratanto um objeto, com muitas coisas para se alterar, e muitas condições, vamos mudar isso pro Reducer pela complexidade e possibilidade de alteração futura com mais conveniencia.



--------------
UseReducer  - usando objeto

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

--
a diferença maior é tipar as coisas, e pegar do tipo, da pra entender bem o que ta ai, não precisa de outra explicação!
