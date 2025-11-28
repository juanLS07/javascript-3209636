import { comic } from "./bd.js"

//URLSearchParams
//const parametros = new URLSearchParams("id") ;
const param = new URLSearchParams(window.location.search);

const id = parseInt(param.get("id")) 

const persoNM = comic.personajes.find( p => p.id === id)
const contenedor = document.querySelector(".eloy-per")

contenedor.innerHTML = `
    <H1>${persoNM.nombre}</H1>
        <img src="${persoNM.imagen}" alt="">
        <p>${persoNM.descripcion}</p>
        <img src="${persoNM.esc}" alt="">
        <p>${persoNM.desesc}</p>
`