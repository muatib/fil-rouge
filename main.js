const burgerMenu = document.getElementById('burger__menu');
const overlay = document.getElementById('menu')

burgerMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
})

