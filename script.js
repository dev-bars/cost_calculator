function mostrarEscolhas() {
    var memoria = document.getElementById("memoria").value;
    var nucleos = document.getElementById("nucleos").value;
    var sistema = document.getElementById("sistema").value;

    //Apresentar o conteúdo das opções selecionadas em tela.
    var resultado = memoria + " - " + nucleos + " - " + sistema;
    document.getElementById("resultado").innerHTML = "<strong>Você selecionou:<br></strong>" + resultado;
  }


function exibirValoresMemoria() {
    var selectElement = document.getElementById("memoria");
    var selectedOption = selectElement.value;
    
    var a, b, c;

    if (selectedOption === "4gb") {
        a = 100,88;
        b = 200,73;
        c = 300,50;
        
    } else if (selectedOption === "8gb") {
        a = 200,19;
        b = 150,15;
        c = 180,88;
    } else if (selectedOption === "16gb") {
        a = 300,26;
        b = 220,49;
        c = 250,88;
    } else if (selectedOption === "32gb") {
        a = 400,75;
        b = 320,19;
        c = 450,88;
    } 

    // Encontrar o valor mais alto
    var max = Math.max(a, b, c);

    // Encontrar o valor mais baixo
    var min = Math.min(a, b, c);

    // Atualizar os elementos com as mensagens
    document.getElementById("maiorMemoria").innerHTML = "Maior valor Memória: " + "R$ " + max;
    document.getElementById("menorMemoria").innerHTML = "Menor valor Memória: " + "R$ " + min;
}


function exibirValoresNucleo() {
    var selectElement = document.getElementById("nucleos");
    var selectedOption = selectElement.value;

    var a, b, c;

    if (selectedOption === "dual-core") {
        a = 100;
        b = 200;
        c = 300;
    } else if (selectedOption === "quad-core") {
        a = 200;
        b = 150;
        c = 180;
    } else if (selectedOption === "octa-core") {
        a = 300;
        b = 220;
        c = 250;
    } 

    // Encontrar o valor mais alto
    var max = Math.max(a, b, c);

    // Encontrar o valor mais baixo
    var min = Math.min(a, b, c);

    // Atualizar os elementos com as mensagens
    document.getElementById("maiorNucleo").innerHTML = "Maior valor Núcleo: " + "R$ " + max;
    document.getElementById("menorNucleo").innerHTML = "Menor valor Núcleo: " + "R$ " + min;
}


