import React, {useEffect} from "react";
import '../Relogio/Relogio.css'

 function Relogio(){

    const [timeState, setTimeState] = React.useState();

    useEffect(()=>{
        setInterval(() => {
            const date = new Date();
            setTimeState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    return(
        <div>
            <h1 id="hora">{timeState}</h1>
        </div>
    )
}

export default Relogio;