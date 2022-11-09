function guardardatos(){
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.celular = document.getElementById("celular").value;
    
}

function recuperardatos(){
    if((localStorage.nombre != undefined)&&(localStorage.celular != undefined)){
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br> Numero de Celular: " + localStorage.celular;
    } else  {
        document.getElementById("datos").innerHTML = "No has ingresado datos en el servidor"
    }
}