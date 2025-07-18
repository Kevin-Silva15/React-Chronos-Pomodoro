import styles from './styles.module.css';

type DefaultInputProps = {
  id:string;
  labelText?: string;
} & React.ComponentProps<'input'>;
//Essa linha acima me possibilita usar o typar diretamente lá no app o input, com o que eu quiser e precisar na hora

export function DefaultInput({id, type, labelText, ...rest}: DefaultInputProps ) {
  return (
    <>
    {labelText ? <label htmlFor='meuInput'>{labelText}</label> : ''}
      <input className={styles.input} id={id} type={type} {...rest} />

    </>
  );
}

// labelText?: string; - pra fazer que uma props seja opcional, que possa ter ou não!

// {labelText ? <label htmlFor='meuInput'>{labelText}</label> : ''}
// Usando um if, dentro do tsx, {condição ? 'Verdadeiro' : 'Falso'} - com isso, podemos desabilitar a Label se não quisermos usar
// existe tbm o {condição && valor}, é um if que não tem else.

//'...rest' - Serve pra que o react aceite as outras propriedades, tipo, pra colocarmos que o input é requerid, ou disable, e por ai vai.



