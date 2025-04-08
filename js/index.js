// 🔐 Función para iniciar sesión del usuario
function Loguear() {
    // 🧍 Obtener valores ingresados por el usuario
    let username = document.getElementById('username').value;
    let password = document.getElementById('clave').value;

    // 📦 Obtener datos del usuario guardados en el localStorage (como array o string)
    let user = JSON.parse(localStorage.getItem("user"));

    // 🧯 Validar si no existe ningún usuario registrado
    if (user == null) {
        alert('No has iniciado sesión');
        window.location.href = "../index.html";
    } 
    // ✅ Validar que el nombre de usuario y la contraseña coincidan
    else if (user[2] == username && user[3] == password) {
        // Guardar solo el username actual como "usuario logueado"
        localStorage.setItem("userLogged", JSON.stringify({
            username: user[2],
            email: user[0]
        }));

        alert('Usuario válido');
        window.location.href = "../vistas/Entrenador.html";
    } 
    // ❌ Usuario o clave incorrectos
    else {
        alert("Usuario o contraseña incorrectos");
    }
}
