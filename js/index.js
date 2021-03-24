const enfermedad = 'hipertensión'
const medicamento = 'diclofenac'

let inputEnfermedad = prompt('Ingrese la enfermedad crónica que padece')
let inputMedicamento = prompt('Ingrese un antiinflamatorio que consuma habitualmente')


if (inputEnfermedad === enfermedad && inputMedicamento === medicamento) {
    alert('¡Precaución el '+ medicamento +' está contraindicado para personas con '+ enfermedad +'! Puede causar subas de presión y disminución del efecto de su antihipertensivo. Ante cualquier duda consulte a su médico o farmacéutico')
} else {
    alert ('No se han encontrado incompatibilidades')
}


