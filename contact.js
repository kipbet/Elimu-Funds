var signupbtn = document.querySelector('.signupbtn');
var modalbg = document.querySelector('.modal-bg');
var modalclose = document.querySelector('.modal-close');

signupbtn.addEventListener('click',function(){
    modalbg.classList.add('bg-active');
});
modalclose.addEventListener('click',function(){
    modalbg.classList.remove('bg-active');
});