//Criando um componente react, pra ser exportado 
//um componente de react é uma função que utiliza o nome em PascalCase

//para importar um css a nivel global e o temas(variaveis de cores e tals)
import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home/Index';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';


const initialState: TaskStateModel ={
  tasks: [],
  secondsRemaining:0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config:{
    workTime:25,
    shortBreakTime:5,
    longBreakTime:15,
  },
}

export function App() {
const[state, setState] = useState(initialState)

  return <Home state={state} setState={setState} />;
}
























//uma função normal, mas o retorno vai ser o que vai ser exibido lá na pagina!
//com isso, temos um componente que retonar um "jsx"

//uma maneira de exportar esse compontente, em que o nome pode ser alterado
// export default App;
//Maneira de exportar com o nome ja definido
// export {App};
//Mas a melhor forma é exporta logo a função, lá em cima

//Maneira certa de reutilizar os componentes, dessa forma aqui -> <Heading/> - ele só vai repetir o mesmo conteudo que ta vindo do Heading
//Mas usando esse componente, com dados dentro dessa tag, podemos modificar o componentes, apenas em algumas partes, para isso tem que fazer com que o conteudo lá no Heading, pegue o children do elemento, children esse que vamos colocar ali no meio da tag
// exemplo <Heading> Olá Mundo 01 </Heading>, assim tudo vai ser aplicado no dados que colocamos ali, com isso, podemos reutilizar o componente, mas alterando os dados

//Biblioteca de icons do React, é o lucide, colocamos no terminal -> " npm install lucide-react "
//dai podemos usar os icones como se fossem componente, tipo ali "<TimerIcon/>"


