//Criando um componente react, pra ser exportado 
//um componente de react é uma função que utiliza o nome em PascalCase

import { Container } from "../../Components/Container";
import { CountDown } from "../../Components/CountDown";
import { MainForm } from "../../Components/MainForm";

import { MainTemplate } from "../../templates/MainTemplate";



//para importar um css a nivel global e o temas(variaveis de cores e tals)




export function Home() {

  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>

        <Container>
          <MainForm  />
        </Container>
      </MainTemplate>
    </>
  );
}