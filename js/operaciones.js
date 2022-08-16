function myfuntion_sumar(){
    var x, y, suma, text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    if (isNaN(x) || (isNaN)(y)){
        text = "Introduzca dos numeros";
    }
    else{
        //parceamos x e y para que no se concatenen
        suma = parseFloat(x) + parseFloat(y);
        text =  suma;
    }
    document.getElementById("sumando").innerHTML = text;
}



function myfuntion_restar(){
    var x, y, resta, text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    if (isNaN(x) || (isNaN)(y)){
        text = "Introduzca dos numeros";
    }
    else{
        //parceamos x e y para que no se concatenen
        resta = parseFloat(x) - parseFloat(y);
        text =  resta;
    }
    document.getElementById("sumando").innerHTML = text;
}


function myfuntion_dividir(){
    var x, y, division, text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    if (isNaN(x) || (isNaN)(y)){
        text = "Introduzca dos numeros";
    }
    else{
        //parceamos x e y para que no se concatenen
        division = parseFloat(x) / parseFloat(y);
        text =  division;
    }
    document.getElementById("sumando").innerHTML = text;
}


function myfuntion_multiplicar(){
    var x, y, multiplicacion, text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;

    if (isNaN(x) || (isNaN)(y)){
        text = "Introduzca dos numeros";
    }
    else{
        //parceamos x e y para que no se concatenen
        multiplicacion = parseFloat(x) * parseFloat(y);
        text =  multiplicacion;
    }
    document.getElementById("sumando").innerHTML = text;
}
















