import { ITarefa } from '../../types/tarefa';
import Item from './Item/item';
import style from'./lista.module.scss';

interface configTarefas {
    tarefas: ITarefa[],
    selecionarTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({ tarefas, selecionarTarefa }:configTarefas){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionarTarefa={selecionarTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}