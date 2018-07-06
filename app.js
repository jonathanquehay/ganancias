
var dato1=document.getElementById("gananciareal");
var dato2=document.getElementById("gananciamensual");
var fecha=document.getElementById("fecha");
var hora=document.getElementById("horaActual");
var mesAc=document.getElementById("mesA");
var mydate=new Date();
var diasMes=new Date(mydate.getFullYear(),mydate.getMonth(),0).getDate();
const SALDO1 = 150000 * 0.0427/12/mydate.getDate();

const SALDO2 = 260000*0.0417/12/mydate.getDate();
const SALDO3 = 30000*0.02/12/mydate.getDate();
const SALDO4 = 30000*0.05/12/mydate.getDate();
var gana = SALDO1+SALDO2+SALDO3+SALDO4;

var loactual=SALDO1 + SALDO1/mydate.getHours()/mydate.getMinutes()/mydate.getSeconds();
var loactual2=SALDO2 + SALDO2/mydate.getHours()/mydate.getMinutes()/mydate.getSeconds();
var loactual3=SALDO3 + SALDO3/mydate.getHours()/mydate.getMinutes()/mydate.getSeconds();
var loactual4=SALDO4 + SALDO4/mydate.getHours()/mydate.getMinutes()/mydate.getSeconds();
var porSegundo1 = 150000 * 0.0427/12/diasMes/24/60/60;
var porSegundo2 = 260000 * 0.0417/12/diasMes/24/60/60;
var porSegundo3 = 30000 * 0.01/12/diasMes/24/60/60;
var porSegundo4 = 30000 * 0.05/12/diasMes/24/60/60;




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
        gana+= porSegundo1+porSegundo2+porSegundo3+porSegundo4;
        var impuesto= gana - (gana * 0.02);
        dato1.innerHTML = impuesto.toFixed(4);
        setTimeout('show5()',1000);
}

//Mostrar ganancia en tiempo real



