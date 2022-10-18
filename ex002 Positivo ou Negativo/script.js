function calcular() {
    var txtn = document.querySelector('input#txtnum')
    var res = document.querySelector('div#res')
    var num = Number(txtn.value)
    res.innerHTML = `<p>O numero <strong>${num}</strong> Digitado é</p>`
    if (num > 0) {
        res.innerHTML += `POSITIVO`
    } else if (num < 0) {
        res.innerHTML += `NEGATIVO`
    } else {
        res.innerHTML += `NULO`
    }
}