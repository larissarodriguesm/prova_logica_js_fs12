// 1. Qual é a sintaxe correta para criar um array vazio em JavaScript?
// a) let arr = [];

// 2. Qual é a sintaxe correta para acessar o segundo elemento de um array em JavaScript?
// a) arr[1]

// 3. Qual é a sintaxe correta para uma função em JavaScript?
// a) function myFunction() {}

// 4. Qual é a função utilizada para retornar o número de elementos em um array em
// JavaScript?
// a) length()

// 5. Qual é a sintaxe correta para chamar uma função em JavaScript?
// a) myFunction();

// 6. Qual é a função utilizada para converter um número em uma string em JavaScript?
// a) toString()

// 7. Qual é a sintaxe correta para criar uma função em JavaScript que recebe um parâmetro?
// a) function myFunction(param) {}

// 8. Qual é o resultado da seguinte operação em JavaScript:
// b) [0, 1, 2, 3]
// let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// arr.unshift(0);
// console.log(arr)

// 9. Qual é o resultado da seguinte operação em JavaScript:
// b) [2, 4, 6, 8, 10]
// function multiplyByTwo(num) {
//     return num * 2;
//     }

//     let arr = [1, 2, 3, 4, 5];
//     let resultArr = arr.map(multiplyByTwo);
//     console.log(resultArr);

// 10. Qual é o resultado da seguinte operação em JavaScript:
// a) 15
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// sum += arr[i];
// }
// console.log(sum);

// 11. Qual é o resultado da seguinte operação em JavaScript:
// a) Hello, Alice! Hello, Bob! Hello, Charlie!

// function greet(name) {
//     console.log(`Hello, ${name}!`);
//     }
    
//     function greetAll(names) {
//     for (let i = 0; i < names.length; i++) {
//     greet(names[i]);
//     }
//     }
    
//     let namesArr = ["Alice", "Bob", "Charlie"];
//     greetAll(namesArr);

// 12. Escreva um programa em JavaScript que encontra a média dos elementos de um array de 5
// números
// function media(n1, n2, n3, n4, n5){
//     return(n1 + n2 + n3 + n4 + n5)/5
// }
// console.log(media(1, 2, 3, 4, 5))

// 13. Crie uma função que receba o nome completo de uma pessoa e retorne com o nome e
// sobrenome e a data atual no formato (ddmmyyyy) separado por '_'(underline) Dado o
// nome 'Raimundo José dos Santos Nascimento', o nome do arquivo deve ser:
// raimundo_jose_06032023
const nomes = 'Raimundo José dos Santos Nascimento'

let nomesAjustados = nomes.toLocaleLowerCase();
nomes.split(' ')



// 14. Crie um programa que calcule a massa corporal (IMC) e informe em que faixa de
// obesidade a pessoa se encontra com html, css e js sem usar prompt e exibndo os textos
// segundo as condições abaixo:
