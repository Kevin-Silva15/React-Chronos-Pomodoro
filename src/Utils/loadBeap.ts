//function pra carregar o audio da pg
//Nessa function vamos carregar o audio, e na dps vamos fazer uma pra tocar o audio que ja vai estar carregado

import gravitationalBeep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep(){
const audio = new Audio(gravitationalBeep);
audio.load();

return() => {
  audio.currentTime = 0;
  audio.play().catch(error=> console.log('erro ao tocar áudio', error));
}

}

// audio.play(); - seria só colocar isso aqui que pronto, iria tocar, mas o navegador Safari esta complicando as coisas.....
//então vms ter fazer outras coisas!

