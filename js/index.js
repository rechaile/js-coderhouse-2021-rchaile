
/*function inputEnfermedad () {
    let enfermedad = prompt("Ingrese la enfermedad crónica que padece")
    return enfermedad
    }

function inputMedicamento () {
    let medicamento = prompt('Ingrese un medicamento que consuma habitualmente')
    return medicamento }

function incompatibilidades (enfermedad, medicamento) {
    
    switch (enfermedad, medicamento) {
        case "diabetes" && "betametasona":
            alert ('¡Cuidado! el consumo de corticoides en personas diabéticas puede causar desequilibrios peligrosos en la glucemia. Esta contrainidicado en pacientes diabéticos')
            break
        case "diabetes" && "diclofenac":
            alert ('Precaución: El consumo de antiinflamatorios de forma crónica no está recomendado en personas diabéticas porque puede perjudicar la función renal')
            break
        case "hipertension" && "betametasona":
            alert ('Precaución: El consumo de corticoides de forma crónica no está recomendado en personas hipertensas porque puede perjudicar la función renal del paciente')
            break
        case "hipertension" && "diclofenac":
            alert ('¡Cuidado! El diclofenac sódico puede contribuir a la suba de presión del paciente hipertenso. Trate de utilizar otras alternativas antiinflamatorias o consulte con su médico para usarlo adecuadamente')
            break
        default:
            alert ('No se han encontrado incompatibilidades')
        }
    }


let enfermedad = inputEnfermedad()
let medicamento = inputMedicamento()

incompatibilidades (enfermedad, medicamento)*/



const consulta = {
    
    enfermedad:     
    function inputEnfermedad () {
        let enfermedad = prompt("Ingrese la enfermedad crónica que padece")
        return enfermedad
        }
    
    medicamento: 
    
    function inputMedicamento () {
        let medicamento = prompt('Ingrese un medicamento que consuma habitualmente')
        return medicamento }
}

function incompatibilidades ( consulta.enfermedad, consulta.medicamento ) {
    
    switch (consulta.enfermedad, consulta.medicamento) {
        case "diabetes" && "betametasona":
            alert ('¡Cuidado! el consumo de corticoides en personas diabéticas puede causar desequilibrios peligrosos en la glucemia. Esta contrainidicado en pacientes diabéticos')
            break
        case "diabetes" && "diclofenac":
            alert ('Precaución: El consumo de antiinflamatorios de forma crónica no está recomendado en personas diabéticas porque puede perjudicar la función renal')
            break
        case "hipertension" && "betametasona":
            alert ('Precaución: El consumo de corticoides de forma crónica no está recomendado en personas hipertensas porque puede perjudicar la función renal del paciente')
            break
        case "hipertension" && "diclofenac":
            alert ('¡Cuidado! El diclofenac sódico puede contribuir a la suba de presión del paciente hipertenso. Trate de utilizar otras alternativas antiinflamatorias o consulte con su médico para usarlo adecuadamente')
            break
        default:
            alert ('No se han encontrado incompatibilidades')
        }
    }

    consulta.enfermedad ()
    consulta.medicamento ()
    incompatibilidades (consulta.enfermedad, consulta.medicamento)
    
function messageAlert () {
    alert= ('messages')
}

    messages = {
        diabetesBetametasona: '¡Cuidado! el consumo de corticoides en personas diabéticas puede causar desequilibrios peligrosos en la glucemia. Esta contrainidicado en pacientes diabéticos'
    }
    
