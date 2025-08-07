//Criando um componente react, pra ser exportado 
//um componente de react é uma função que utiliza o nome em PascalCase

import { Container } from "../../Components/Container";
import { CountDown } from "../../Components/CountDown";
import { MainForm } from "../../Components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";



//para importar um css a nivel global e o temas(variaveis de cores e tals)

export type HomeProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}


export function Home(props: HomeProps) {

  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown {...props} />
        </Container>

        <Container>
          <MainForm {...props} />
        </Container>
      </MainTemplate>
    </>
  );
}