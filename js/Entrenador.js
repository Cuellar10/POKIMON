// 🔐 Verificar si el usuario ha iniciado sesión
function GetDataUser() {
    let dataUser = localStorage.getItem("user");
    
    if (dataUser === null) {
        alert('No has iniciado sesión');
        window.location.href = "../index.html"; // Redirige si no hay sesión
    }
}

GetDataUser(); // Ejecuta la verificación al cargar el archivo

// 🕒 Esperar que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    
    // 📦 Lista de Pokimones disponibles
    const pokimones = [
        { nombre: "Pikachu", tipo: "Eléctrico", ataque: 40, defensa: 29, ph: 73 },
        { nombre: "Charmander", tipo: "Fuego", ataque: 42, defensa: 25, ph:81 },
        { nombre: "Charizard", tipo: "Fuego / Volador", ataque: 53, defensa: 44, ph: 105 },
        { nombre: "Bulbasaur", tipo: "Planta / Veneno", ataque: 31, defensa: 27, ph: 75 },
        { nombre: "Squirtle", tipo: "Agua", ataque: 30, defensa: 19, ph:87},
        { nombre: "Gengar", tipo: "Fantasma / Veneno", ataque: 50, defensa: 45, ph:124 },
        { nombre: "Butterfree", tipo: "Bicho / Volador", ataque: 34, defensa: 20, ph:64 }
    ];

    // 🎯 Elementos del DOM que usaremos
    const select = document.getElementById("nombrePokimon");
    const tipoInput = document.getElementById("tipo");
    const ataqueInput = document.getElementById("ataque");
    const defensaInput = document.getElementById("defensa");
    const phInput = document.getElementById("ph");
    const btnCombatir = document.getElementById("btnCombatir"); 
    const resultadoDiv = document.getElementById("resultadoCombate");

   

    // ⚔️ Al hacer clic en el botón "Combatir"
    btnCombatir.addEventListener("click", function () {
        const nombreJugador = select.value;
        const pokimonJugador = pokimones.find(p => p.nombre === nombreJugador);

        if (!pokimonJugador) {
            resultadoDiv.textContent = "Selecciona tu Pokimon primero.";
            return;
        }

        // 🎲 Elegir un rival aleatorio que no sea el mismo del jugador
        const rivales = pokimones.filter(p => p.nombre !== nombreJugador);
        const rival = rivales[Math.floor(Math.random() * rivales.length)];

        // 📊 Calcular el poder total de ambos
        const poderJugador = pokimonJugador.ataque + pokimonJugador.defensa;
        const poderRival = rival.ataque + rival.defensa;

        // 🧾 Mostrar el resultado del combate
        let mensaje = `🔥 ${nombreJugador} (Poder: ${poderJugador}) vs ${rival.nombre} (Poder: ${poderRival})\n\n`;

        if (poderJugador > poderRival) {
            mensaje += `🎉 ¡${nombreJugador} ha derrotado a ${rival.nombre}!`;
        } else if (poderJugador < poderRival) {
            mensaje += `😵 ¡${rival.nombre} ha vencido a ${nombreJugador}!`;
        } else {
            mensaje += `🤝 ¡Empate entre ${nombreJugador} y ${rival.nombre}!`;
        }

        resultadoDiv.textContent = mensaje;
    });
});


