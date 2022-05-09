const resultado = document.querySelector('#resultado')
const elementOption = ["Fuego", "Hielo", "Madera", "Viento", "Tierra", "Trueno", "Agua", "Neutral", "Luz", "Oscuridad"]
const elementSelect = document.querySelector('#element')
const familyOption = ["Dark Area", "Deep Savers", "Dragons Roar", "Jungle Troopers", "Metal Empire", "Nature Spirits",
    "Nightmare Soldiers", "TBD", "Unknown", "Virus Busters", "Wind Guardians"
]
const familySelect = document.querySelector('#family')
const levelOption = ["In-Trainig", "Rookie", "Champion", "Ultimate", "Mega", "BurstMega", "Fusion"]
const levelSelect = document.querySelector('#level')
const typeOption = ["Virus", "Data", "Neutral", "Vacuna"]
const typeSelect = document.querySelector('#type')
var guardarElDigimon = ''

document.addEventListener('DOMContentLoaded', () => {
        mostrarDigimons(digimons)
        llenarSelect()
    }

)

function mostrarDigimons(digimons) {
    limpiarHTML()
    digimons.forEach(digimon => {
        // const digimonLink = document.createElement('a')
        const digimonIMG = document.createElement('img')
        digimonIMG.setAttribute('id',digimon.nombre)
        // digimonLink.href = digimon.linkweb
        digimonIMG.src = digimon.imagen
        // resultado.appendChild(digimonLink)
        resultado.appendChild(digimonIMG)

    })
}
// -----------------limpiador html

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}


// -------------objeto de busqueda
const digimonsBusqueda = {
    nombre: '',
    tipo: '',
    nivel: '',
    elemento: '',
    imagen: '',
    linkweb: '',
    familia:'',

}


// ---------------------selectores
function llenarSelect() {
    const options = [familyOption, elementOption, typeOption, levelOption]
    const selects = [familySelect, elementSelect, typeSelect, levelSelect]
    for (let i = 0; i < options.length; i++) {
        const optionI = options[i]
        const selectsI = selects[i]
        for (let i = 0; i < optionI.length; i++) {
            const opcion = document.createElement('option')
            opcion.value = optionI[i]
            opcion.textContent = optionI[i]
            selectsI.appendChild(opcion)
        }
    }

}
// --------------------------filtros

function filtrarDigimon() {
    const resultado = digimons.filter(filtrarType).filter(filtrarElement).filter(filtrarLevel).filter(filtrarFamilia)
    mostrarDigimons(resultado)
}
function filtrarType(digimon){
    if(digimonsBusqueda.tipo){
        return digimon.tipo === digimonsBusqueda.tipo
    }
    return digimon
}
function filtrarElement(digimon){
    if(digimonsBusqueda.elemento){
        return digimon.elemento === digimonsBusqueda.elemento
    }
    return digimon
}
function filtrarLevel(digimon){
    if(digimonsBusqueda.nivel){
        return digimon.nivel === digimonsBusqueda.nivel
    }
    return digimon
}
function filtrarFamilia(digimon){
    if(digimonsBusqueda.familia){
            return digimon.familia === digimonsBusqueda.familia || digimon.familia2 === digimonsBusqueda.familia || digimon.familia3 === digimonsBusqueda.familia 
    }
    return digimon   
}


// ------------------------listener

typeSelect.addEventListener('change', (e) => {
    digimonsBusqueda.tipo = e.target.value
    filtrarDigimon()
})
levelSelect.addEventListener('change', (e) => {
    digimonsBusqueda.nivel = e.target.value
    filtrarDigimon()
})
elementSelect.addEventListener('change', (e) => {
    digimonsBusqueda.elemento = e.target.value
    filtrarDigimon()
})
familySelect.addEventListener('change', (e) => {
    digimonsBusqueda.familia = e.target.value
    filtrarDigimon()
})

function guardarClick (e){
    const digimonClickeado = e.target.id
    console.log(digimonClickeado)
    const strDigimon = JSON.stringify(digimonClickeado)
    localStorage.setItem('digimonClickeado',strDigimon)
    location.href = '/digimon.html'
}

resultado.addEventListener('click',(e) =>{
    // e.preventDefault()

    if(e.target.id === 'resultado' ){
        console.log('click en resultado')
    }
    else{
        guardarClick(e) 
    }
}
)
