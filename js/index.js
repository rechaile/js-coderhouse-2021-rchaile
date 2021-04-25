
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

//Eventos de Formulario Incompatibilidad y analisis de resultados

formIncompatibilidad.addEventListener('submit', ( ) => {
    
    //Valores de inputs

    const nombre = inputNombre.value     
    const enfermedad = inputEnfermedad.value
    const medicamento = inputMedicamento.value

    //Objeto consulta
    const consulta = new Consulta (nombre, enfermedad, medicamento)
    create (consulta)

    localStorage.setItem('consultas', JSON.stringify(consultas))

    //Función de Análisis de Incompatibilidad

    function incompatibilidades(enfermedad, medicamento) {

        if (enfermedad === 'diabetes' && medicamento === 'betametasona') {
            alert (messages.diabeBeta)
        } else
            if (enfermedad === 'diabetes' && medicamento === 'diclofenac') {
                alert (messages.diabeDiclo)
            } else
                if (enfermedad === 'hipertension' && medicamento === 'betametasona') {
                    alert (messages.hipertenBeta)
                } else
                    if (enfermedad === 'hipertension' && medicamento === 'diclofenac') {
                        alert (messages.hipertenDiclo)
                    }   else
                        if (enfermedad === 'diabetes' && medicamento === 'furosemida') {
                                alert (messages.diabFuro)
                            }   else {
                                    alert (messages.nullmessage)
                                }
    }

    incompatibilidades (enfermedad, medicamento)
    })