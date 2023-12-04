// Esta función se llama cuando se hace clic en un botón.
function contarVocales() {
    // Obtenemos la frase ingresada por el usuario en el elemento HTML con el ID 'fraseConteoVocales'.
    var frase = document.getElementById('fraseConteoVocales').value;

    // Utilizamos una expresión regular (/[aeiou]/gi) para encontrar todas las vocales en la frase, sin importar si son mayúsculas o minúsculas.
    var resultado = frase.match(/[aeiou]/gi);

    // Comprobamos si se encontraron vocales en la frase.
    if (resultado) {
        // Creamos un objeto 'conteo' para almacenar el conteo de cada vocal (a, e, i, o, u).
        var conteo = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };

        // Iteramos sobre el arreglo 'resultado' que contiene las vocales encontradas.
        resultado.forEach(function(vocal) {
            // Convertimos la vocal a minúscula y la usamos como clave para aumentar el conteo en el objeto 'conteo'.
            conteo[vocal.toLowerCase()]++;
        });

        // Mostramos el resultado del conteo de vocales en un elemento HTML con el ID 'resultadoConteoVocales'.
        document.getElementById('resultadoConteoVocales').innerText = 
            'A: ' + conteo['a'] + ', E: ' + conteo['e'] + ', I: ' + conteo['i'] + ', O: ' + conteo['o'] + ', U: ' + conteo['u'];
    } else {
        // Si no se encontraron vocales, mostramos un mensaje indicando que no se encontraron vocales en el mismo elemento HTML.
        document.getElementById('resultadoConteoVocales').innerText = 'No se encontraron vocales';
    }
}