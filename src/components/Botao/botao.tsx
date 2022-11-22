import React, { HTMLAttributes } from "react";
import style from './botao.module.scss';

interface configBotao extends HTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset" | undefined
}

const Botao = (props: configBotao) => {
    let type: "button" | "submit" | "reset" | undefined

    if (props.type) {
        type = props.type;
    } else {
        type = 'button'
    }

    return (
        <button type={type} className={style.botao} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Botao;