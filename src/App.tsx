//Criando um componente react, pra ser exportado 
//um componente de react é uma função que utiliza o nome em PascalCase

//para importar um css a nivel global e o temas(variaveis de cores e tals)
import './styles/theme.css';
import './styles/global.css';


import { Container } from './Components/Container';

import { Logo } from './Components/Logo';
import { Menu } from './Components/Menu';
import { CountDown } from './Components/CountDown';
import { DefaultInput } from './Components/DefaultInput';
import { Cycles } from './Components/Cycles';
import { DefaultButton } from './Components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './Components/Footer';




//Fazendo assim, no global, stylizamos as coisas que terão um mesmo padrão!



export function App() {

  return (
    <>

      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu></Menu>
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='Task2'
              id='meuInput'
              type='text'
              placeholder='Digite algo'

            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles></Cycles>
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='gren' > </DefaultButton>
          </div>

        </form>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>

    </>
  );
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


