var inputtamanho = document.querySelector("[name=tamanho]")
var outputtamanho = document.querySelector('[name=valortamanho]')
console.log(inputtamanho)
inputtamanho.oninput = mostratamanho

function mostratamanho() {
    outputtamanho.value = inputtamanho.value
}
