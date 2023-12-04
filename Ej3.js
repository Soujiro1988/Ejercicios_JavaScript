// Esta función se llama cuando se hace clic en un botón.
function listarVocales() {
    // Obtenemos la frase ingresada por el usuario en el elemento HTML con el ID 'fraseVocales'.
    var frase = document.getElementById('fraseVocales').value;

    // Utilizamos una expresión regular (/[aeiou]/gi) para encontrar todas las vocales en la frase, sin importar si son mayúsculas o minúsculas.
    var vocalesEncontradas = frase.match(/[aeiou]/gi);

    // Comprobamos si se encontraron vocales en la frase.
    if (vocalesEncontradas) {
        // Si se encontraron vocales, mostramos un mensaje indicando las vocales encontradas en un elemento HTML con el ID 'resultadoVocales'.
        document.getElementById('resultadoVocales').innerText = 'Vocales encontradas: ' + vocalesEncontradas.join(', ');
    } else {
        // Si no se encontraron vocales, mostramos un mensaje indicando que no se encontraron vocales en el mismo elemento HTML.
        document.getElementById('resultadoVocales').innerText = 'No se encontraron vocales';
    }
}