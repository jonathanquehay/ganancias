
var dato1=document.getElementById("gananciareal");
var dato2=document.getElementById("gananciamensual");
var fecha=document.getElementById("fecha");
var hora=document.getElementById("horaActual");
var mesAc=document.getElementById("mesA");
var mydate=new Date();
var diasMes=new Date(mydate.getFullYear(),mydate.getMonth(),0).getDate();
        var SALDO1 = (150000 * 0.0488/12/diasMes)*mydate.getDate();
        var SALDO2 = (260000*0.0417/12/diasMes)*mydate.getDate();
        var SALDO3 = (30000*0.02/12/diasMes)*mydate.getDate();
        var SALDO4 = (30000*0.05/12/diasMes)*mydate.getDate(); 

var gana = SALDO1+SALDO2+SALDO3+SALDO4;

var porSegundo1 = 150000 * 0.0488/12/diasMes/24/60;
var porSegundo2 = 260000 * 0.0417/12/diasMes/24/60;
var porSegundo3 = 30000 * 0.01/12/diasMes/24/60;
var porSegundo4 = 30000 * 0.05/12/diasMes/24/60;
var totalActualhoy =  (gana + porSegundo1 + porSegundo2 + porSegundo3+porSegundo4) - (gana*0.02);

//Para mostrar la fecha actual
var year=mydate.getYear() 
if (year < 1000) 
year+=1900 
var day=mydate.getDay() 
var month=mydate.getMonth() 
var daym=mydate.getDate() 
if (daym<10) 
daym="0"+daym 
var dayarray=new Array("Domingo,","Lunes,","Martes,","Miércoles,","Jueves,","Viernes,","Sábado,")
var montharray=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre")
fecha.innerHTML = dayarray[day]+" "+daym+" de "+montharray[month]+" de "+year;
mesAc.innerHTML = montharray[month]
//Para mostrar la hora actual
function show5(){
        fecha = new Date();
        hor = fecha.getHours();
        minuto = fecha.getMinutes();
        segundo = fecha.getSeconds();
        horita = hor + ":" + minuto + ":" + segundo;
        hora.innerHTML = horita;
        totalActualhoy += (porSegundo1+porSegundo2+porSegundo3+porSegundo4);
        dato1.innerHTML = totalActualhoy.toFixed(4);
        setTimeout('show5()',1000);
}

//Mostrar ganancia en tiempo real



