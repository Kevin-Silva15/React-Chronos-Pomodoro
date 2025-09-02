import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../Utils/getNextCycle";
import { getNextCycleType } from "../../Utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../Utils/formatSecondsToMinutes";


//rever a aula 52 e usar o useRef!

export function MainForm() {
  //Pegando o estado com o Contenxt que criamos anteriormente
  const { state, setState } = useTaskContext();

  const taskNameInput = useRef<HTMLInputElement>(null);

  //--- esses const abaixo, redenrizam primeiro que a function, por isso, a function usa o valor 'antigo' deles, e apos o function do form usar os valores antigos, esses valores são atualizados, assim fica um ciclo pronto pra uso, com uma mistura de uma parte atrasada e outra não

  //preciso saber qual o ciclo atual, pois preciso informar ao usuaario, qual vai ser o proximo ciclo, por isso estamos fazendo isso fora da function, pois preciso isso antes de enviar uma nova task.
  const nextCycle = getNextCycle(state.currentCycle);

  const nextCycleType = getNextCycleType(nextCycle);



  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;
    //pegando a task que foi digitada no form. - trim -é pra tirar os espaços inuteis e task de só espaço
    const taskName = taskNameInput.current.value.trim();

    //pra alerta pro usuario que ele precisa digitar algo, que o campo está vazio.
    if (!taskName) {
      alert('Digite a tarefa')
      return;
    }

    // criando uma nova task, tipando ela com o taskModel que fizemos anteriormente
    const newTask: TaskModel = {
      // o id vai pegar a data atual, e dps a data atual vai ser formatada em string, que é como tipamos em TaskModel.
      id: Date.now().toString(),
      name: taskName,
      //Inicio da task, tipamos como number, mas devemos primeiro pegar a data exata que começou, pra fazermos a contagem, dps de pegar a data temos que tranformar em number, para fazer conta com ela.
      startDate: Date.now(),
      //aqui ta null, pq ta começando a Task e não foi complentada ainda.
      completeDate: null,
      //aqui ta null, pq não foi interrupita
      interruptDate: null,
      //a duração vem do estado, então, pegamos a config do state, de acordo com o type, que no caso ja esta configurando em initial state, cada tempo certinho, de acordo com o type!
      duration: state.config[nextCycleType],
      //Temos um função que vai a vericação de acordo como o número do ciclo atual, e assim determina qual é type dele
      type: nextCycleType,
    };

    //pegando o valor de minutos e o transformando em segundos.
    const secondsRemainin = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemainin,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemainin), //criamos a funçaõ de formatação e estamos aqui enviando os segundos, pra função trbalhar lá e retornar o string certo e formatado, tanto os minutos, quanto os segundos.
        task: [...prevState.tasks, newTask]
      }
    })



  }
  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemainin: 0,
        formattedSecondsRemaining: '00:00'
      }
    })

  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='Task2'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
          disabled={!!state.activeTask} // o input vai se desativar, quando a task estiver ativa
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25min</p>
      </div>

      {/* Só vai exibir os cycles, se o cycle for maior que zero, isso faz que ao iniciar a pagina, não apareca nenhum cycle, afinal, nenhum começou, ainda! */}
      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles></Cycles>
        </div>
      )}
      <div className='formRow'>

        {/* se não tem uma task ativa, mostre isso */}
        {!state.activeTask ? (
          <DefaultButton aria-label='Iniciar nova tarefa'
            title="Iniciar nova terefa"
            type="submit"
            key='This button is to submit'
            icon={<PlayCircleIcon />}>
          </DefaultButton>
        ) : (
          // se tiver uma task ativa, faça isso
          <DefaultButton
            onClick={handleInterruptTask}
            aria-label='Encerrar tarefa'
            title="Encerrar terefa"
            type="button"
            color="red"
            key='This is a button to end'
            icon={<StopCircleIcon />}>
          </DefaultButton>
        )}

      </div>
    </form>
  )
}


//Capturar o evento do envio do form, é fazer com que esse forme não seja enviado, para não recarregar a pagina, mantendo as coisas sem recarregar
//aqui no caso a gente usou o preventDefault para desativar o envio.

// function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     console.log('Deu certo');
//   }

// +

// <form onSubmit={handleCreateNewTask}





