
//exportando o componete que vai se repetir que praticamente faz a linhas certinhas e deixar as coisas centralizadas e tals, com margem das coisas!

//importando o css dq
import styles from './styles.module.css';

type ContainerProps = {
    children: React.ReactNode;
};


export function Container({ children }: ContainerProps) {
    return (
        <div className={styles.container}>
    <div className={styles.content}> 
           {children}
    </div>
</div>
    
    );
}