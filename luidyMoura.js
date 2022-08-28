/*Criar um método que irá receber um valor inteiro como argumento 
retornar um array com uma contagem até o argumento como limite.

Quando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” e 
caso o número seja divisível por 9, deve-se substituir o número por  “Moura”.
Se o número for divisível por ambos deve-se colocar “LuidyMoura”.

Exemplo de retorno:

Entrada:
45

Saída:
1, 2, 3, 4, Luidy, 6, 7, 8, Moura, Luidy, 11, 12, 13, 14, Luidy, 16, 17, Moura, 19, Luidy, 21, 22, 23, 24, Luidy, 26, Moura, 28, 29, Luidy, 31, 32, 33, 34, Luidy, Moura, 37, 38, 39, Luidy, 41, 42, 43, 44, LuidyMoura.*/


function luidyMoura(valor){
    let lista = [];
    for(let i=1; i<=valor; i++){
        let num = i;
        if(num%5 == 0 && num%9==0){
            num = "LuidyMoura";
        } else if (num%5 == 0){
            num = "Luidy";
        } else if (num%9 == 0){
            num = "Moura";
        }
        lista.push(num);
    }
    return lista;
}

const btn = document.querySelector('#enviar');
btn.addEventListener("click", function(){
    const num = document.querySelector('#inteiro').value;
    document.querySelector('#arrayValues').value = luidyMoura(num);
})