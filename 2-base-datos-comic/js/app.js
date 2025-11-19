/*const infoComic = document.querySelector(".info-comic")
const listaCapitulos = document.querySelector(".lista-capitulos")

console.log(infoComic)
console.log(listaCapitulos)

//Modificar el contenido de info general del comic

infoComic.innerHTML = `
        <p>${comic.year}</p>
        <h1>${comic.nombreComic}</h1>
        <p>${comic.sipnosis}</p>
        <p>${comic.genero}</p>
`*/

const BannerNM = document.querySelector(".banner")
BannerNM.style.backgroundImage = `url('${comic.portada}`

const listaCap = document.querySelector(".Escenas123")

console.log(BannerNM)
console.log(comic.escenas)

BannerNM.innerHTML = `
   <div class="container" )">
        <h1>${comic.nombreComic}</h1>
        <p>${comic.sinopsis}</p>
        <button>Leer Comic</button>
        </div>
        <h3>SCROLL</h3>
`
comic.escenas.forEach(escena => {
        const miCard = document.createElement("div")
        miCard.classList.add("episode")
        miCard.innerHTML = `
         <h1 class="titu-episodio">${escena.nombre}</h1>
        <img src="${escena.image}" alt="">
        <button>Leer ahora</button>
        `

        listaCap.appendChild(miCard)
        console.log(escena.nombre)
});