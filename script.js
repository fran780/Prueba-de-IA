document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let usuario = document.getElementById("usuario");
    let contraseña = document.getElementById("contraseña");
    let errorUsuario = document.getElementById("error-usuario");
    let errorContraseña = document.getElementById("error-contraseña");

    let valid = true;

    if (usuario.value.trim() === "") {
        errorUsuario.style.display = "block";
        valid = false;
    } else {
        errorUsuario.style.display = "none";
    }

    if (contraseña.value.trim() === "") {
        errorContraseña.style.display = "block";
        valid = false;
    } else {
        errorContraseña.style.display = "none";
    }


    const usuarioCorrecto = "0105200400336";
    const contraseñaCorrecta = "Usuario1234";

    if (valid) {
        if (usuario.value.trim() === usuarioCorrecto && contraseña.value.trim() === contraseñaCorrecta) {
            window.location.href = "menu.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    }
});