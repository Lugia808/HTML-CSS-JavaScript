
var num1 = null;
var num2 = null;
var op = '';
var igual = 0
var music = 0
var audio = new Audio('barbie.mp3')
function keypressed(n) {
    if (n === '.' && num1 !== null && op === '') {
        // Verifica se já existe um ponto decimal em num1
        if (num1.toString().indexOf('.') === -1) {
            num1 = num1.toString() + '.'
            document.getElementById('display').innerHTML = num1
        }
    }
    else if (n === '.' && num2 !== null && op !== '') {
        // Verifica se já existe um ponto decimal em num2
        if (num2.toString().indexOf('.') === -1) {
            num2 = num2.toString() + '.'
            document.getElementById('display').innerHTML = num1 + ' ' + op + ' ' + num2
        }
    }
    else if (num1 === null) {
        num1 = n
        document.getElementById('display').innerHTML = num1
    } 
    else if (num1 !== null && op === '') {
        var texto = "".concat(num1).concat(n)
        num1 = parseFloat(texto)
        document.getElementById('display').innerHTML = num1
    }
    else if (num2 === null) {
        num2 = n
        document.getElementById('display').innerHTML = num1 + ' ' + op + ' ' + num2
    } 
    else if (num2 !== null && op !== '') {
        var texto = "".concat(num2).concat(n)
        num2 = parseFloat(texto)
        document.getElementById('display').innerHTML = num1 + ' ' + op + ' ' + num2
    }
    else if (resultado === num1) {
        document.getElementById('display').innerHTML = resultado + ' ' + op + ' ' + num2
    }

    calcula()
}


function opselected(operacao) {
    if (operacao === '/' && num1 != 0) {
        op = '/'
        document.getElementById('display').innerHTML = num1 + ' ' + op

    }
    else if (operacao === '*' && num1 != 0) {
        op = '*'
        document.getElementById('display').innerHTML = num1 + ' ' + op
    }
    else if (operacao === '+' && num1 != 0) {
        op = '+'
        document.getElementById('display').innerHTML = num1 + ' ' + op
    }
    else if (operacao === '-' && num1 != 0) {
        op = '-'
        document.getElementById('display').innerHTML = num1 + ' ' + op
    }


}

function calcula() {

    if (num1 !== 0 && num2 !== 0 && op === '*') {
        //alert('Resultado: ' + num1 * num2)
        resultado = num1 * num2
        equal()
    }

    if (num1 !== 0 && num2 !== 0 && op === '/') {
        //alert('Resultado: ' + num1 / num2)
        resultado = num1 / num2
        equal()
    }

    if (num1 !== 0 && num2 !== 0 && op === '+') {
        //alert('Resultado: ' + (num1 + num2))
        resultado = num1 + num2
        /*num1 = 0
        num2 = 0
        op = ''*/
        document.getElementById('display') = 0
        equal()
    }

    if (num1 !== 0 && num2 !== 0 && op === '-') {
        //alert('Resultado: ' + (num1 - num2))
        resultado = num1 - num2
        equal()
    }
}
z = 0
function equal(igual) {
    if (igual === '=') {
        document.getElementById('display').innerHTML = resultado
        num1 = resultado
        num2 = null
        op = ''
    }
}


function limpar(){
    num1 = 0
    num2 = 0
    op = ''
    igual = 0
    document.getElementById('display').innerHTML = 0
}

function musicplay(){
    if (music === 0){
        audio.play()
        music = 1
    }
    else if(music === 1){
        audio.pause()
        music = 0
    }

}
