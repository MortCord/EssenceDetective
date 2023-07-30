onload = function(){
    checkColor(this.localStorage.getItem('color'),this.localStorage.getItem('gradient'));
    changeColor(this.localStorage.getItem('color'),this.localStorage.getItem('gradient'));
}


function checkColor(color,gradient){
    if(color == null){
        localStorage.setItem('color','#0DE2BC');
    }
    if(gradient == null){
        localStorage.setItem('gradient',{
            'color1':"#ABECD6",
            'color2':"#0DE2BC"
        });
    }

}

function changeColor(color,gradient){
    // document.getElementById('oform').style="border: 1px solid " + color;
    const oform = document.getElementsByClassName('oform');
    const prime = document.getElementsByClassName('prime');

    for(let i = 0; i < oform.length; i++){
        oform[i].style="border: 1px solid " + color;
    }

    for(let i = 0; i < prime.length; i++){
        prime[i].style="background: " + color;
    }
}

const colorYellow = () =>{
    onclick="localStorage.setItem('color','#FFCE4F');window.location.href='index3.html'"
}

const colorBlue = () =>{
    onclick="localStorage.setItem('color','#0CDBDB');window.location.href='index3.html'"
}

const colorPink = () =>{
    onclick="localStorage.setItem('color','#FD8EFF');window.location.href='index3.html'"
}

const colorGreen = () =>{
    onclick="localStorage.setItem('color','#0DE2BC');window.location.href='index3.html'"
}

document.getElementById('yellow').addEventListener('click',colorYellow);
document.getElementById('blue').addEventListener('click',colorBlue);
document.getElementById('pink').addEventListener('click',colorPink);
document.getElementById('green').addEventListener('click',colorGreen);