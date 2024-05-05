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
        a = 100;
        b = 200;
        c = 300;
        
    } else if (selectedOption === "8gb") {
        a = 200;
        b = 300;
        c = 400;
    } else if (selectedOption === "16gb") {
        a = 300;
        b = 400;
        c = 500;
    } else if (selectedOption === "32gb") {
        a = 400;
        b = 500;
        c = 600;
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
        a = 400;
        b = 500;
        c = 600;
    } else if (selectedOption === "octa-core") {
        a = 600;
        b = 700;
        c = 900;
    } 

    // Encontrar o valor mais alto
    var max = Math.max(a, b, c);

    // Encontrar o valor mais baixo
    var min = Math.min(a, b, c);

    // Atualizar os elementos com as mensagens
    document.getElementById("maiorNucleo").innerHTML = "Maior valor Núcleo: " + "R$ " + max;
    document.getElementById("menorNucleo").innerHTML = "Menor valor Núcleo: " + "R$ " + min;
}


//Função calcular a média da Memória
function calcularMediaMemoria(a, b, c) {
    var soma = a + b + c;
    var media = soma / 3;
    return media;
}

function calcularQuandoClicadoMemoria() {
    var selectElement = document.getElementById("memoria");
    var selectedOption = selectElement.value;
    var a, b, c;

    if (selectedOption === "4gb") {
        a = 100;
        b = 200;
        c = 300;
        
    } else if (selectedOption === "8gb") {
        a = 200;
        b = 300;
        c = 400;
    } else if (selectedOption === "16gb") {
        a = 300;
        b = 400;
        c = 500;
    } else if (selectedOption === "32gb") {
        a = 400;
        b = 500;
        c = 600;
    } 

    var media = calcularMediaMemoria(a, b, c); 
    document.getElementById("mediamemoria").innerHTML = ("O valor médio da memória nesta configuração é:" + media);
}




//Função calcular a do Núcleo
function calcularMediaNucleo(a, b, c) {
    var soma = a + b + c;
    var media = soma / 3;
    return media;
}


function calcularQuandoClicadoNucleo() {
    var selectElement = document.getElementById("nucleos");
    var selectedOption = selectElement.value;
    var a, b, c;

    if (selectedOption === "dual-core") {
        a = 100;
        b = 200;
        c = 300;
    } else if (selectedOption === "quad-core") {
        a = 400;
        b = 500;
        c = 600;
    } else if (selectedOption === "octa-core") {
        a = 400;
        b = 600;
        c = 800;
    } 

    var media = calcularMediaNucleo(a, b, c); 
    document.getElementById("medianucleo").innerHTML = ("O valor médio da memória nesta configuração é:" + media);
}

