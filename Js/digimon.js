
const cardIMG = document.querySelector('#card-image')
const digimonLocal = localStorage.getItem('digimonClickeado')
const digimonNivel = document.querySelector('#nivel')
const digimonName = document.querySelector('#digimon-name > h2')
const digimonPrevio = document.querySelector('#pre-evo')
const digimonSiguiente = document.querySelector('#sig-evo')
const familiaMenu = document.querySelector('#familia')
const familiaMenu2 = document.querySelector('#familia2')
const familiaMenu3 = document.querySelector('#familia3')
const tipoMenu = document.querySelector('#tipo')
const elementoMenu = document.querySelector('#elemento')
const lineaEvolutiva = document.querySelector('#lineaEvolutiva')

document.addEventListener('DOMContentLoaded', () => {
    mostrarDigimon(digimons)
}
)

function mostrarDigimon(digimons) {
    
    const strLocalDigimon = JSON.parse(digimonLocal)
    console.log(digimonLocal)
    digimons.forEach(digimon => {
        if(digimon.nombre === strLocalDigimon){
            document.title = ('Digimon Website - '+ digimon.nombre)
            // Digimon nombre
            digimonName.textContent = (digimon.nombre)
            // Digimon imagen
            const digimonIMG = document.createElement('img')
            digimonIMG.setAttribute('id',digimon.nombre)
            digimonIMG.src = digimon.imagen
            cardIMG.appendChild(digimonIMG)
            //Digimon Nivel
            const nivel = document.createElement('p')
            nivel.value = digimon.nivel
            nivel.textContent = digimon.nivel
            digimonNivel.appendChild(nivel)
            //Digimon Pre evolucion
            const preEvo = document.createElement('p')
            preEvo.value = digimon.evolucionPrevia
            preEvo.textContent = digimon.evolucionPrevia
            digimonPrevio.appendChild(preEvo)
            //Digimon Next evolucion
            const sigEvo = document.createElement('p')
            sigEvo.value = digimon.evolucion
            sigEvo.textContent = digimon.evolucion
            digimonSiguiente.appendChild(sigEvo)

            //digimon tipo
            const digimonTipo = document.createElement('p')
            digimonTipo.value = digimon.tipo
            digimonTipo.textContent = digimon.tipo
            tipoMenu.appendChild(digimonTipo)
            //digimon elemento
            const digimonElemento = document.createElement('p')
            digimonElemento.value = digimon.elemento
            digimonElemento.textContent = digimon.elemento
            elementoMenu.appendChild(digimonElemento)
            // nombre de familia
            if(digimon.familia){
                const familyName = document.createElement('p')
                familyName.value = (digimon.familia)
                familyName.textContent = (digimon.familia)
                familiaMenu.appendChild(familyName)
            }
            if(digimon.familia2){
                const familyName2 = document.createElement('p')
                familyName2.value = (digimon.familia2)
                familyName2.textContent = (digimon.familia2)
                familiaMenu2.appendChild(familyName2)
            }
            else{
                document.getElementById('familia2').style.display ="none";
            }
            if(digimon.familia3){
                const familyName = document.createElement('p')
                familyName.value = (digimon.familia3)
                familyName.textContent = (digimon.familia3)
                familiaMenu3.appendChild(familyName)
            }else{
                document.getElementById('familia3').style.display ="none";
            }
            document.getElementById('lineaEvolutiva').value = digimon.lineaEvolutiva

            mostrarFamiliaIcono()
            mostrarElementoIcono()
            mostrarTipoIcono()
            mostrarLineaEvolutiva()
        }

    })
}
function mostrarFamiliaIcono(){
    digimonFamilysIcon.forEach(familia =>{
            const FamiliaCompare = document.querySelector('#familia > p')
            if(familia.familia === FamiliaCompare.value){
                const familyIMG = document.createElement('img')
                familyIMG.src = familia.icono
                familiaMenu.appendChild(familyIMG)
            }
            const FamiliaCompare2 = document.querySelector('#familia2 > p')
            if(FamiliaCompare2){
                if(familia.familia === FamiliaCompare2.value){
                    const familyIMG = document.createElement('img')
                    familyIMG.src = familia.icono
                    familiaMenu2.appendChild(familyIMG)
                }
            }
             const FamiliaCompare3 = document.querySelector('#familia3 > p')
            if(FamiliaCompare3){
                if(familia.familia === FamiliaCompare3.value){
                    const familyIMG = document.createElement('img')
                    familyIMG.src = familia.icono
                    familiaMenu3.appendChild(familyIMG)
                }
            }

        }
    
    )
}
function mostrarTipoIcono(){
    digimonTypesIcon.forEach(tiposIcono =>{
        const tipoCompardor = document.querySelector('#tipo > p')
        if(tiposIcono.tipo === tipoCompardor.value){
            const tipoIMG = document.createElement('img')
            tipoIMG.src = tiposIcono.icono
            tipoMenu.appendChild(tipoIMG)
        }
    })
}
function mostrarElementoIcono(){
    digimonElementIcon.forEach(elementoIcono =>{
        const elementoComparador = document.querySelector('#elemento > p')
        if(elementoIcono.elemento === elementoComparador.value){
            const elementoIMG = document.createElement('img')
            elementoIMG.src = elementoIcono.icono
            elementoMenu.appendChild(elementoIMG)
        }
    })
}
function mostrarLineaEvolutiva(){
    digimonLinesIMG.forEach(digimonLineas =>{

        if(digimonLineas.linea === lineaEvolutiva.value){
            const digimonLinea = digimonLineas
            const digimonLine = Object.values(digimonLinea);
            const digimonNombre = Object.keys(digimonLinea);
            // console.log(digimonNombre)
            for(i=1; i< digimonLine.length ; i++){
                const digimonIMG = document.createElement('img')
                digimonIMG.setAttribute('id', digimonNombre[i])
                digimonIMG.src = digimonLine[i]
                lineaEvolutiva.appendChild(digimonIMG)
                // console.log(digimonIMG.id)
            }
        }
    })
}

function guardarClick (e){
    const digimonClickeado = e.target.id
    console.log(digimonClickeado)
    const strDigimon = JSON.stringify(digimonClickeado)
    localStorage.setItem('digimonClickeado',strDigimon)
    location.href = '/digimon.html'
}

lineaEvolutiva.addEventListener('click', (e) =>{
        
    if(e.target.id === 'lineaEvolutiva' ){
        console.log('click en resultado')
    }
    else{
        guardarClick(e) 
    }
})
