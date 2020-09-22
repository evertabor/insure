var menu = document.querySelector("#menu");
var cont = 0;
menu.style.display = "none";

function mostrar(){

    if(cont==0){  
        menu.style.display = "block";
        cont =1;

    }
    else{
        menu.style.display = "none";
        cont = 0;
    }
}
