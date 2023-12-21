const btnLogin = document.getElementById("idLogin");

let estudiantes = [
    {nombre: "Jhon", correo: "Doe", contraseña: "123"},
    {nombre: "didier", correo: "dder", contraseña: "1234"},
    ]

function validarDatos() {
    let email = document.getElementById("idEmail");
    let password = document.getElementById("idPassword");

    if(email.value != ""){
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    }else{
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
    }

    if(password.value != ""){
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
    }else{
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
    }

    estudiantes.forEach(estudiante => {
        if(email.value == estudiante.correo && password.value == estudiante.contraseña){
            sessionStorage.setItem("nombre", estudiante.nombre);
            location.href = "./home.html";
        }else if (email.value == estudiante.correo && password.value != estudiante.contraseña) {
        document.getElementById("idError").innerHTML = "La contraseña no es válida"//solo prueba
        }else if(email.value != estudiante.correo && password.value != estudiante.contraseña){
            document.getElementById("idError").innerHTML = "El correo ni la contraseña son válidas"
        }else if (email.value != estudiante.correo && password.value == estudiante.contraseña){
            document.getElementById("idError").innerHTML = "Correo no válido" //solo de prueba
        }
    });
}