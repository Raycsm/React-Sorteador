import React, { useState } from "react";

import Sorteador from "./Sorteador"
import Button from "../../componentes/botao/botao";
import "../Sorteador-numero/Sorteador-numero.css"

function SorteadorNumero(){

    const [min, setMinimo] = useState();
    const [max, setMaximo] = useState();
    const [qutda, setQutda] = useState();
    const [Num, setNum] = useState([])

    const sortear = () => {setNum(Sorteador(min, max, qutda,));}
    

    return(
        <div id="container">
           <div id="titulo"><h1>SORTEADOR DE NÚMEROS</h1></div>
           <div id="form1">
                <label id="text">Sortear</label>
                <input type='number'   onChange={(e1) =>setQutda(e1.target.value)}/>
                <label id="text">números</label>
            </div>
            <div id="form2">
                <label id="text">entre</label>
                <input type='number'  onChange={(e2) =>setMinimo(e2.target.value)}/>
                <label id="text">e</label>
                <input type='number'   onChange= {(e3) => setMaximo(e3.target.value)}/>
           </div>  
           <div>
                <Button  onClick={() => sortear()}/>
           </div>
           <div>
                <h1 className="resultado">{Num}</h1>
           </div>
        </div>
       
    )
}

export default SorteadorNumero;
