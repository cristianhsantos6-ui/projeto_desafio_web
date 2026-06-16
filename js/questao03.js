//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector("#formulario-pessoa")
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let num1 = parseFloat(objFormDados.get('num1'))
    let num2 = parseFloat(objFormDados.get('num2'))
    let num3 = parseFloat(objFormDados.get('num3'))
    

    let Litrosnecessarios = num1 / num2
    let valorTotal = Litrosnecessarios * num3
   
    divResultado.innerHTML =` TOTAL DE LITROS: ${Litrosnecessarios.toFixed(2).replace('.',',')} 
m2 <br>|VALOR A PAGAR: ${valorTotal.toFixed(2).replace('.',',')}`
    

    formDados.reset()

    })