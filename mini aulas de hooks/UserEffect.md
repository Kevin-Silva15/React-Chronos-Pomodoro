Formas de usar o userEffect

1 - a forma mais padrão
 userEffect(()=>{
  console.log('',Date.now)
})
Ele é executado toda vez que o componente renderiza na tela
Quando eu mudar alguma coisa do componente, esse user, vai ser executado novamente!



2 - com um array vazia de dependencia
userEffect(()=>{
  console.log('',Date.now)
}[] ); 
Executa, apenas quando o react monta o componente na tela pela primeira vez, por exemplo, ele só executa, quando por exemplo demos um f5 na pagina.

Esse userEffect é bom pra ser usado por exp quando estamos pegando dados de um api externa, e usamos esse hook



3 - Com dependecia na array - 
userEffect(()=>{
  console.log('',Date.now)
}[theme] ); 


