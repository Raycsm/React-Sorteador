import React from "react";
import './botao.css'

const Button =({onClick}) => {

    return(
        <div>
            <button  className="botao" onClick={onClick} >SORTEAR AGORA</button>
        </div>
    )
}

export default Button;