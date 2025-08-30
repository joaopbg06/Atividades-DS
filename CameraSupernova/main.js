var mediaStream;

function abrirCamera(){
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
            mediaStream = stream;
            const areaVideo = document.getElementById('camera');
            areaVideo.srcObject = stream;
        })
        .catch(function (error) {
            console.error('erro ao acessar a camera:', error)
        })
}

function tirarFoto() {

    const areaVideo = document.getElementById('camera');
    const canvas = document.createElement('canvas');
    canvas.width = areaVideo.videoWidth;
    canvas.height = areaVideo.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(areaVideo, 0, 0, canvas.width, canvas.height);

    const imageDataURL = canvas.toDataURL();

    const fotoDiv = document.getElementById('foto');
    fotoDiv.style.backgroundImage = `url(${imageDataURL})`;

    const divicao = document.querySelector('.divicao');
    const divicao2 = document.querySelector('.divicao2');
    const main = document.querySelector('#main');
    const header = document.querySelector('#header');

    header.style.opacity = 0;
    header.style.height = 0;
    
    divicao.style.opacity = 1;
    divicao.style.height = "50px";

    divicao2.style.opacity = 1;
    divicao2.style.height = "12px";

    main.style.opacity = 1;
    main.style.height = "auto";
}

abrirCamera()

