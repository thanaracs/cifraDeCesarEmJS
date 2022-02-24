var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var btnEnviar = document.getElementById("BtnEnviarCifra");
var btnDescifrar = document.getElementById("descifrar");
const espaco = ' ';

//😜😜😜😈 CIFRA DE CESAR 😈😜😜😜


//chamando a funcao, metodozin novo, é nois
btnEnviar.addEventListener("click", function(e){
    //preventDefault serve para adicionar o evento para não enviar o formulario
    e.preventDefault()    
    pegandoPalavra();
    cifrar();
});

//METODO PARA TRANSFORMAR EM CAIXA ALTA
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
    var chave = parseInt(funcaoPegarPalavra[1]);
    
    
    for (var i = 0; i < palavraDigitada.length; i++ ){ //percorrendo tamanho da palavra digitada
        if (palavraDigitada[i] == espaco){
            palavraCifrada = palavraCifrada + espaco;    
            
        }else{
            var letra = palavraDigitada[i];
            var posicaoNoAlfabeto = alfabeto.lastIndexOf(letra); //posicao de cada letra no alfabeto

            if ( (posicaoNoAlfabeto + chave) > 25)  {
                var restoSubtracao = (parseInt(posicaoNoAlfabeto) + chave) - 25;
                palavraCifrada = palavraCifrada + alfabeto[restoSubtracao - 1];    
            }else{            
                palavraCifrada = palavraCifrada + alfabeto[parseInt(posicaoNoAlfabeto) + chave];    
            }

                   
        }    
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
    var chave = parseInt(funcaoPegarPalavra[1]);
    
    for (var i = 0; i < palavraDigitada.length; i++ ){ //percorrendo tamanho da palavra digitada
        if (palavraDigitada[i] == espaco){
            palavraCifrada = palavraCifrada + espaco; 
        }else{
            var letra = palavraDigitada[i];
            var posicaoNoAlfabeto = alfabeto.lastIndexOf(letra); //posicao de cada letra no alfabeto

            console.log("aqui que a magica acontece de novo!😈");
            if ( (posicaoNoAlfabeto - chave) < 0)  {
                var restoSubtracao = posicaoNoAlfabeto - chave;
                palavraCifrada = palavraCifrada + alfabeto[2 + restoSubtracao];    
            }else{
                palavraCifrada = palavraCifrada + alfabeto[parseInt(posicaoNoAlfabeto) - chave];    
            }
        }
                   
            document.getElementById("resposta").value = palavraCifrada;            
        
    }
}


