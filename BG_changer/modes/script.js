
const body = document.querySelector('body');
const btn = document.getElementsByClassName("change")[0];

btn.addEventListener("click" , function(){
    if(body.style.backgroundColor === 'black'){
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        btn.textContent = 'Dark Mode';
    }else{
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        btn.textContent = 'light Mode';
    }
});