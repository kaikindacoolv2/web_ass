window.onload = function() {
    document.querySelector('.emaill').style.visibility = "hidden"; 
    document.querySelector('.passwordd').style.visibility = "hidden"; 
    document.querySelector('.in').style.visibility = "hidden";
    document.querySelector('.signUp a').style.color = "whitesmoke";
}
const signUpLink = document.querySelector('.signUp a');

signUpLink.addEventListener('mouseenter', () => {
  signUpLink.style.color = "black";
});

signUpLink.addEventListener('mouseleave', () => {
  signUpLink.style.color = ""; // Reset to default color
});
document.querySelector('#signUp').onclick = function kk()
{
    document.querySelector('.emaill').style.visibility = "hidden"; 
    document.querySelector('.passwordd').style.visibility = "hidden"; 
    document.querySelector('.name').style.visibility = "visible"; 
    document.querySelector('.email').style.visibility = "visible"; 
    document.querySelector('.password').style.visibility = "visible"; 
    document.querySelector('.signUp').innerText = "Sign Up";
}
document.querySelector('#logIn').onclick = function kk()
{
    document.querySelector('.emaill').style.visibility = "visible"; 
    document.querySelector('.passwordd').style.visibility = "visible"; 
    document.querySelector('.name').style.visibility = "hidden"; 
    document.querySelector('.email').style.visibility = "hidden"; 
    document.querySelector('.password').style.visibility = "hidden"; 
    document.querySelector('.signUp').innerText = "Login";
}
document.querySelector('#pText').onclick = function aa ()
{
    document.querySelector('.in').style.visibility = "hidden";
    document.querySelector('.up').style.visibility = "visible";
    document.querySelector('.in').innerText = "Sign Up";
}
document.querySelector('#p1Text').onclick = function aa ()
{
    document.querySelector('.in').style.visibility = "hidden";
    document.querySelector('.up').style.visibility = "visible"; 
}