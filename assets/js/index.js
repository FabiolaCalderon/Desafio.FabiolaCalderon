precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const btnSuma = document.querySelector(".suma");
const btnResta =document.querySelector(".resta");
const cantidad = document.querySelector(".cantidad");
const total = document.querySelector(".valor-total");


let cant =1;
let tot = precio * cant;
total.innerHTML =tot;
cantidad.innerHTML = cant;


btnSuma.addEventListener("click", ()=> {
cant = cant+1;
tot= precio*cant;
cantidad.innerHTML =cant;
total.innerHTML =tot

})



btnResta.addEventListener("click", ()=>{
if(cant > 1){
cant = cant-1;
tot = precio *cant;
cantidad.innerHTML=cant;
total.innerHTML = tot;

}
else{
alert("No puedes seleccionar menos de 1")
}

})
