//agora vamos importar o css 

import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';


//Criando um componente, que será o header da pagina!
export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return storageTheme;
    });

    // ()=>{
    //     const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    //     return storageTheme;
    // O Que rola nessa linha é, estamos colocando uma função na inicialização, que resgata o valor do local Storage, e depois falando que esse valor vai ser "Availabletheme" ou seja só vai aceitar que seja ou "light" ou "dark", e se não tiver nada no storage ainda ele vai vim como padrão o tema dark!

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    }
// Aqui, estou ligando os temas com os devidos icons, assim, ou vai ser um ou outro, a depender do theme atual!
//  {nextThemeIcon[theme]} - uso isso aqui pra pegar o retorno, vai resgastar o valor da array theme, que vai ta lá com a condição!

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault(); // Não segue o link 

        setTheme((prevTheme) => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });


    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

    }, [theme]);

    // localStorage.setItem('theme', theme); - 
    // nessa linha estou armazenando o valor do theme atual, para dps regastalo e manter o mesmo valor sé o usuarios dar um f5 na pag




    return (
        <nav className={styles.menu}>

            <a className={styles.menuLink} href='#'
                aria-label='Ir para a Home'
                title='Ir para a Home'
            >
                <HouseIcon />
            </a>

            <a className={styles.menuLink} href='#'
                aria-label='Ver histórico'
                title='Ver histórico'
            >
                <HistoryIcon />
            </a>

            <a className={styles.menuLink} href='#'
                aria-label='Configurações'
                title='Configurações'
            >
                <SettingsIcon />
            </a>

            <a className={styles.menuLink} href='#'
                aria-label='Mudar Tema'
                title='Mudar Tema'
                onClick={handleThemeChange}
            >
                {nextThemeIcon[theme]}
            </a>

        </nav>
    );
}

//Em Tsx, para colocar uma class, em um elemento, temos que usar " className="" ", com isso fica igual o css

//Para ter um arquivo css próprio desse componente, criamos um arquivo css, de mesmo nome, e adc o ".modules", assim pra sabermos que ele é um arquivo de escopo de css modules
//Esses escopos fazem com que não haja conflito de classes que tenham o mesmo nome
//tipo, em uma maior aplicação, com mais paginas, se fizermos dessa forma, não vamos ter problema de repetir o nome das classes, assim ficando que cada pagina fique bem semantica, e não faça conflito.

//className={`${styles.cyan} ${styles.heading} `} - Para usar duas classes no elemento

// Dessa forma aqui, invoco o children do props e consigo jogar na tag, para aceitar os dados que vou jogar lá
// const { children } = props;
//Esse proceço se chama "desestruturação"

//Tendo feito isso, há como diminuir ainda mais, só joganr a linha de cima, ali no argumetno da função, assim como esta no codigo
//assim, diminuir um pouco a linha de codigo, e ainda a torna funcional!
//({ children }: HeadingProps) - desistruturou o props, e dps


// ------------------------------------------
/*explicando a mudança de tema!

const [theme, setTheme] = useState<AvailableThemes>('dark');

primeiro, fazemos a cosnt, do tema, e o set dele
const [theme, setTheme]

Apos isso, usamos o useState - pra solucionar aquela questão de sicronizamento
= useState

apos isso, vamos tipar, os valores que serão aceito dentro do useState, pra aceitar só dark ou light

Criamos o type deel fora da função, e denominamos os dois valores, ou um ou outro, e apos isso, usamos o type ali
type AvailableThemes= 'dark' | 'light' --> useState<AvailableThemes>('dark');

Dps, colocamos o onclick onde queremos e criamos a funcation que altera, no caso ali foi
function handleThemeChange(){}

- Temos que "corrigir" o link nativo do html, pra isso, temos que pegar o event disparado e dar o comando pra ele não ser ativado, assim, não trocando a gente de pagina!
event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,

pegamos a tipagem do event, dado pelo proprio html, e após isso vamos desativar essa função
event.preventDefault();  -> Não seguir o link

Com isso tudo, podemos usar o onclick ali, sem ir pra ooutra pagina

Agora vamos criar a function que de fato muda o tema
 setTheme((prevTheme)=> {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        } );

 o que ta rolando aqui é, estamos pegando o tema anterior, e fazendo um condição com ele para mudar o proximo tema
 a condição ali é, se o tema anterior for === dark,  se for verdade vai mudar pra light, se não, vai mudar pra dark, simples, e dps vai a função vai retonar o proximo tema, e assim fica o ciclo.
 
 apos isso, agora vamos usar o hook - "userEffect" para trabalhar com os efeitos colaterais gerado pelo mudança dos temas!
  

*/





