//function pra pegamos o proximo type - se é workTime or shortTime or LongTime
// % - resto da divisão - é msm coisa quando a gente pegar par and impar 

import type { TaskModel } from "../models/TaskModel";


export function getNextCycleType(currentCycle:number): TaskModel['type'] {

  //se o resto da divisão do currentCycle dividido por 8 der 0, ent é longBreakTime - com isso
  if(currentCycle % 8 ===0) return 'longBreakTime';
  //se o resto da divisão for par, vai retornar o descanso curto
  if(currentCycle % 2 ===0) return 'shortBreakTime';
  //se não for nenhum dos dois, vai ser o workTime...
  return 'workTime';

};

// Tipando, pra só aceitar os types, que configuramos la no TaskModel.
// (currentCycle:number): TaskModel['type'] 






