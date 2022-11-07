function Sorteador(min, max, qutda){

    var resultado = [];
    qutda= parseInt(qutda) -1;
    min = parseInt(min)
    max = parseInt(max) + 1;

    for (var i=0; i<= qutda; i++) {
        
        var sort_aleatorio = Math.random(), numeros = Math.floor
        (sort_aleatorio * (max-min)) + min;
        resultado.push(numeros);
    }

    return (resultado.join(' - '));
}

export default Sorteador;