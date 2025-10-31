const contador = document.querySelector('.contador');
const objetos = document.querySelectorAll('.d1');

let clicks = 0;

objetos.forEach(d1 => {
  d1.addEventListener('click', () => {
    clicks++;
    contador.textContent = clicks;

    d1.classList.add('salto');

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

}
mostrarEscena (0)
//3. eventos