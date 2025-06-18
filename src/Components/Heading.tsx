//agora vamos importar o css 
import styles from './Heading.module.css';

//Criando um componente, que será o header da pagina!
export function Heading(props){
    
    return(
        <h1 className={styles.heading}>{props.children}</h1>
    );
}

//Em Tsx, para colocar uma class, em um elemento, temos que usar " className="" ", com isso fica igual o css

//Para ter um arquivo css próprio desse componente, criamos um arquivo css, de mesmo nome, e adc o ".modules", assim pra sabermos que ele é um arquivo de escopo de css modules
//Esses escopos fazem com que não haja conflito de classes que tenham o mesmo nome
//tipo, em uma maior aplicação, com mais paginas, se fizermos dessa forma, não vamos ter problema de repetir o nome das classes, assim ficando que cada pagina fique bem semantica, e não faça conflito.

//className={`${styles.cyan} ${styles.heading} `} - Para usar duas classes no elemento




