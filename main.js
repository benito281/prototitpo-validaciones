//Validamos la contraseña si la contraseña es menor a 4
//entonces retorna falso pero sino retorna verdadero
const validarContraseña=(contraseña)=>{
if (contraseña.length <= 4) return false
return true
}
  //Si el nombre es menor a 4 retorna falso si no verdadero
const validarNombre=(usuario)=>{
    if (usuario.length<=4) return false
    return true
}


let validaciones=[validarContraseña,
    validarNombre];

let respuesta = document.getElementById('respuesta');
let formulario=document.querySelector("#formulario");
formulario.addEventListener('submit',function(e){
    e.preventDefault();
    let usuario=document.getElementById("user").value;
    let contraseña=document.getElementById("pass").value;
//En esta parte me tira 2 veces el mensaje y no valida cuando todo esta bien
//Lo que busco es que muestre varios mensajes en un solo div 
//En ves de hacer varios divs para cada validacion 

       validaciones.forEach(function(errores){
            if (!errores[0]) {
                respuesta.innerHTML+= ` <div class="alert alert-danger" role="alert">
                EL NOMBRE ES CORTO
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                </button>
             </div>`

                console.log('La contraseña es corta')
            }
            if (!errores[1]) {
                respuesta.innerHTML+= ` <div class="alert alert-danger" role="alert">
                EL CONTRASEÑA ES CORTO
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                </button>
             </div>`
                console.log('El nombres es corto')
            }
            else{
                respuesta.innerHTML+= ` <div class="alert alert-success" role="alert">
                Todo a salido bien
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                </button>
             </div>`
            }
        })
})


  



/*let respuesta = document.getElementById('respuesta');
let formulario=document.querySelector("#formulario");
formulario.addEventListener('submit',function(e){
	e.preventDefault();
	let usuario=document.getElementById("user").value;
	let contraseña=document.getElementById("pass").value;
 let datos = new FormData(formulario)
    const getData = async () => {
       await fetch('insert/post.php',{
        method: 'POST', 
        body: datos
    })
    .then( res => res.json()) 
    .then( data => {
        console.log(data)
    })
    }
    getData()


})*/