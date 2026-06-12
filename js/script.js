console.log ("teste")
console.log('comando de saída')

//COMENTÁRIO DE LINHA SIMPLES

/*COMENTARIOS DE VARIAS LINHAS
*/

//CRIANDO VARIÁVEIS
let num= 50
var num2= 180
const num3= 200

console.log (num)
console.log (num2)
console.log (num3)

if (true){
    let num4 = 420
    var num5 = 180


    console.log(num4)
    console.log(num)
}

console.log(num5)

num = 5

console.log(num)

num2 = 6

console.log(num2)

//num3 = 12

//concatenação
console.log("valor de num" + num)
console.log('valor de num3', num3)
console.log(`valor de num2 ${num2}`)

console.log('A soma dos números' + (15+8))
console.log('A soma dos números', (15+8))
console.log(`A soma dos números ${15+8}`)
console.log('A soma dos números' + num + num2)
console.log('A soma dos números', num2 + 8)
console.log(`A soma dos números ${num3 - num2}`)

//MODULO RESTO DA DIVISÃO
console.log('SOMA DAS VARIÁVES ' , num + num2)
console.log('SUBTRAÇÃO DAS VARIÁVEIS ' , num3 - num)
console.log('MULTIPLICAÇÃO ' , num5 * 2)
console.log('DIVISÃO DOS VALORES ' , num2 / 5)
console.log('RESTO DA DIVISÃO ' , num2 %2)
console.log('RESTO DA DIVISÃO ' , num3 %3)

/*
== IGUAL
>MAIOR
<MENOR
>=MAIOR IGUAL
<=MENOR IGUAL
!=DIFERENTE
*/

//OPERAÇÕES LÓGICAS
/**
 && E
 || OU
 */
 console.log('TESTE DE COMPARAÇÃO ', 10 == 5)
 console.log('TESTE DE RELACIONAIS ', 10 != 5)
 console.log('TESTE DE RELACIONAIS ', 10 > 5)
 console.log('TESTE DE RELACIONAIS ', 10 < 5)
 console.log('TESTE DE RELACIONAIS ', 10 >= 5)
 console.log('TESTE DE RELACIONAIS ', 10 <= 5)
 console.log('TESTE LÓGICO ', (10 > 5) && (15 < 8))
 console.log('TESTE LÓGICO ', (10 > 5) || (15 < 8))

//TESTE LÓGICO
let idade= 22

if(idade >= 18){
    console.log('Maior de idade')
}else{
    console.log('Menor de idade')
}

/**
 * RENOVÇÃO DE CNH
 * 
   MENOR QUE 18 - NÂO PERMITIDO
   18 ATÉ 49 - 10 ANOS
   50 ATÉ 69 - 5 ANOS
   70 ACIMA - 3 ANOS
 */

   //ANINHAMNETO DE IF
   if(idade < 18){
    console.log(`Com a idade de ${idade}, Não é permitido possuir CNH`)
    
       }else if(idade < 50){
           console.log(`Com a idade de ${idade}, 10 anos para renovar`)
       
       } else if(idade < 70){
           console.log(`Com a idade de ${idade}, 5 anos para renovar`)
       } else{  
           console.log(`Com a idade de ${idade}, 3 anos para renovar`)}