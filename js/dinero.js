function myfuntion_cambio(){
    var billete, totPagar, cambio, text;
    billete = document.getElementById("billete").value;
    totPagar = document.getElementById("totPagar").value;
    
    if (isNaN(billete) || (isNaN)(totPagar)){
        text = "Introduzca dos numeros";
    }
    else{
        //parceamos x e y para que no se concatenen
        cambio = parseFloat(billete) - parseFloat(totPagar);
        text =  cambio;
    }
    document.getElementById("vuelto").innerHTML = text;

    let billetes1000, billetes500, billetes200, billetes100, billetes50, billetes20, billetes10, monedas5, monedas1, cantidadCordobas;

    cantidadCordobas = cambio;

    monedas1 = cantidadCordobas;
    billetes1000 =(monedas1 - monedas1%1000)/1000;
    monedas1 = monedas1%1000;
    billetes500 =(monedas1 - monedas1%500)/500;
    monedas1 = monedas1%500;
    billetes200 =(monedas1 - monedas1%200)/200;
    monedas1 = monedas1%200;
    billetes100 =(monedas1 - monedas1%100)/100;
    monedas1 = monedas1%100;
    billetes50 =(monedas1 - monedas1%50)/50;
    monedas1 = monedas1%50;
    billetes20 =(monedas1 - monedas1%20)/20;
    monedas1 = monedas1%20;
    billetes10 =(monedas1 - monedas1%10)/10;
    monedas1 = monedas1%10;
    monedas5 = (monedas1 - monedas1%5)/5;
    monedas1 = monedas1%5;


    document.getElementById("billetes1000").innerHTML = billetes1000;
    document.getElementById("billetes500").innerHTML = billetes500;
    document.getElementById("billetes200").innerHTML = billetes200;
    document.getElementById("billetes100").innerHTML = billetes100;
    document.getElementById("billetes50").innerHTML = billetes50;
    document.getElementById("billetes20").innerHTML = billetes20;
    document.getElementById("billetes10").innerHTML = billetes10;
    document.getElementById("monedas5").innerHTML = monedas5;
    document.getElementById("monedas1").innerHTML = monedas1;
}
