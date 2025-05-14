document.getElementById("altura").addEventListener("input", function(e) {
    let valor = e.target.value.replace(/\D/g, ""); // Remove não-dígitos

    if (valor.length > 3) {
        valor = valor.slice(0, 3); // Limita a 3 dígitos
    }

    if (valor.length >= 2) {
        valor = valor.slice(0, valor.length - 2) + "," + valor.slice(valor.length - 2);
    }

    e.target.value = valor;
});


// Função para calcular o IMC
function calcularIMC() {
    // Pega os valores dos inputs de peso e altura
    // Converte para números
    let altura = document.getElementById("altura").value.replace(",", ".");
    let peso = document.getElementById("peso").value;


    console.log(`Altura: ${altura}, Peso: ${peso}`);

    // Verifica se os valores são válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores numéricos válidos e positivos.");
        return;
    }


    let imc = peso / (altura * altura);
    console.log(`IMC calculado: ${imc}`);

    let resultadoTexto = `Seu IMC é: ${imc.toFixed(2)}. `;

    if (imc < 18.5) {
        resultadoTexto += "Classificação: Magreza.";
    } else if (imc < 25) {
        resultadoTexto += "Classificação: Normal.";
    } else if (imc < 30) {
        resultadoTexto += "Classificação: Sobrepeso.";
    } else if (imc < 40) {
        resultadoTexto += "Classificação: Obesidade.";
    } else {
        resultadoTexto += "Classificação: Obesidade Grave.";
    }

    document.getElementById("resultado").innerText = resultadoTexto;
}
// Adicionando o evento de clique no botão
document.getElementById("calcularIMC").addEventListener("click", calcularIMC);