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
    const prime = document.getElementsByClassName('prime');


    for(let i = 0; i < prime.length; i++){
        prime[i].style="background: " + color;
    }
}