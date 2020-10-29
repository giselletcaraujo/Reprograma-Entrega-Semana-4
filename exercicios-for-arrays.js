// Exercícios práticos com for e arrays!

// // 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// // Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// // índice 0, elemento "banana"
// // índice 1, elemento "gatinho"
// // índice 2, elemento "brócolis"

const arrei =['banana', 'gatinho','brócolis']
 function imprimeindiceeElemento(array) {
   for (let i=0; i<array.length; i++) {

console.log(`índice ${i}, elemento ${arrei[i]}`)
   }
 }
imprimeindiceeElemento(arrei) 

//ou assim

function imprimeindiceeElemento(array) {
for (let i=0; i<array.length; i++) {
console.log(`índice ${i}, elemento ${arrei[i]}`)
 }
}
imprimeindiceeElemento(["banana", "gatinho", "brócolis"])

// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

const numeros = [1, 2, 3, 5, 6, 7]

function soma (arr) {
  let somaarray =0
  for (let i =0; i< arr.length; i++) {
   somaarray += arr[i]  // somararray = somararray+ arr[1]
    return somaarray 
}
}
console.log(soma (numeros))

// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com 
// os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

function maioresQueCinco(arr) {
  const numerosMaiores = []
     for (let i = 0; i < arr.length; i++) {
       if (arr[i] > 5) {
        numerosMaiores.push(arr[i])
      }
  }
      return numerosMaiores
}
 console.log(maioresQueCinco([88,55,0,2,85,81,24,12]))

// 4) Modifique a função anterior para que receba, além da array, o número para comparação 
//(não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

function maioresQueNumero(arr, num) {
  const numerosMaiores = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        numerosMaiores.push(arr[i])
      }
  }
    return numerosMaiores
}
  console.log(maioresQueNumero([56, 10, 8, 2, 33, 98, 3, 6], 10))

// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)

const meuArray = [-5,-9, 10, 58, 1, 65, 0]
  let maior = 0;
    for (let i = 0; i < meuArray.length; i++) {
      if ( meuArray[i] > maior ) {
         maior = meuArray[i];
  }
}
console.log (maior)