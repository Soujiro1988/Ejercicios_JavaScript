// Esta función se llama cuando se hace clic en un botón.
function encontrarMayor() {
    // Obtenemos los valores ingresados por el usuario en los elementos HTML con los ID 'numero1' y 'numero2' y los convertimos a números enteros.
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    
    // Comparamos los valores de numero1 y numero2 para determinar cuál es el mayor.
    if (numero1 > numero2) {
        // Si numero1 es mayor, mostramos un mensaje indicando que el mayor es numero1 en un elemento HTML con el ID 'resultadoMayor'.
        document.getElementById('resultadoMayor').innerText = 'El mayor es: ' + numero1;
    } else if (numero2 > numero1) {
        // Si numero2 es mayor, mostramos un mensaje indicando que el mayor es numero2 en el mismo elemento HTML.
        document.getElementById('resultadoMayor').innerText = 'El mayor es: ' + numero2;
    } else {
        // Si ambos números son iguales, mostramos un mensaje indicando que los números son iguales en el mismo elemento HTML.
        document.getElementById('resultadoMayor').innerText = 'Los números son iguales';
    }
}
