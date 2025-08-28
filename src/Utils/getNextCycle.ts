//function dos cycles

export function getNextCycle(currentCycle:number){
  //se o cycle estiver no valor 0 ou no 8, ele vai virar 1, se não, ele vai somar mais um. assim ficar um ciclo de 1 á 8.
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;

}