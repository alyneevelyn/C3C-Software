/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)*/


function triangulo(lado1, lado2, lado3){
    if (lado1 == lado2 && lado1 == lado3){
        res = "Triângulo Equilátero";
    }
    else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        res = "Triângulo Escaleno";
    }
    else {
        res = "Triângulo Isósceles";
    }
    return res;
}

const btn = document.querySelector('#enviar');
btn.addEventListener("click", function(){
    const lado1 = document.querySelector('#lado1').value;
    const lado2 = document.querySelector('#lado2').value;
    const lado3 = document.querySelector('#lado3').value;
    document.querySelector('#result').value = triangulo(lado1, lado2, lado3);
})