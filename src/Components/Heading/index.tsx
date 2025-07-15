//agora vamos importar o css 
import styles from './styles.module.css';


//Pra tipar o o children do nosso Heading
type HeadingProps = {
    children: React.ReactNode;
};
//  children: React.ReactNode; - Faz com que o children aceite tudo, não apenas um tipo apenas


//Criando um componente, que será o header da pagina!
export function Heading({ children }: HeadingProps) {
    return (
        <h1 className={styles.heading}>{children}</h1>
    
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


