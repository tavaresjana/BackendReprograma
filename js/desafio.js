function calcular(){
    const valorHora = document.querySelector('#valor-hora')
    const horasProjeto = document.querySelector('#horas-projeto')
    const valorTotal = (valorHora.value * horasProjeto.value)

    const resposta = document.querySelector('#resposta')
    resposta.innerHTML = 'O valor total é: R$ '+ valorTotal.toFixed(2)   
}