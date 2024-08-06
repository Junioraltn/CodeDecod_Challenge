//Animação das Cores----------------------------------------
function colorir(cor){
    let svgObject = document.getElementById('svgg');
    let svgDoc = svgObject.contentDocument;
    let elementsToChange =  svgDoc.querySelectorAll('.alterar');
    elementsToChange.forEach(element=>{
    element.setAttribute("fill",cor);
    })
}
//Chamada da Animação----------------------------------------
const T1 = document.getElementById('T1');
    T1.addEventListener("click",()=>{
        animar(T1,"blue",T2);

});
const T2 = document.getElementById('T2');
    T2.addEventListener("click",()=>{
        animar(T2,"red",T1);

});
//Animador---------------------------------------------------------------
function animar (TextAreaPrincipal,cor,TextAreaSec){
    colorir(cor);
    TextAreaSec.value="";
    var AnimacaoDisplay = document.getElementById("Animacao").style.display;
    
    if (TextAreaPrincipal.value.trim() === "" && AnimacaoDisplay === "none"){
        document.getElementById("Animacao").style.display= "block";
        document.getElementById("cop").style.display="none";
        document.getElementById("TextoResultado").innerHTML= "";
        document.getElementById("Comunicado").innerHTML= "";
        document.getElementById("Comunicado2").innerHTML= "";
    }
}

//VALIDADOR-------------------------------------------------
const entradaT1 = document.getElementById("T1");
var invalidChars = {};

entradaT1.addEventListener("input", function() {
    const input = this.value;
    invalidChars={}
    const invalidos = /[^a-z' ']/;
  
    for (let i = 0; i < input.length; i++) {
      if (invalidos.test(input[i])) {
        invalidChars[i + 1] = input[i]; // Armazena a posição (1-indexed) e o caractere inválido
        document.getElementById("Comunicado").innerHTML= "Caracteres Inválidos"
        document.getElementById("Comunicado2").innerHTML= "{..., Posição :  Caracter , ...}"
        document.getElementById("TextoResultado").innerHTML= JSON.stringify(invalidChars);
        document.getElementById("Animacao").style.display="none";
      }
    }
    TesteInvalido(invalidChars);
    return invalidChars
  });

  function TesteInvalido(invalido) {
        
    let testeInconcistencia = document.getElementById("TextoResultado"); ///ver

    if (Object.keys(invalido).length == 0){
        document.getElementById("Animacao").style.display= "block";
        document.getElementById("cop").style.display="none";
        document.getElementById("TextoResultado").innerHTML= "";
        document.getElementById("Comunicado").innerHTML= "";
        document.getElementById("Comunicado2").innerHTML= "";
    }

  }



  //-----------------------------------------------------------------------

//Chaves para Criptografia e chaves para DesCriptografia---------------------------------
const chavesC = {"a":"ai","e":"enter","i":"imes","o":"ober","u":"ufat"};
const chavesD = {"ai":"a","enter":"e","imes":"i","ober":"o","ufat":"u"};

//Chamada das Funções----------------------------------------------------
function Criptografar(){
    Master("T1","criptografar");
}
function DesCriptografar(){
    Master("T2","descriptografar");
}

let resultado=""
//Função Que faz Tudo-------------------------------------------------------------------
function Master(textArea,acao){
    let texto = document.getElementById(textArea).value

    if (texto == ""){
        alert("Não existe texto para criptografar ou descriptografar");
    }
    else{
        if (Object.keys(invalidChars).length > 0){
            alert("Não é possivel criptografar ou descriptografar, pois Existe ao menos um caracter inválido no seu texto");
        }
        else{
            //=========
            resultado=""
            //=========
            if (acao=="criptografar"){
                for (i of texto) {
                    let pivo = chavesC[i];
                    if (pivo !== undefined){
                        resultado+= chavesC[i];
                    }
                    else{
                        resultado+= i;
                    }
                }
            }
            if (acao == "descriptografar"){
                let pivor=4
                let inicio=0
                let tamanho=texto.length
                let maior=parseInt(tamanho/5);
                let medio=parseInt(tamanho/4);
                let minimo=parseInt(tamanho/2);

                for(let i=0;i<=(tamanho-1);i++){
                    
                    if (parseInt(i/5)<=maior && chavesD[texto.slice(i,i+5)] != undefined){
                        resultado+=chavesD[texto.slice(i,i+5)];
                        i+=4
                        continue
                    }
                    else {
                            if (parseInt(i/4)<=medio && chavesD[texto.slice(i,i+4)] != undefined) {
                                resultado+=chavesD[texto.slice(i,i+4)];
                                i+=3
                                continue
                            } else {
                                if (parseInt(i/2)<=minimo && chavesD[texto.slice(i,i+2)] != undefined) {
                                    resultado+=chavesD[texto.slice(i,i+2)];
                                    i+=1
                                    continue
                                } else {
                                    resultado+=texto[i];
                                    continue
                                }
                            }
                        }
                    }
            }
            document.getElementById("Animacao").style.display="none";
            document.getElementById("TextoResultado").innerHTML= resultado
            document.getElementById("cop").style.display="block"
            return resultado
        }
    }
}

function Copiar(){
    

    navigator.permissions.query({ name: "clipboard-write" }).then((result) => { //---
        if (result.state === "granted" || result.state === "prompt") { //---
          /* write to the clipboard now */
        navigator.clipboard.writeText(resultado)
        alert("Copiado com Sucesso");
        }
      });


}

