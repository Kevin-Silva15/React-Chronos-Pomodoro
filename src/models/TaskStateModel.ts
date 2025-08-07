import type { TaskModel } from "./TaskModel"

//Esses tipos eu vou precisar usar em diferetes componentes e aplicações
//vamos fazer isso de outra maneira, sem ser com o "useState" - que foi o que usamos com o tema

// estado -> Componente -> filhos

export type TaskStateModel ={
  tasks: TaskModel[];
secondsRemaining: number;
formattedSecondsRemaining:string;
activeTask: TaskModel | null;
currentCycle: number;
 config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };

};
//task, pra receber os type das task
// secondsRemaining - para ser o tipo la da aplicação, que no caso vai contagem em segundos
// formattedSecondsRemaining - para ja formatar os segundo em textos para poder mostrar lá no cronometro, ent, rola que a contagem é feita com number, mas é mostrada em string
// activeTask - tipando se a taks ta ativa
//currentCycle - tipando as bolinhas do pomodoro, informando que são números, (1 á 8 no caso)
// config - é a configuração do sistema em si! tipando os tipos da types, falando que são números
//Pra explicar melhor o do config, é que os descansos ou tempo de descanso, são aquelas stings + o numero que ele tem de duração, acho que consegui entender bem, mas não expliquei tão bem assim...
