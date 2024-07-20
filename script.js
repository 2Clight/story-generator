const hamburgerBtn=document.querySelector('.btn-bars');
const links=document.querySelector('.links');
const navbar=document.querySelector('.navbar');


hamburgerBtn.addEventListener('click', ()=>{
    console.log('you are clicking')
    links.classList.toggle('show');
    navbar.classList.toggle('color');
    navbar.style.border="none"
})

