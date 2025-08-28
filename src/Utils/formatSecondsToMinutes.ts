//Vamos formartas os segundo em minutos

//explicando a logica de formatação
//1 - "string" para defenir que aqui vai retornar no formato string
//2 - "math.floor" - é usado para arrendondar a conta para baixo, fazemos isso, pra não perder nenhum valor, ja que estamos trabalhando com tempo
//3 - "(seconds / 60))" - para termos os minutos, a gente pegar o valor e dividi por 60(segundos)
//4 - "(seconds % 60))" - aqui é pra pegar os segundos, a gente pegar o que sobrar da divisão, isso é, tirando os minutos, vai sobrar algo, é com isso, temos os segundos.
//5 - ".padStart(2, '0')" -  o padStart, colocar algo na frente e defini o número minimo de casas decimais, no caso em questão
//definimos que vai ter no minimo 2 casas, e que sé não tiver duas casas, coloque um 0 ali na frente, assim quando for do 0 ate 9, será 00, 01, 02 é assim vai.
//msms coisa serve para os segundos.

//por final a gente contactena as duas consts formatas e pronto.

export function formatSecondsToMinutes(seconds:number){

const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');

const secondsMod = String(Math.floor(seconds % 60)).padStart(2, '0');

return `${minutes}:${secondsMod}`;

}











