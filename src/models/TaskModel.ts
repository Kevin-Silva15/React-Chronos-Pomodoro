//estamos fazendo as taks dos dados via type, por serem dados que não serão usado para logica, apenas para visualização
//tipo, nenhum dado será somado ou contacnado e coisa do tipo.

import type { TaskStateModel } from "./TaskStateModel";

//apenas mostrar as taks queo usuario fez, e o ciclos dele, e minutos tbm.
export type TaskModel ={
  id: string;
  name: string;
  duration:number;
  startDate: number;
  completeDate: number | null;
  interruptDate:number |null;
  type: keyof TaskStateModel['config'];

}
// explicando os tipos exportados

// id - o id da tarefa 
// startDate  - horario que comecou a tarefa
// completeDate - Hora que foi concluido a terefa ou Nada, nulo
// interruptDate - msm Coisa so que para as tarefas que foram interruppirdas, guardar aqui ou nulo.
// type - ali no caso ta aceitand aquele 3 tipos, que a ciclo que o usuario estava, se tempo de trabalho, descanso curto ou o longo.

//Olha que massa, usando o keyof, eu pego as chaves do tipos que estou apontando, que no caso, esta pegando as cheves do tipo da config, que defini na TaskStateModels, como numbers, mas aqui eu resgato só as chaves, deixando elas sicronixadas e escalavei, se necessario.
  // type: keyof TaskStateModel['config'];

//Tudo tipado e alocado
