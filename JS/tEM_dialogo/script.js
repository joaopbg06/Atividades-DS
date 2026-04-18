
const fight = document.getElementById('img1');
const act = document.getElementById('img2');
const item = document.getElementById('img3');
const mercy = document.getElementById('img4');

fight.addEventListener('mouseover', () => {
    fight.src = 'img/1select.png';
});

fight.addEventListener('mouseout', () => {
    fight.src = 'img/1.png';
});

act.addEventListener('mouseover', () => {
    act.src = 'img/2select.png';

});

act.addEventListener('mouseout', () => {
    act.src = 'img/2.png';
});

item.addEventListener('mouseover', () => {
    item.src = 'img/3select.png';

});

item.addEventListener('mouseout', () => {
    item.src = 'img/3.png';
});

mercy.addEventListener('mouseover', () => {
    mercy.src = 'img/4select.png';

});

mercy.addEventListener('mouseout', () => {
    mercy.src = 'img/4.png';
});

const speed = 50;
let i = 0;

const text = "* HUmano! bOia A loja TeM, TeM qUer DindIN. TeM paGar FaCul ";
const text2 = "* MaS TeM qUeR NeSScaLL BaLL !!";



var audio = new Audio('som/song.mp3');
    audio.loop = true;
    audio.play();




function escrever1() {
    document.getElementById("text").style.display = 'block'
    document.getElementById("text2").style.display = 'none'
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        
        i++;
        setTimeout(escrever1, speed);
    } else {
        i = 0;
        setTimeout(escrever2, 500)
    } 
}

function escrever2() {
    document.getElementById("text").style.display = 'none'
    document.getElementById("text2").style.display = 'block'
    if (i < text2.length) {
        document.getElementById("text2").innerHTML += text2.charAt(i);
        i++;
        setTimeout(escrever2, speed);
    }
}





escrever1();
