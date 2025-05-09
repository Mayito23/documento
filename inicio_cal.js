document.getElementById("boton").addEventListener("click", function() {
  const añoNacimiento = parseInt(document.getElementById("numero").value);
  const añoActual = new Date().getFullYear();
  
  if (isNaN(añoNacimiento) || añoNacimiento > añoActual) {
    document.getElementById("texto").textContent = "Por favor, ingresa un año válido.";
  } else {
    const edad = añoActual - añoNacimiento;
    document.getElementById("texto").textContent = `Tienes ${edad} años.`;
  }
});
