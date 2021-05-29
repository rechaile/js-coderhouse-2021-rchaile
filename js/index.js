
import {fadeLogo, slideFoto, slideForms, slideParrafo, abrirMenu} from "./efectos.js"

//Animaciones
fadeLogo()
slideParrafo()
slideFoto()
slideForms()
abrirMenu()

//Funciones Modal
const verModal = () => {
    $("#alert-incompatibilidad").toggleClass('modal-active')
}

const cerrarVentana = () => {
    $("#modal-cerrar").on('click', ()=> {
        $("#alert-incompatibilidad").toggleClass('modal-active')
        }
    )
}

// Funciones Simulador

let incompatibilidad = []
let interaccion = []

//Interacción Base de datos
const traerJSONincompat = async ()=> {
    let resp = await fetch('./json/incompatibilidades.json')
    const data = await resp.json()
    incompatibilidad = data
}

const traerJSONinterac = async ()=> {
    let resp = await fetch('./json/interacciones.json')
    const data = await resp.json()
    interaccion = data
}

//Estrategias de análisis
const stratIncompat = () => { 
    
    $("#form-incompatibilidad").on('submit', (event) => {
        event.preventDefault()
        const enfermedad = $("#enfermedad").val().toLowerCase()
        const medicamento = $("#medicamento").val().toLowerCase()

        let findIncompat = incompatibilidad.filter(el => el.enfermedad === enfermedad && el.medicamento === medicamento)
        const alerta = ()=> $("#alert-message").text(resultAlerta)
        const resultAlerta = findIncompat.map (el => el.mensajeAlerta)
        
        alerta()
        verModal()
        
        $("#enfermedad").val('ej: diabetes') 
        $("#medicamento").val('ej: diclofenac')
        }
    )
}

const stratInterac = () => { 
    
    $("#form-interaccion").on('submit', (event) => {
        
        event.preventDefault()
        const medicamento1 = $("#medicamento1").val().toLowerCase()
        const medicamento2 = $("#medicamento2").val().toLowerCase()

        let findInterac = interaccion.filter(el => el.med1 === medicamento1 || medicamento2 && el.med2 === medicamento2 || medicamento1)
        const alerta = ()=> $("#alert-message").text(resultAlerta)
        const resultAlerta = findInterac.map (el => el.mensajeAlerta)
        
        alerta()
        verModal()
        
        $("#medicamento1").val('ej: diclofenac') 
        $("#medicamento2").val('ej: betametasona')
        }
    )
}

//Análisis
const analisisIncompat = ()=> {
    traerJSONincompat()
    stratIncompat()
    }

const analisisInterac = () => {
    traerJSONinterac()
    stratInterac()
    }

analisisIncompat()
analisisInterac()
cerrarVentana()  