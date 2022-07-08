async function send(){
    let nombre, apellidos, correo, telefono = null;
    nombre = document.getElementById('nombre');
    apellidos = document.getElementById('apellidos');
    correo = document.getElementById('correo');
    telefono = document.getElementById('telefono');
    var response = grecaptcha.getResponse();
    if(nombre.value == null || nombre.value == '' || nombre.value.length == 0){
        nombre.classList.add('requerido');       
    } 
    if(apellidos.value == null || apellidos.value == '' || apellidos.value.length == 0){
        apellidos.classList.add('requerido');       
    } 
    if(correo.value == null || correo.value == '' || correo.value.length == 0){
        correo.classList.add('requerido');       
    } 
    if(telefono.value == null || telefono.value == '' || telefono.value.length == 0){
        telefono.classList.add('requerido');       
    }
    if(response.length == 0){
        alert("Captcha no verificado")
    } 
    const rawResponse = await fetch('https://dood-azell-giveaway-api.herokuapp.com/urbk-us', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: nombre.value+' '+apellidos.value, email: correo.value, phoneNumber: telefono.value})
      });      
      const content = await rawResponse.json();
      let cont = document.getElementById('cont');
      if(rawResponse.status == 200){
        nombre.value = "";
        apellidos.value = "";
        correo.value = "";
        telefono.value = "";
        alert('Tus datos han sido enviados correctamente');
        // cont.insertAdjacentHTML(
        //     `<div class="alert alert-success alert-dismissible fade show" role="alert">
        //         Tus datos han sido enviados correctamente.
        //         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        //     </div>`
        // )
      }else{
        alert('Error '+ content.message)
        // cont.insertAdjacentHTML(
        //     `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        //         <strong>Error!</strong>${content.message}.
        //         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        //     </div>`
        // )
         
      }
    //   console.log(rawResponse.status);
}