
function inputEnfermedad () {
    let enfermedad = prompt("Ingrese la enfermedad crónica que padece").toLowerCase()
    return enfermedad
    }

function inputMedicamento () {
    let medicamento = prompt('Ingrese un medicamento que consuma habitualmente').toLocaleLowerCase()
    return medicamento }

function incompatibilidades (enfermedad, medicamento) {
    
    if (enfermedad === 'diabetes' && medicamento === 'betametasona') {
            alert ('¡Cuidado! el consumo de corticoides en personas diabéticas puede causar desequilibrios peligrosos en la glucemia. Esta contrainidicado en pacientes diabéticos')
        } else 
            if (enfermedad === 'diabetes' && medicamento ==='diclofenac') {
            alert ('Precaución: El consumo de antiinflamatorios de forma crónica no está recomendado en personas diabéticas porque puede perjudicar la función renal')
        } else 
            if (enfermedad === 'hipertension' && medicamento === 'betametasona'){
            alert ('Precaución: El consumo de corticoides de forma crónica no está recomendado en personas hipertensas porque puede perjudicar la función renal del paciente')
        } else 
            if (enfermedad === 'hipertension' && medicamento === 'diclofenac'){
            alert ('¡Cuidado! El diclofenac sódico puede contribuir a la suba de presión del paciente hipertenso. Trate de utilizar otras alternativas antiinflamatorias o consulte con su médico para usarlo adecuadamente')
        } else {
            alert ('No se han encontrado incompatibilidades')
        }
    }


let enfermedad = inputEnfermedad()
let medicamento = inputMedicamento()

incompatibilidades (enfermedad, medicamento)

