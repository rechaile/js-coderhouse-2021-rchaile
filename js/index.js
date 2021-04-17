
//Funciones de toma de datos del usuario

function inputNombre() {
    let nombre = prompt("Ingrese su nombre").toLowerCase()
    return nombre
}

function inputEnfermedad() {
    let enfermedad = prompt("Ingrese la enfermedad crónica que padece").toLowerCase()
    return enfermedad
}

function inputMedicamento() {
    let medicamento = prompt("Ingrese un medicamento que consuma habitualmente").toLowerCase()
    return medicamento
}

//Mensajes de Alerta

const messages = {
    diabeBeta: "¡Cuidado! el consumo de corticoides en personas diabéticas puede causar desequilibrios peligrosos en la glucemia. Esta contrainidicado en pacientes diabéticos",
    diabeDiclo: "Precaución: El consumo de antiinflamatorios de forma crónica no está recomendado en personas diabéticas porque puede perjudicar la función renal",
    hipertenBeta: "Precaución: El consumo de corticoides de forma crónica no está recomendado en personas hipertensas porque puede perjudicar la función renal del paciente",
    hipertenDiclo: "¡Cuidado! El diclofenac sódico puede contribuir a la suba de presión del paciente hipertenso. Trate de utilizar otras alternativas antiinflamatorias o consulte con su médico para usarlo adecuadamente",
    nullmessage: "No se han encontrado incompatibilidades"
}

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
                } else {
                    alert (messages.nullmessage)
                }
}

// Función de Consulta y chequeo de incompatibilidad

let repetir = prompt('Quiere hacer una consulta?').toLowerCase()
    
function checkMed () {
    
    while ( repetir !== 'no') {
        let nombre = inputNombre()
        let enfermedad = inputEnfermedad()
        let medicamento = inputMedicamento()
                
        incompatibilidades(enfermedad, medicamento)

        repetir = prompt (nombre + ' ¿quiere hacer otra consulta?')

        class Consulta {
            constructor (nombre, enfermedad, medicamento) {
                this.nombre = nombre,
                this.enfermedad = enfermedad,
                this.medicamento = medicamento
            }
        }

        const Consultas = []

        Consultas.push (new Consulta (nombre, enfermedad, medicamento))
        
        console.log (Consultas) 
    }
}

checkMed ()