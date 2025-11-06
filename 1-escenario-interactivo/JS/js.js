const contador = document.querySelector('.contador');
const objetos = document.querySelectorAll('.d1');

let clicks = 0;

objetos.forEach(d1 => {
  d1.addEventListener('click', () => {
    clicks++;
    contador.textContent = clicks;

    d1.classList.add('salto');

    itemPickup.currentTime = 0; // reset sound
    itemPickup.play();

    d1.addEventListener('animationend', () => {
      d1.style.display = 'none';
    }, { once: true });
  });
});

// SONIC

const contadorSonic = document.querySelector('.score2 .score');
const monedas = document.querySelectorAll('.moneda');

let clicksSonic = 0;

monedas.forEach(moneda => {
  moneda.addEventListener('click', () => {
    clicksSonic++;
    contadorSonic.textContent = clicksSonic;

    moneda.classList.add('salto');

    sonicItemPickup.currentTime = 0; // reset sound
    sonicItemPickup.play();

    moneda.addEventListener('animationend', () => {
      moneda.style.display = 'none';
    }, { once: true });
  });
});

// FORTNITE
const contadorFortnite = document.querySelector('.score3 .score');
const armas = document.querySelectorAll('.arma');

let clicksFortnite = 0;

armas.forEach(arma => {
  arma.addEventListener('click', () => {
    clicksFortnite++;
    contadorFortnite.textContent = clicksFortnite;

    // Aplica el efecto de salto
    arma.classList.add('salto');

    fortniteItemPickup.currentTime = 0; // reset sound
    fortniteItemPickup.play();

    // Cuando termine la animación, desaparece
    arma.addEventListener('animationend', () => {
      arma.style.display = 'none';
    }, { once: true });
  });
});


// carrusel

//1. variables

const escenas = document.querySelectorAll(".escena")
const derecha = document.querySelector(".btn-siguiente")
const izquierda = document.querySelector(".btn-anterior")
const miniaturas = document.querySelectorAll(".miniatura")
let indice = 0

// sonidos
const minecraftBg = document.querySelector('.minecraft-bg');
const itemPickup = document.querySelector('.item-pickup');
const sonicBg = document.querySelector('.sonic-bg');
const sonicItemPickup = document.querySelector('.sonic-item-pickup');
const fortniteBg = document.querySelector('.fortnite-bg');
const fortniteItemPickup = document.querySelector('.fortnite-item-pickup');

console.log(escenas)
console.log(derecha)
console.log(izquierda)
console.log(miniaturas)

//2. funciones
function mostrarEscena (i) {
  for (let j = 0; j < escenas.length; j++) {

      escenas[j].classList.remove('activa')
  }

      escenas[i].classList.add('activa')

  // sonidos por escena
  // Minecraft
  if (i === 0) {
    minecraftBg.play();
  } else {
    minecraftBg.pause();
  }
  // Sonic
  if (i === 1) {
    sonicBg.play();
  } else {
    sonicBg.pause();
  }
  // Fortnite
  if (i === 2) {
    fortniteBg.play();
  } else {
    fortniteBg.pause();
  }
}
mostrarEscena (0)

//3. eventos

derecha.addEventListener('click', () => {
  indice = (indice + 1) % escenas.length;
  mostrarEscena(indice);
});

izquierda.addEventListener('click', () => {
  indice = (indice - 1 + escenas.length) % escenas.length;
  mostrarEscena(indice);
});

miniaturas.forEach((miniatura, i) => {
  miniatura.addEventListener('click', () => {
    indice = i;
    mostrarEscena(indice);
  });
});
