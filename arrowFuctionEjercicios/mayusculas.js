const capitalizarPalabra = (frase) => {

    let nuevaFrase = frase.split(' ')
    let nuevoArreglo = []

    for(let i = 0; i < nuevaFrase.length; i++){
    
        nuevo = nuevaFrase[i].charAt(0).toUpperCase() + nuevaFrase[i].slice(1)
        nuevoArreglo.push(nuevo)
    }

    nuevoArreglo.join('')
    return nuevoArreglo
}

console.log(capitalizarPalabra("hola Como estas"))