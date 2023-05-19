
//el LET es para declarar una variable

// i = es para que tome letras minusculas y mayusculas
// g = toma en cuenta  todas las letras/palabras del string
// m = toma multiples lineas

// para caracteres especiales /\"el caracter especial"/



function encriptar(){
    var cant = parseInt(prompt("cantidad de iteraciones"));

    var frase = document.getElementById("textDesenc").value.toLocaleLowerCase();
    var textoEncriptado = frase;
    for(let i = 0; i < cant; i++){
    textoEncriptado = textoEncriptado.replace(/h/img , "enter");
    textoEncriptado = textoEncriptado.replace(/i/img , "imes");
    textoEncriptado = textoEncriptado.replace(/a/img , "ai");
    textoEncriptado = textoEncriptado.replace(/o/img , "ober");
    textoEncriptado = textoEncriptado.replace(/u/img , "ufat");

    document.getElementById("textEncrip").value = textoEncriptado;    
    }
}

function pasar(){
    var textoEncriptado = document.getElementById("textEncrip").value;
    document.getElementById("textDesenc").value = textoEncriptado;
    
}

function desencriptar(){

    var cant = parseInt(prompt("cantidad de iteraciones"));
    var frase = document.getElementById("textDesenc").value.toLocaleLowerCase();

    let textoEncriptado = frase;

    for(let i = 0; i < cant; i++){

    textoEncriptado = textoEncriptado.replace(/enter/img , "e");
    textoEncriptado = textoEncriptado.replace(/imes/img , "i");
    textoEncriptado = textoEncriptado.replace(/ai/img , "a");
    textoEncriptado = textoEncriptado.replace(/ober/img , "o");
    textoEncriptado = textoEncriptado.replace(/ufat/img , "u");

    document.getElementById("textEncrip").value = textoEncriptado;
    }

    
}

function copiar(){
    var contenido = document.getElementById("textEncrip");
    contenido.select();
    document.execCommand("copy");
    document.getElementById("textEncrip").value = "texto copiado!!";
}