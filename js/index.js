
import {fadeLogo, slideFoto, slideForms, slideParrafo, abrirMenu} from "./efectos.js"
//import {messages} from "./mensajes.js"

//Animaciones
fadeLogo()
slideParrafo()
slideFoto()
slideForms()
abrirMenu()

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
   
 //Valores de inputs

 //const nombre = $("#input-nombre").val().toLowerCase()
       
 const enfermedad = $("#input-enfermedad").val().toLowerCase()
 
 const medicamento = $("#input-medicamento").val().toLowerCase()

 let incompatibilidad = []


 
const traerDatosJson = async ()=> {
    let resp = await fetch('./json/incompatibilidades.json')
    const data = await resp.json()

    incompatibilidad = data
    console.log (incompatibilidad.filter(item => item = item.contraindicacion.medicamentos.betametasona))
}

traerDatosJson()


//Función de Análisis de Incompatibilidad

const analisisIncompat = () => {
    if (enfermedad === incompatibilidad.contraindicacion.enfermedad || medicamento === incompatibilidad.contradindicacion.medicamento) {
        $("#alert-message").text(mensajeAlerta)
    } else { $("#alert-message").text("No se han encontrado incompatibilidades")

    }
}

$("#form-incompatibilidad").on('submit', (event) => {
    event.preventDefault()
    analisisIncompat (enfermedad, medicamento)
    verModal()
},

cerrarVentana()    
   


/**function incompatibilidades(enfermedad, medicamento) {

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
                        }  else {
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

    })**/)