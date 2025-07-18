Mini aula de "useStatus"

Usando o "useState" - é uma coisa do react, que serve pra sicronizar as coisas
//exp, que um let que esteja sendo usado em mais de um lugares ele esteja constantemente sendo atualizado em todo o lugar

Sempre que usar useStates, não devemos usar atribuição diretamente
 const [numero(escoliho pra ser atribuido a var), configuraçãoNumero(aqui vamos tratar o numero)] = useState(0);

const [numero, setNumero] = useState(()=>{ return 0});

uma boa norma de uso de nome pra config dele, é, usar a palavra "set"+o numero da variavel!

 (()=>{ return 0});
 isso aqui se chama 'lazy initialization' - que algo que só se renderiza um unica vez, e retornar o valor que vai na Variavel, ali da pra ser uma conta mais elaborada por exemplo


function handleClick(){
  setNumero((prevState)=> prevState +1);
}
Regras 
Sempre que usar o set, eu devo usar uma função na hora de alterar
O prevState é para pegarmos o valor anterior, e dps ir se atulizando, garantindo mais segurança 
Fazemos isso quando dependemos do valor anterior!




