function Registrar() {
    // 📥 Obtener valores del formulario
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("contrasena").value;
    let passwordConfirm = document.getElementById("contrasenaConfirm").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;

    // ✅ Validaciones una por una

    // 🧍 Nombre mínimo 3 caracteres
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return false;
    }

    // 🧍 Apellido mínimo 3 caracteres
    if (apellido.length < 3) {
        alert("El apellido debe tener al menos 3 caracteres.");
        return false;
    }

    // 📧 Validación de correo electrónico
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("El correo electrónico no es válido.");
        return false;
    }

    // 🔒 Comparar contraseñas
    if (password !== passwordConfirm) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // ☎️ Validar número de teléfono (10 dígitos)
    let telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("El número de teléfono debe tener 10 dígitos.");
        return false;
    }

    // 🏠 Dirección mínima de 5 caracteres
    if (direccion.length < 5) {
        alert("La dirección debe tener al menos 5 caracteres.");
        return false;
    }

    // 📦 Crear objeto con los datos del usuario
    let user = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        telefono: telefono,
        direccion: direccion
    };

    // 💾 Guardar en localStorage como objeto
    localStorage.setItem("user", JSON.stringify(user));

    alert("Usuario registrado correctamente");

    // 🔁 Redireccionar a la vista del entrenador
    window.location.href = "../vistas/Entrenador.html";
}
