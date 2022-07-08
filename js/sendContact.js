async function send(){
    let nombre, apellidos, correo, telefono = null;
    nombre = document.getElementById('nombre');
    apellidos = document.getElementById('apellidos');
    correo = document.getElementById('correo');
    telefono = document.getElementById('telefono');

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
    const rawResponse = await fetch('https://dood-azell-giveaway-api.herokuapp.com/urbk-us', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: nombre.value+' '+apellidos.value, email: correo.value, phoneNumber: telefono.value})
      });
      const content = await rawResponse.json();

      console.log(content);
}