
//CAPTURAMOS EL FORMULARIO POR SU ID
const formLoginEl = document.getElementById("formLogin");


function validarCredenciales(email, password){
    //CREDENCIALES SIMULADAS DE LA BASE DE DATOS
    let emailDB = "usuario@gmail.com";
    let passwordDB = "123456";

    if(email == emailDB && password == passwordDB){
        //AQUÍ REALIZAMOS LAS ACCIONES SI LAS CREDENCIALES SON VÁLIDAS
        alert("Credenciales correctas, gracias por inciar sesión!");
        //LOCATION PERMITE REDIRECCIONAR AL USUARIO
        location.href = "./index.html";
        
    }else {
        //AQUÍ REALIZAMOS LAS ACCIONES SI NO SE CUMPLEN LA VALIDACIÓN
        alert("Credenciales incorrectas, vuelva a intentar!");
    }

    
}

//AGREGAR UN EVENTO SUBMIT AL FORMULARIO (ENVIAR LOS DATOS)

formLoginEl.addEventListener("submit", function(event){

    //DETENEMOS EL EVENTO / ACCIONES POR DEFECTO DEL FORMULARIO
    event.preventDefault();

    //CAPTURAMOS LOS VALORES INGRESADOS POR EL USUARIO EN LOS INPUTS
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    validarCredenciales(email, password);

});