var img = document.getElementById('imagem')
var txtn = document.querySelector('input#txtnum')
var res = document.querySelector('div#res')

function mercurio() {
    var peso = Number(txtnum.value)
    peso *= 0.37
    res.innerHTML = `No planeta Mercúrio seu peso seria ${peso}Kg`
    img.src = 'img/mercurio.png'
}
function venus() {
    var peso = Number(txtnum.value)
    peso *= 0.88
    res.innerHTML = `No planeta Mercúrio seu peso seria ${peso}Kg`
    img.src = 'img/venus.png'
}
function marte() {
    var peso = Number(txtnum.value)
    peso *= 0.38
    res.innerHTML = `No planeta Mercúrio seu peso seria ${peso}Kg`
    img.src = 'img/marte.webp'
}
function jupiter() {
    var peso = Number(txtnum.value)
    peso *= 2.64
    res.innerHTML = `No planeta Mercúrio seu peso seria ${peso}Kg`
    document.body.style.background = '#515154'
    img.src = 'img/jupiter.webp'
}
function saturno() {
    var peso = Number(txtnum.value)
    peso *= 1.15
    res.innerHTML = `No planeta Mercúrio seu peso seria ${peso}Kg`
    img.src = 'img/saturno2.png'
    //img.style.width = '500px'
    //img.style.width = 'auto'

}
function urano() {
    var peso = Number(txtnum.value)
    peso *= 1.17
    res.innerHTML = `
    No planeta Mercúrio seu peso seria ${peso}Kg`
    img.src = 'img/urano.png'
}
