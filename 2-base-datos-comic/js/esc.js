import { comic } from "./bd.js";

const parametro = new URLSearchParams (window.location.search)

const id = parseInt(parametro.get("id")) 

const escNM = comic.escenas.find ( p => p.id === id)
const container = document.querySelector(".perso-par")

container.innerHTML = `
     <h1>${escNM.nombre}</h1>

         <h1>${escNM.personajes}</h1>
            </div>

        <h1 class="titu-epi">OBJETOS MISTERIOSOS</h1>
        <div class="video123">
           
            <video controls width="900">
                <source src="./Videos/videoNM.mp4" type="video/mp4">
            </video>
            
            <p class="descrip-esc">${escNM.descripcion}</p>
`