/*Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 

Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.

Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.*/


function Bhaskara(a, b, c){
    let delta = (b**2 -4*a*c)
    if (delta < 0){
        res = "Delta é negativo.";
    } else {
        let x1 = ((-b)+ Math.sqrt(delta))/(2*a);
        let x2 = ((-b)- Math.sqrt(delta))/(2*a);
        res = `Valores de x: ${x1} e ${x2}`;
    }
    return res;
}

const btn = document.querySelector('#enviar');
btn.addEventListener("click", function(){
    const numA = document.querySelector('#numA').value;
    const numB = document.querySelector('#numB').value;
    const numC = document.querySelector('#numC').value;
    document.querySelector('#resultX').value = Bhaskara(numA, numB, numC);
})