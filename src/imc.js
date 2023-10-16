function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}

function interpretarIMC(imc) {
  if (imc <= 0) {
    return 'NaN'; // Retorna "NaN" se a altura for igual a zero
  }
  else if (imc > 0 && imc <= 18.5) {
    return "Abaixo do peso";
  } 
  else if (imc >= 18.5 && imc < 24.9) {
    return "Peso normal";
  } 
  else if (imc >= 24.9 && imc < 29.9) {
    return "Acima do peso";
  } 
  else {
    return "Obeso";
  }
}

module.exports = { calcularIMC, interpretarIMC }; // Exporta a função calcularIMC e interpretarIMC
