import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../Utils/getNextCycle';
import { getNextCycleType } from '../../Utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {

    //peguei o state e coloquei o context aqui
    const { state } = useTaskContext()

    //criando uma array, com tamanho variaval de acordo com o número do cycle que estamos no state 
    const cycleStep = Array.from({ length: state.currentCycle })

    //aqui eu to colando que uma string vai aparecer de acordo com o cycle que estiver, pra usar no tittle  da bolinha
    const cycleDescriptionMap = {
        workTime: 'foco',
        shortBreakTime: 'descanso curto',
        longBreakTime: 'descanso longo'
    }

    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>
                {/* aqui eu to mapeando o array, pra pegar a index dele */}
                {cycleStep.map((_, index) => {
                    //Com a index dele, eu faço a formatação do nextCycle, que fiz la no utius, assim eu configuro o proximo cycle, de acordo com a index que estamos na array!
                    const nextCycle = getNextCycle(index);
                    //mesma coisa praticamente
                    const nextCycleType = getNextCycleType(nextCycle)

                    return (

                        <span
                            //a Key eu expliquei lá em baixo, mas é tipo o ID do cycle
                            key={`${nextCycleType}${nextCycle}`}

                            className={`${styles.cycleDot} ${styles[nextCycleType]}`}

                            //uso o cycleDescription, pra ver qual ciclo eu estou, para com isso, colcoar a string certa no cycle atual!
                            aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}

                            title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}

                        ></span>)

                })}

            </div>

        </div>
    )
}





// Quando a gente fizer uma intenração que vamos exibir varios elementos dessa forma que fizemos, a gente precisa informar para o react uma key - que é um valor unico que eu tenho pra identificar esse elemento
//essa Key o React usa para comparar se elemensto que ja foram redenrizados passaram por uma nova mudança~, e ele faz isso com a key,
// exp, vai redenrizando  assim - 1 - 2 - 3 - 4 -5  / precisa da key, pro react conferir se  na proxima redenrização, os valores 1,2,3,4,5 sofreram alguma alteração.





