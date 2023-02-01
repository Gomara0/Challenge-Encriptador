const mensaje =  document.querySelector("#mensaje");
const codificado =  document.querySelector("#codificado");

function btnEncriptar(){
    const textoCodificado = encriptar(mensaje.value);
    codificado.value = textoCodificado;
    mensaje.value = "";
    codificado.style.backgroundImage = "none";
}

function encriptar(texto){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();
    for(let i = 0;i<matriz.length;i++){
        if(texto.includes(matriz[i][0])){
            texto = texto.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return texto;
}

function copiar(){
    let textoCodificado = document.getElementById('codificado');
    textoCodificado.select();
    textoCodificado.setSelectionRange(0,99999);
    document.execCommand('copy');
    codificado.value = "";
}

function desencriptar(texto){
    let matriz = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    texto = texto.toLowerCase();
    for(let i = 0;i<matriz.length;i++){
        if(texto.includes(matriz[i][0])){
            texto = texto.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return texto;
}

function btnDesencriptar(){
    let textoCodificado = desencriptar(mensaje.value);
    codificado.value = textoCodificado;
    mensaje.value = "";
}