const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');
const { interpretarIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });

  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

  it('interpreta IMC', () => {
    const imc = 19.5;

    const IMCInterpretado = interpretarIMC(imc);

    expect(IMCInterpretado).to.equal('Peso normal');
  });

  it('interpreta IMC, com IMC inválido', () => {
    const imc = -1;

    const IMCInterpretado = interpretarIMC(imc);

    expect(IMCInterpretado).to.equal('NaN');
  });
});