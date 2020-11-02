let alert=document.getElementById("respuesta")
let form=document.querySelector('#formulario')
form.addEventListener('submit',(e)=>{
e.preventDefault()
let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;
  

  const insert= async () => {
    let data={
        user,pass
        }
      try {
        const res= await fetch('post.php',{
            method:"POST",
            body:data
        })
        const datas= await res.json()
        console.log(datas)
    }
    catch (error) {
        console.log(error);
    }
      }
    
insert()
})




//console.log("funcionando")
/* let respuesta = document.getElementById('respuesta') */


/* formulario.addEventListener('submit', function(e){
    console.log("click!")
    e.preventDefault()
    let datos = new FormData(formulario)
    console.log(datos)
    console.log(datos.get('user'))
    console.log(datos.get('pass'))
    
    //callbacks, promises, async await
    fetch('post.php',{
        method: 'POST', //verbos http put get delete patch
        body: datos
    })
    .then( res => res.json()) //promesas
    .then( data => {
        console.log(data)
        if(data === "error"){
            respuesta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ALERTA!! LOS CAMPOS NO DEBEN ESTAR VACIOS
            </div>
           `
        }else{
           respuesta.innerHTML =  `
           <div class="alert alert-primary" role="alert">
               ${data}
           </div>
       `  
        }
    })
}) */
/* let boton=document.querySelector('#')
formulario.addEventListener('click', function (e) {
    e.preventDefault()
    let usuario=document.querySelector('#user').value;
    let contraseña=document.querySelector('#pass').value;

    let datos = {
        usuario,contraseña
    }
    let formulario = document.getElementById('formulario').value;
    const insertData = async () => {
        const res = await fetch('post.php', {
            'method': 'POST',
            'body': datos
        })
        const data = await res.json();
        //return data
        if (data === "error") {
            respuesta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ALERTA!! LOS CAMPOS NO DEBEN ESTAR VACIOS
            </div>
           `
        } else {
            respuesta.innerHTML = `
           <div class="alert alert-primary" role="alert">
               ${data}
           </div>
       `
        }
    }
    insertData();
})

 */