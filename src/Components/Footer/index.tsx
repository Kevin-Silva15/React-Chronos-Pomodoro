
import styles from './styles.module.css';



//Criando um componente, que será o header da pagina!
export function Footer() {
    return (
        <footer className={styles.footer}>
            <a href=''>Entenda como é a técnica de Pomodoro</a>
            <a href=''>Choronos Pomdoro &copy; {new Date().getFullYear()} - feito com ❤️ </a>
        </footer>
    
    );
}

