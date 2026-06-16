//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let num1 = parseFloat(objFormDados.get('num1'))
    let num2 = parseFloat(objFormDados.get('num2'))
    

    let area = num1 * num2
    let LitrosTinta = area / 2
   
    divResultado.innerHTML =` Á ÁREA TOTAL DA PAREDE É: ${area.toFixed(2).replace('.',',')} m2 | TINTA NECESSÁRIA: ${LitrosTinta.toFixed(2).replace('.',',')} litros`
    

    formDados.reset()

    })