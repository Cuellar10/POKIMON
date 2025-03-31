document.addEventListener("DOMContentLoaded", function () {
    // 🔥 Verificar si el usuario inició sesión
    if (localStorage.getItem("usuarioValido") === "true") {
        mostrarPokimons(); // ✅ Si inició sesión, mostrar los pokimons
    } else {
        console.log("No has iniciado sesión"); // Solo para depurar
    }
});

// 🔥 Definir la clase Pokimon
class Pokimon {
    constructor(nombre, tipo, ataque, defensa, habilidad, evolucion) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.habilidad = habilidad;
        this.evolucion = evolucion;
    }

    mostrarInfo() {
        return `Nombre: ${this.nombre}\nTipo: ${this.tipo}\nAtaque: ${this.ataque}\nDefensa: ${this.defensa}\nHabilidad: ${this.habilidad}\nEvolución: ${this.evolucion}`;
    }
}

// 🔥 Definir la clase Entrenador
class Entrenador {
    constructor(nombre) {
        this.nombre = nombre;
        this.pokimons = [];
    }

    capturarPokimon(pokimon) {
        this.pokimons.push(pokimon);
    }
}

// 🔥 Definir la clase Batalla
class Batalla {
    static ataque(pokimonAtacante, pokimonDefensor) {
        let dano = pokimonAtacante.ataque - pokimonDefensor.defensa;
        dano = dano > 0 ? dano : 0;
        return `${pokimonAtacante.nombre} ataca a ${pokimonDefensor.nombre} causando ${dano} de daño.`;
    }

    static defensa(pokimonDefensor) {
        return `${pokimonDefensor.nombre} se defiende y reduce el daño recibido.`;
    }
}

// 🔥 Función para mostrar los pokimons
function mostrarPokimons() {
    let pokimons = [
        new Pokimon("Fueguito", "Fuego", 50, 30, "Llama ardiente", "MegaCharco"),
        new Pokimon("Mata", "Planta", 40, 35, "Raíces venenosas", "Electroplantachu"),
        new Pokimon("Guajira", "Agua", 45, 40, "Tsunami veloz", "MegaAguazord")
    ];

    let container = document.getElementById("pokimon-container");
    container.innerHTML = "<h2>Mis Pokimons</h2>";

    pokimons.forEach((pokimon, index) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <strong>Nombre:</strong> ${pokimon.nombre} <br>
            <strong>Tipo:</strong> ${pokimon.tipo} <br>
            <strong>Ataque:</strong> ${pokimon.ataque} <br>
            <strong>Defensa:</strong> ${pokimon.defensa} <br>
            <strong>Habilidad:</strong> ${pokimon.habilidad} <br>
            <strong>Evolución:</strong> ${pokimon.evolucion} <br>
            <button onclick="realizarAtaque(${index})">🔥 Atacar</button>
            <button onclick="realizarDefensa(${index})">🛡 Defender</button>
            <br><br>
        `;
        div.style.border = "1px solid black";
        div.style.padding = "10px";
        div.style.margin = "10px";
        div.style.background = "#f9f9f9";
        container.appendChild(div);
    });
}

// 🔥 Función para atacar (usando la clase Batalla)
function realizarAtaque(index) {
    let pokimons = [
        new Pokimon("Fueguito", "Fuego", 50, 30, "Llama ardiente", "MegaCharco"),
        new Pokimon("Mata", "Planta", 40, 35, "Raíces venenosas", "Electroplantachu"),
        new Pokimon("Guajira", "Agua", 45, 40, "Tsunami veloz", "MegaAguazord")
    ];

    let atacante = pokimons[index];
    let defensor = pokimons[(index + 1) % pokimons.length]; // Ataca al siguiente

    alert(Batalla.ataque(atacante, defensor));
}

// 🔥 Función para defender (usando la clase Batalla)
function realizarDefensa(index) {
    let pokimons = [
        new Pokimon("Fueguito", "Fuego", 50, 30, "Llama ardiente", "MegaCharco"),
        new Pokimon("Mata", "Planta", 40, 35, "Raíces venenosas", "Electroplantachu"),
        new Pokimon("Guajira", "Agua", 45, 40, "Tsunami veloz", "MegaAguazord")
    ];

    let defensor = pokimons[index];
    alert(Batalla.defensa(defensor));
}


