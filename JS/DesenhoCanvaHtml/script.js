let colorPicker = document.getElementById('colorPicker');
let changeColorButton = document.getElementById('changeColor');
let undoButton = document.getElementById('undo');
let currentColor = '#000000';

changeColorButton.addEventListener('click', function () {
    // Obtenha a cor selecionada pelo usuário
    currentColor = colorPicker.value;
});

let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let desenhando = false;
let traços = []; // Array para armazenar os traços desenhados

canvas.addEventListener('mousedown', function(event){
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});

canvas.addEventListener("mousemove", function(event){
    if(desenhando){
        contexto.strokeStyle = currentColor;
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
});

canvas.addEventListener("mouseup", function(event){
    if (desenhando) {
        desenhando = false;
        traços.push(contexto.getImageData(0, 0, canvas.width, canvas.height)); // Armazena o traço no array
    }
});

undoButton.addEventListener("click", function() {
    if (traços.length > 0) {
        contexto.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
        traços.pop(); // Remove o último traço
        traços.forEach(function(traço) {
            contexto.putImageData(traço, 0, 0); // Redesenha os traços restantes
        });
    }
});