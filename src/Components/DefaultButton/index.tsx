import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'gren' | 'red'
} & React.ComponentProps<'button'>;
//Essa linha acima me possibilita usar o typar diretamente lá no app o button, com o que eu quiser e precisar na hora

export function DefaultButton({
  icon,
  color = 'gren',
  ...props }: DefaultButtonProps) {
  return (
    <>

      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>


    </>
  );
}



