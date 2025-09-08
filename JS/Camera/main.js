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

    const downloadLink = document.createElement('a');
    downloadLink.href = imageDataURL;
    downloadLink.download = 'foto.png';
    downloadLink.textContent = 'clique para baixar';
    document.body.appendChild(downloadLink);
}

function fechar() {
    navigator.mediaDevices.getUserMedia({ video: false, });
    const areaVideo = document.getElementById('camera');
    areaVideo.srcObject = null;
    mediaStream = null
}








