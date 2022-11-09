function compara() {
        var a = 1;
        var b = 2;
        if (a==b){
            alert("a y b son iguales");
        } else{
            alert("a y b son diferentes");
        }
}

function resta(a, b) {
    var resta = a - b;
    document.write("<h2>La resta es " + resta + "</h2>");
}

function suma(x, y) {
    var suma = x + y;
    document.getElementById("sumar").innerHTML = "La suma es " + suma;
}

function escribir() {
    valor = document.getElementById('entrada').value;
    document.getElementById('contenido').innerHTML = " " + valor;
}

function escribirRepetido() {
    var valor = String(document.getElementById('entrada').value);
    valorIncludes = valor.includes("dolor de espalda");
    if(valorIncludes==true) {
        document.getElementById('contenido').innerHTML = "Usted requiere un" + valorRepetido;
    }
    
}