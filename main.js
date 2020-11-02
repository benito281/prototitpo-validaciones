//Validamos la contraseña si la contraseña es menor a 4
//entonces retorna falso pero sino retorna verdadero
const validarContraseña=(contraseña)=>{
if (contraseña.length <= 4) {
    return true;
}
else{
    return false;
}

}
  //Si el nombre es menor a 4 retorna falso si no verdadero
const validarNombre=(usuario)=>{
    if (usuario.length<=4) {
        return true;
    }
    else{
        return false;
    }
}

const getHtmlAlert=(tipo, mensaje)=>{
    return ` <div class="alert alert-${tipo}" role="alert">
                ${mensaje}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                </button>
             </div>`
 }
 
 const showAlert=(tipo, mensaje, respuesta)=>{
    respuesta.innerHTML= getHtmlAlert(tipo, mensaje);
 }
let respuesta = document.getElementById('respuesta');
let formulario=document.querySelector("#formulario");
formulario.addEventListener('submit',function(e){
    e.preventDefault();
    let usuario=document.getElementById("user").value;
    let contraseña=document.getElementById("pass").value;
//En esta parte me tira 2 veces el mensaje y no valida cuando todo esta bien
//Lo que busco es que muestre varios mensajes en un solo div 
//En ves de hacer varios divs para cada validacion 

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
       //Validaciones
            if (validarNombre(usuario)) {
                respuesta.innerHTML+= ` <div class="alert alert-danger" role="alert">
                EL NOMBRE ES CORTO
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                </button>
             </div>`
                console.log('La contraseña es corta')
            }
            if (validarContraseña(contraseña)) {
        
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
             getData();
            }
        
})


  
//http://127.0.0.2:5500/index.html


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