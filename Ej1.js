// Esta función se llama cuando se hace clic en un botón.
function verificarPalindromo() {
    // Obtenemos el valor ingresado por el usuario en el elemento HTML con el ID 'palindromo'.
    var texto = document.getElementById('palindromo').value;

    // Creamos una versión del texto en orden inverso al dividirlo en caracteres, revertirlos y unirlos nuevamente.
    var textoReverso = texto.split('').reverse().join('');

    // Comparamos el texto original con el texto invertido para determinar si es un palíndromo.
    if (texto === textoReverso) {
        // Si son iguales, mostramos un mensaje indicando que es un palíndromo en un elemento HTML con el ID 'resultadoPalindromo'.
        document.getElementById('resultadoPalindromo').innerText = 'Es un palíndromo';
    } else {
        // Si no son iguales, mostramos un mensaje indicando que no es un palíndromo en el mismo elemento HTML.
        document.getElementById('resultadoPalindromo').innerText = 'No es un palíndromo';
    }
}
