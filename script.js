var valorEmDolarTexto = prompt("Qual o valor em dolar que você que converter?")

//var valorEmDolarNumero = parseInt(valorEmDolarTexto)

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)

