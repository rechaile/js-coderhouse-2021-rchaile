
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

let incompatibilidad = []
let interaccion = []

//Interacción Base de datos
const traerJSONincompat = async () => {
    let resp = await fetch('./json/incompatibilidades.json')
    if (resp.status === 200) {
        const data = await resp.json()
        incompatibilidad = data
    }
}

const traerJSONinterac = async () => {
    let resp = await fetch('./json/interacciones.json')
    if (resp.status === 200) {
        const data = await resp.json()
        interaccion = data
    }
}

//Estrategias de análisis
const stratIncompat = () => { 
    
    $("#form-incompatibilidad").on('submit', (event) => {
        event.preventDefault()
        const enfermedad = $("#enfermedad").val().toLowerCase()
        const medicamento = $("#medicamento").val().toLowerCase()

        let findIncompat = incompatibilidad.filter(el => el.enfermedad.toLowerCase() === enfermedad.toLowerCase() && el.medicamento.toLowerCase() === medicamento.toLowerCase())
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

        let findInterac = interaccion.filter(el => (el.med1.toLowerCase() === medicamento1.toLowerCase() && el.med2.toLowerCase() === medicamento2.toLowerCase()) || (el.med1.toLowerCase() === medicamento2.toLowerCase() && el.med2.toLowerCase() === medicamento1.toLowerCase()))
        const alerta = ()=> $("#alert-message").text(resultAlerta)
        const resultAlerta = findInterac.map (el => el.mensajeAlerta)
        
        alerta()
        verModal()
        
        $("#medicamento1").val('ingrese medicamento') 
        $("#medicamento2").val('ingrese medicamento')
        }
    )
}

//Análisis
const analisisIncompat = () => {
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
