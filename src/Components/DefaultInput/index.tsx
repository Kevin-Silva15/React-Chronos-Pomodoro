type DefaultInputProps = {
  id:string;
} & React.ComponentProps<'input'>;
//Essa linha acima me possibilita usar o typar diretamente lá no app o input, com o que eu quiser e precisar na hora

export function DefaultInput({id, type}: DefaultInputProps ) {
  return (
    <>
      <label htmlFor='meuInput'>task2</label>
      <input id={id} type={type} />

    </>
  );
}