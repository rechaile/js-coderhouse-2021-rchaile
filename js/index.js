
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

//Toma de input de formulario de Incompatibilidad

const formIncompatibilidad = document.getElementById('form-incompatibilidad')

const inputNombre = document.getElementById('input-nombre')

const inputEnfermedad = document.getElementById('input-enfermedad')

const inputMedicamento = document.getElementById('input-medicamento')

const modalIncompatibilidad = document.getElementById ('alert-incompatibilidad')

const alertMessage = document.getElementById ('alert-message')

const verModal = () => {
    modalIncompatibilidad.classList.toggle ('modal-active')
}


   

//Función de Análisis de Incompatibilidad

function incompatibilidades(enfermedad, medicamento) {

    if (enfermedad === 'diabetes' && medicamento === 'betametasona') {
        alertMessage.innerText = messages.diabeBeta
    } else
        if (enfermedad === 'diabetes' && medicamento === 'diclofenac') {
            alertMessage.innerText = messages.diabeDiclo
        } else
            if (enfermedad === 'hipertension' && medicamento === 'betametasona') {
                alertMessage.innerText = messages.hipertenBeta
            } else
                if (enfermedad === 'hipertension' && medicamento === 'diclofenac') {
                    alertMessage.innerText = messages.hipertenDiclo
                }   else
                    if (enfermedad === 'diabetes' && medicamento === 'furosemida') {
                        alertMessage.innerText = messages.diabFuro
                        }   else {
                            alertMessage.innerText = messages.nullmessage
                            }
}

//Eventos de Formulario Incompatibilidad y analisis de resultados

formIncompatibilidad.addEventListener('submit', (event) => {

    event.preventDefault()
    
    //Valores de inputs

    const nombre = inputNombre.value.toLowerCase()
       
    const enfermedad = inputEnfermedad.value.toLowerCase()
    
    const medicamento = inputMedicamento.value.toLowerCase()
  

    //Objeto consulta
    const consulta = new Consulta (nombre, enfermedad, medicamento)
    create (consulta)

    localStorage.setItem('consultas', JSON.stringify(consultas))

    incompatibilidades (enfermedad, medicamento)

    verModal()

    inputNombre.value = 'Ingresa tu nombre completo'
    inputEnfermedad.value = 'ej: diabetes'
    inputMedicamento.value = 'ej: diclofenac'

    })

    