const { sumar, restar, multiplicar, dividir } = require('../src/calculator');
test("Suma correctamente", () => {
  expect(sumar(5, 3)).toBe(8);
});

test("Resta correctamente", () => {
  expect(restar(10, 4)).toBe(6);
});

test("Multiplica correctamente", () => {
  expect(multiplicar(3, 4)).toBe(12);
});

test("Divide correctamente", () => {
  expect(dividir(10, 2)).toBe(5);
});

test("Lanza error al dividir entre 0", () => {
  expect(() => dividir(10, 0)).toThrow("No se puede dividir entre 0");
});