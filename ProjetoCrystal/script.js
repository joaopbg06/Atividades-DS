function mostrarMenu() {
    let icone = document.getElementById('icone')
    let menu = document.getElementById('menu-header')

    if (getComputedStyle(menu).display == 'none'){
        menu.style.display = 'flex';
        icone.classList.remove('fa-bars');
        icone.classList.add('fa-xmark')  
    }

    else{
        menu.style.display = 'none';
        icone.classList.remove('fa-xmark') 
        icone.classList.add('fa-bars');
    }

}