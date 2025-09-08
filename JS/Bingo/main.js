window.onload = initALL;

function initALL(){
    document.getElementById("reload").onclick = outraCartela;
    novaCartela(); 
}
function novaCartela(){
    for (var i = 0; i<24; i++){
        coloqueNum(i)
    }
}

var velhaCartela = new Array(0,0,0,0,0,      //B 
                            1,1,1,1,1,      //I
                            2,2,2,2,     //N
                            3,3,3,3,3,      //G
                            4,4,4,4,4,);    //O 
var uNumeros = new Array(76);

function coloqueNum(thisNum){
    let vNum = "num"+thisNum;
    let colunas= velhaCartela[thisNum]*15;

    let newNum;
    do{
        newNum=colunas + getNewNum() + 1;
    } while (uNumeros[newNum]);

    uNumeros[newNum]=true
    document.getElementById(vNum).innerHTML = newNum
    document.getElementById(vNum).classList=""
    document.getElementById(vNum).onmousedown = trocaCor;
}
function getNewNum() {
    return(Math.floor(Math.random()*15));
}
function outraCartela(){
    for(let i =1; i<uNumeros.length; i++){
        uNumeros[i]= false
    }
    novaCartela();
    return false;
}
function trocaCor(evt){
if(evt){
    thisNum = evt.target;
}
if(thisNum.className ==""){
    thisNum.className = "trocaBG"
} else {
    thisNum.className = ""
}
}