// criando a função para que apareça os numeros clicados no paragrafo 
function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

// criando a função para apagar as coisas no paragrafo
function clean(){
    document.getElementById('resultado').innerHTML = ""
}

// criando a funação para apagar apenas a ultima coisa adicionada ao paragrafo
function back(){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

// criando a funação para fazer as operações aritméticas
function calcular(){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = eval(resultado)
}
