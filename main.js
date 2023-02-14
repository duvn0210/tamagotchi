const botonHambre = document.getElementById("hambre");
const botonSalud = document.getElementById("salud");
const botonJugar = document.getElementById("jugar");
const botonComer = document.getElementById("comer");
const botonDormir = document.getElementById("dormir");
const img =  document.getElementById("Pikachu");
const juegaDeNuevo = document.getElementById('jugar-de-nuevo')

const startgame = document.getElementById("empezar").addEventListener("click", () => {
  vida() 
})

juegaDeNuevo.addEventListener('click', () => {
  document.getElementById('container-dialog').style="visibility:hidden;"   
  vida();
});

function vida() {
  salud = 100;
  hambre = 100;

  botonSalud.textContent = salud;
  botonHambre.textContent = hambre;

  function empieza_a_jugar() {
    let intervalos = setInterval(() => {
      hambre = hambre-10;
      salud = salud-10;
      botonSalud.textContent = salud;
      botonHambre.textContent = hambre;
      if (salud <= 0 || hambre <= 0) {
        document.getElementById('container-dialog').style="visibility:visible;"
        clearInterval(intervalos);
      }
    }, 3000);
    return intervalos;
  }

  //jugar
  botonJugar.addEventListener("click", function() {
    if (hambre === 100 && salud === 100) {
        salud = 100
        hambre = 100
        botonHambre.textContent = hambre;
        botonSalud.textContent = salud;
    }
    else {
        hambre -=20
        salud -= 5
        botonHambre.textContent = hambre;
        botonSalud.textContent = salud;
    }
  img.src = "./assets/play-pikachu.png";
  setInterval(() => {
    img.src = "./assets/main-pikachu.png"
  }, 3000);
});

  //Comer
  botonComer.addEventListener("click", function() {
    if (hambre === 100) {
        hambre = 100
        botonHambre.textContent = hambre;
    }
    else {
        hambre +=10;
        botonHambre.textContent = hambre;
    }
  img.src = "./assets/eating-pikachu.png";
  setInterval(() => {
    img.src = "./assets/main-pikachu.png"
  }, 2000);
  });

  // Dormir
  botonDormir.addEventListener("click", function() {
    if (hambre === 100 && salud === 100) {
        salud = 100
        hambre = 100
        botonHambre.textContent = hambre;
        botonSalud.textContent = salud;
    }
    else {
        hambre -=10
        salud += 15
        botonHambre.textContent = hambre;
        botonSalud.textContent = salud;
    }
  botonHambre.textContent = hambre;
  botonSalud.textContent = salud;
  img.src = "./assets/sleepy-pikachu.png";
  setInterval(() => {
    img.src = "./assets/main-pikachu.png"
  }, 3000);
  });

  empieza_a_jugar()
}