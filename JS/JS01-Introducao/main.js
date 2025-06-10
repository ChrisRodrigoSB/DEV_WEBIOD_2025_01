var idade
//variaveis mlkote
console.log("Hello World") //apresentar uma mensagem

console.clear //limpar
var numero01 = 192
console.log(numero01 )

var num1 = 4
var num2 = 800000000000000000000000000000000000000000000000000000000000000000000000000000000008
var resultado= num1+num2 
console.log(resultado) //

idade=89
console.log(idade) //iniciar a variavel em outra parte do codigo 

//textos 
var nome01= 'matheus araujo'
var nome02= "matheus vinicius"
var nome03= "12365.7498"//otext
console.log(nome01,nome02,nome03)

console.log("olá" + "papai") //concatenar
console.log("Aluno" + nome01 + "e Aluno" + nome02 + "tem um total de" + nome03 + "dinheiros")

//TEMPLATE STRING
console.log(`Aluno ${nome01} e Aluno ${nome02} tem um total de ${nome03} dinheiros`) //concatenar
//VAR // VAR É FLEXIVEL E COM MENOS REGRAS, OU SEJA POSSO ALTERAR O VALOR INICIAL DE UMA VAR E RECRIAR A MESMA EM PARTES DE CODIGO

//LET// JÁ A LET VOCE NÃO PODE RECRIAR A MESMA EM OUTRAS PARTES DO COGIGO COM O MESMO NOME, MAS PODE CHAMAR E ALTERAR O VALOR INICIALLET 

//CONST// VOCE NÃO PODE RERIAR A MESMA EM OUTRAS PARTES DO CODIGO E NÃO PODE ALTERAR O VALOR INICIAL DELA GARANTINDO A CONFIANÇA DO DADO QUE ESTA SENDO ULTILIZADO AO DECORRER DO SEU CODIGO 

console.log(10/0)
console.log(-6/0)

//operadores

var valor1 = 5
var valor2 = 5

console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 * valor2)
console.log(valor1 / valor2)
console.log(valor1 ** valor2)

//operadores relacionais 

console.log(5 ==5 )
console.log(5 > 5)
console.log(22<8)
console.log(22 >= 22)
console.log(22 != 23);
console.log("ana" == 'Ana');
console.log(true === true);
//outro e txt> String
console.log(true != 'false');

let temCamisa = false
let temCracha = true
console.log(temCamisa);
console.log(temCracha);
console.log(temCamisa == true && temCracha == true)
console.log(temCamisa == true || temCracha == true); //false      ==      true
//operador de atribuição 
var x = 3
var y = 2
x = x + y
//x+=y formato contraido 
// x = 3 = 2
console.log(x); 
//LOGO SERVE PARA MOSTRAR RESULTADOS/MENSAFGENS
//CLEAR SERVE PARA LIMPAR O CONSOLE E DEIXAR DISPONIVEL PARA NOVAS MENSAGENS  

console.clear

console.log("Está tudo limpo, meu chara");
console.log("Olá mundo");

console.error("é pra avisar que voce não pode esta aqui")

console.warn("para apresentar uma imagem em amarelo")