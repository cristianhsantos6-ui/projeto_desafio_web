//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector("#formulario-pessoa")
const divResultado = document.querySelector("#div-dados")

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objFormDados = new FormData(formDados)
    
    let num1 = parseFloat(objFormDados.get('num1'))
    let num2 = parseFloat(objFormDados.get('num2'))
    let num3 = parseFloat(objFormDados.get('num3'))
    
    let imc = peso / (altura * altura)
    let faixaRisco = ''

    if (imc < 20) {
      faixaRisco = 'abaixo do peso'
    } else if (imc >= 20 && imc < 25) {
        faixaRisco = 'normal'
    } else if (imc >= 25 && imc < 30) {
        faixaRisco = 'exesso de peso'
    } else if (imc >= 30 && imc < 35){
        faixaRisco = 'obesidade mórbia'
    } 

    divResultado.innerHTML = `Paciente: ${nome} | IMC: ${imc.toFixed(2).replac('.', ',')} | faixa de Risco: ${faixaRisco}`


 formDados.reset()

})