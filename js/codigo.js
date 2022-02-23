var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var btnEnviar = document.getElementById("BtnEnviarCifra");
var btnDescifrar = document.getElementById("descifrar");

//C = (POSICAO +CHAVE) %26


//chamando a funcao, metodozin novo, é nois
btnEnviar.addEventListener("click", function(e){
    //preventDefault serve para adicionar o evento para não enviar o formulario
    e.preventDefault()    
    pegandoPalavra();
    cifrar();
});

//Pegando a palavra e transfornando em caixa alta
function pegandoPalavra(){
    var palavra = document.getElementById("palavraDigitada").value;
    var chave = document.getElementById("chave").value;
    var palavraCaixaAlta = palavra.toUpperCase();
    
    //console.log(palavraCaixaAlta);
    return [palavraCaixaAlta, chave];
}


function cifrar(){
    var funcaoPegarPalavra = this.pegandoPalavra();
    var palavraDigitada = funcaoPegarPalavra[0];
    var palavraCifrada = '';
    var chave = funcaoPegarPalavra[1];
    

    for (var i = 0; i < palavraDigitada.length; i++ ){ //percorrendo tamanho da palavra digitada

            var letra = palavraDigitada[i];
            var posicaoNoAlfabeto = alfabeto.lastIndexOf(letra); //posicao de cada letra no alfabeto
            palavraCifrada = palavraCifrada + alfabeto[parseInt(posicaoNoAlfabeto) + parseInt(chave)];    

            console.log(palavraCifrada);          
            document.getElementById("resposta").value = palavraCifrada;            
        
    }
}

//DESCIFRAR
btnDescifrar.addEventListener("click", function(e){
    //preventDefault serve para adicionar o evento para não enviar o formulario
    e.preventDefault()    
    pegandoPalavra();
    descifrar();
});

function descifrar(){
    var funcaoPegarPalavra = this.pegandoPalavra();
    var palavraDigitada = funcaoPegarPalavra[0];
    var palavraCifrada = '';
    var chave = funcaoPegarPalavra[1];
    

    for (var i = 0; i < palavraDigitada.length; i++ ){ //percorrendo tamanho da palavra digitada

            var letra = palavraDigitada[i];
            var posicaoNoAlfabeto = alfabeto.lastIndexOf(letra); //posicao de cada letra no alfabeto
            palavraCifrada = palavraCifrada + alfabeto[parseInt(posicaoNoAlfabeto) - parseInt(chave)];    

            console.log(palavraCifrada);          
            document.getElementById("resposta").value = palavraCifrada;            
        
    }
}