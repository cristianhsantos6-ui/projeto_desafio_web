//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector("#formulario-pessoa")
const divResultado = document.querySelector("#div-dados")

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objFormDados = new FormData(formDados)
    let tipo = parseFloat(objFormDados.get('tipo'))
    let num1 = parseFloat(objFormDados.get('num1'))
    let num2 = parseFloat(objFormDados.get('num2'))
    let num3 = parseFloat(objFormDados.get('num3'))
    

    if (num1 === num2 && num2 ===num3) {
        tipo = 'Equilatero'
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        tipo = 'Isósceles'
    }

    divResultado.innerHTML = `O triángulo é: ${tipo}`


 formDados.reset()

})