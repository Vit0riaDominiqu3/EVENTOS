/*BOTAO COR DE FUNDO*/ 
function minhaFuncao() {
    document.body.style.backgroundColor='#151320';
    document.getElementById("titulo").style.color="#fff";
    document.getElementById("texplica").style.color="#fff";
    document.getElementById("textoA").style.color="#fff";
    document.getElementById("textoB").style.color="#fff";
}




/*TROCAR IMAGENS*/ 
var imagemInicio = "div-2";
var img20 = "image/img20.jpg";

function trocaImg2(){
    document.getElementById("img20").src = img20;
    let aux = imagemInicio;
    imagemInicio = img20;
    img20 = aux;
}

var imagemInicio = "div-2";
var img30 = "image/img30.jpg";

function trocaImg3(){
    document.getElementById("img30").src = img30;
    let aux = imagemInicio;
    imagemInicio = img30;
    img30 = aux;
}

var imagemInicio = "div-2";
var img40 = "image/img-40.jpg";

function trocaImg4(){
    document.getElementById("img40").src = img40;
    let aux = imagemInicio;
    imagemInicio = img40;
    img40 = aux;
}




/*IMAGEM DO CACHORRO NO QUADRADO*/ 
var imagemInicio= "div-2";
var imagemFinal = "image/imagemFinal.png";

function trocar(){
    document.getElementById("figura").src = imagemFinal;
    let aux = imagemInicio;
    imagemInicio = imagemFinal;
    imagemFinal = aux;
}




/*TROCAR CORES*/ 
function cores() {
    document.body.style.backgroundColor='#642F05';
    document.getElementById("titulo").style.color="#fff";
    document.getElementById("texplica").style.color="#fff";
    document.getElementById("textoA").style.color="#fff";
    document.getElementById("textoB").style.color="#fff";
}
function cores2() {
    document.body.style.backgroundColor='#5E040A';
    document.getElementById("titulo").style.color="#fff";
    document.getElementById("texplica").style.color="#fff";
    document.getElementById("textoA").style.color="#fff";
    document.getElementById("textoB").style.color="#fff";
}
function cores3() {
    document.body.style.backgroundColor='#39972f';
    document.getElementById("titulo").style.color="#000";
    document.getElementById("texplica").style.color="#000";
    document.getElementById("textoA").style.color="#000";
    document.getElementById("textoB").style.color="#000";
}
