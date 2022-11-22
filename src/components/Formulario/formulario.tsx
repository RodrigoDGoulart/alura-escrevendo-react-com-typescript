import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao/botao";
import style from './formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface configFormulario {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Formulario = (props: configFormulario) => {

    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00');

    const adicionarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.setTarefas(tarefasAntigas => [...tarefasAntigas,{
            tarefa,
            tempo,
            selecionado: false, 
            completado: false,
            id: uuidv4()
        }]);
        setTarefa('');
        setTempo('00:00');
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type='text'
                        name='tarefa'
                        id='tarefa'
                        placeholder="O que você quer estudar"
                        value={tarefa}
                        onChange={e => setTarefa(e.target.value)}
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type='time'
                        step='1'
                        name='tempo'
                        id='tempo'
                        min='00:00:00'
                        max='23:59:59'
                        value={tempo}
                        onChange={e => setTempo(e.target.value)}
                    />
                </div>
                <Botao type='submit'>
                    Adicionar
                </Botao>
            </form>
    )
}

export default Formulario;