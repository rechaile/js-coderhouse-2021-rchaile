//Efectos
import {fadeLogo, hola1, slideFoto, slideIncompatibilidad, slideParrafo} from "./efectos.js"

fadeLogo()
slideParrafo()
slideFoto()
slideFoms()

//Mensajes de Alerta

const messages = {
    diabeBeta: "¡Cuidado! el consumo de corticoides en personas diabéticas puede causar desequilibrios peligrosos en la glucemia. Esta contrainidicado en pacientes diabéticos",
    
    diabeDiclo: "Precaución: El consumo de antiinflamatorios de forma crónica no está recomendado en personas diabéticas porque puede perjudicar la función renal",

    diabFuro: "¡Cuidado! el consumo de diuréticos como la furosemida en personas diabéticas puede causar desequilibrios peligrosos en la hidratación y llevar al colapso. Esta contrainidicado en pacientes diabéticos",
    
    hipertenBeta: "Precaución: El consumo de corticoides de forma crónica no está recomendado en personas hipertensas porque puede perjudicar la función renal del paciente",
    
    hipertenDiclo: "¡Cuidado! El diclofenac sódico puede contribuir a la suba de presión del paciente hipertenso. Trate de utilizar otras alternativas antiinflamatorias o consulte con su médico para usarlo adecuadamente",

    nullmessage: "No se han encontrado incompatibilidades"
}


// Storage y creación de array Consultas

class Consulta {
    constructor (nombre, enfermedad, medicamento) {
        this.nombre = nombre,
        this.enfermedad = enfermedad,
        this.medicamento = medicamento
    }
}

let consultas = JSON.parse (localStorage.getItem('consultas'))

if (!consultas) {
    consultas = []
}

const create = (Consulta) => {
            consultas.push (Consulta)
        }

const verModal = () => {
    $("#alert-incompatibilidad").toggleClass('modal-active')
}

const cerrarVentana = () => {
    $("#modal-cerrar").on('click', ()=> {
        $("#alert-incompatibilidad").toggleClass('modal-active')
    })
}
   

//Función de Análisis de Incompatibilidad

function incompatibilidades(enfermedad, medicamento) {

    if (enfermedad === 'diabetes' && medicamento === 'betametasona') {
        $("#alert-message").text(messages.diabeBeta)
    } else
        if (enfermedad === 'diabetes' && medicamento === 'diclofenac') {
            $("#alert-message").text(messages.diabeDiclo)
        } else
            if (enfermedad === 'hipertension' && medicamento === 'betametasona') {
                $("#alert-message").text(messages.hipertenBeta)
            } else
                if (enfermedad === 'hipertension' && medicamento === 'diclofenac') {
                    $("#alert-message").text(messages.hipertenDiclo)
                }   else
                    if (enfermedad === 'diabetes' && medicamento === 'furosemida') {
                        $("#alert-message").text(messages.diabFuro)
                        }   else {
                            $("#alert-message").text(messages.nullmessage)
                            }
}

//Eventos de Formulario Incompatibilidad y analisis de resultados

$("#form-incompatibilidad").on('submit', (event) => {

    event.preventDefault()
    
    //Valores de inputs

    const nombre = $("#input-nombre").val().toLowerCase()
       
    const enfermedad = $("#input-enfermedad").val().toLowerCase()
    
    const medicamento = $("#input-medicamento").val().toLowerCase()
  

    //Objeto consulta
    const consulta = new Consulta (nombre, enfermedad, medicamento)
    create (consulta)

    localStorage.setItem('consultas', JSON.stringify(consultas))

    incompatibilidades (enfermedad, medicamento)

    verModal()

    $("#input-nombre").val('Ingresa tu nombre completo') 
    $("#input-enfermedad").val('ej: diabetes') 
    $("#input-medicamento").val('ej: diclofenac')

    })

    cerrarVentana()   

//Abrir y cerrar menu

$("#menu-button").on('click', ()=> {
    $("#menu-bar").toggleClass("menu-hide")
})

hola1 ()


