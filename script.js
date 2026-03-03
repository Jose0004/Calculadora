function sumar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

  const resultado = n1 + n2;
  document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function restar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

  const resultado = n1 - n2;
  document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

function multiplicar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

  const resultado = n1 * n2;
  document.getElementById("resultado").textContent = "Resultado: " + resultado;
}