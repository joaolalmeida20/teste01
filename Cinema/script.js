var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var horario = document.querySelector('div#horario')

    if (minuto < 10) {
    horario.innerHTML = `Agora são ${hora}:0${minuto}`
} else {
    horario.innerHTML = `Agora são ${hora}:${minuto}`
}
function verificar() {
    var txtdinheiro = document.querySelector('input#txtdinheiro')
    var res = document.querySelector('div#res')
    var dinheiro = Number(txtdinheiro.value)
    if (hora != 14 || dinheiro <= 20) {
        res.innerHTML = 'Infelizmente, não é possivel comprar o ingresso! '
        res.innerHTML += ' Tente outro dia!'
    } else {
        res.innerHTML = 'Você consegue comprar o ingresso.</br>'
        res.innerHTML += 'SEJA BEM-VINDO(A)!'
    }
}