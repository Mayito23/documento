// Obtener los elementos
const boton = document.getElementById('boton');
const textoInput = document.getElementById('texto');
const resultado = document.getElementById('resultado');

// Añadir un evento al botón
boton.addEventListener('click', function() {
  // Obtener el texto del campo de entrada
  const texto = textoInput.value;

  // Convertir a mayúsculas
  const textoConvertido = texto.toUpperCase();

  // Mostrar el resultado en el <h2>
  resultado.textContent = textoConvertido;
});
