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
    let nome = parseFloat(objFormDados.get('nome'))


    let media = (num1 + num2 + num3) / 3

    if (media >= 6) {
        situação = "aprovado"
    } else {
        situação = "reprovado"
    }


    divResultado.innerHTML = `Aluno: ${nome}| Média: ${media.toFixed(1).replace('.', ',')} | Situação: ${situação}`


 formDados.reset()

})