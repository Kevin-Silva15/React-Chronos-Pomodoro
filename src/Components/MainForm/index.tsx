import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";


export function MainForm() {

  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Deu certo', taskName);
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='Task2'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}

        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25min</p>
      </div>

      <div className='formRow'>
        <Cycles></Cycles>
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='gren' > </DefaultButton>
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





