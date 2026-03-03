const calc = require('./calculator');

function ejecutarDivision() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

  try {
    const resultado = calc.dividir(n1, n2);
    document.getElementById("resultado").textContent = resultado;
  } catch (error) {
    document.getElementById("resultado").textContent = error.message;
  }
}

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

function dividir() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

  if (n2 === 0) {
    document.getElementById("resultado").textContent = "No se puede dividir entre 0";
    return;
  }

  const resultado = n1 / n2;
  document.getElementById("resultado").textContent = "Resultado: " + resultado;
}