const recortar = (cantidadLetras, palabra) => {

    let array = []

    for(let i = 0; i < palabra.length; i++){
    
        palabraRecortada = palabra[i].slice(0, cantidadLetras)
        array.push(palabraRecortada)
    }

    return array


}

console.log(recortar(4,['vanesa', 'santiago']));