//Ejercicios click   
var EventoClick1 = document.getElementById("EClick1");
var EventoClick2 = document.getElementById("EClick2");
var EventoClick3 = document.getElementById("EClick3");

EventoClick1.addEventListener("click",EventoClick1_action)
EventoClick2.addEventListener("click",EventoClick2_action)
EventoClick3.addEventListener("click",EventoClick3_action)

function EventoClick1_action(){
    EventoClick1.textContent = "Haz escrito en la textbox:"+EventoClick2.value
    console.log("Se ha activado el evento click");
}
function EventoClick2_action(){
    EventoClick2.placeholder = "";
    console.log("Se ha activado el evento click")
}
function EventoClick3_action(){
    EventoClick3.textContent = "Hola!, me has atrapado"
}