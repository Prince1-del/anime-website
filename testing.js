


/* --------------lOGIN---------------- */
const login =document.querySelector('.btn')
const log =document.querySelector('.login')
const pasword= document.querySelector('.login .form .password input[type="password"]')
const passwrdicon =document.querySelector('.login .form .password i')

passwrdicon.onclick=()=>{
    if(pasword.type =='password' ){
        pasword.type ='text'
        passwrdicon.classList.add('active');
    }else{
        pasword.type='password'
        passwrdicon.classList.remove('active')
    }
}

login.addEventListener('click', () => log.classList.add('active'))
let fc = document.getElementsByClassName("fc")
for(let i = 0; i < fc.length; i++){
    fc[i].addEventListener("click", function(){
        document.getElementsByClassName("login")[0].classList.remove('active')
        document.getElementsByClassName("signup")[0].classList.remove("active")
    })
}






/* --------------lOGIN---------------- */

const password= document.querySelector('.signup .form .password input[type="password"]')
const passwordicon =document.querySelector('.signup .form .password i')
const signup = document.querySelector('.login.active a')
let page = document.querySelector('.signup')
const signup_switch = document.getElementById("signup_switch")
signup_switch.addEventListener("click", ()=>{
    document.getElementsByClassName("login")[0].classList.remove('active')
    document.getElementsByClassName("signup")[0].classList.add("active")
})
    document.getElementById("login_switch").addEventListener("click", function (){
    document.getElementsByClassName("login")[0].classList.add('active')
    document.getElementsByClassName("signup")[0].classList.remove("active")
 })
passwordicon.onclick=()=>{
    if(pasword.type =='password' ){
        pasword.type ='text'
        passwordicon.classList.add('active');
    }else{
        pasword.type='password'
        passwordicon.classList.remove('active')
    }
}




/* ------------------NAVBAR----------------- */
const navbar=document.querySelector('.nav-link')
const btnMenu =document.querySelector('.btn-menu')
const btnClose =document.querySelector('.btn-close')

btnMenu.addEventListener('click', () => navbar.classList.add('active'))
btnClose.addEventListener('click', () => navbar.classList.remove('active'))

/* ---------------BUTTON----------------- */
const btnTabs =document.querySelectorAll('.button')
const tabContent=document.querySelectorAll('.content_img')
btnTabs.forEach((btn, indx) => {
    btn.addEventListener('click',() => {
        btnTabs.forEach((btnE)=> btnE.classList.remove('active'));
        btn.classList.add('active')
        tabContent.forEach((mov)=> mov.classList.remove('active'));
        tabContent[indx].classList.add('active')
    })
})