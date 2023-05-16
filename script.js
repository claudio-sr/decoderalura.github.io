const inputArea = document.querySelector('.input');
const textoDescri = document.querySelector('.area-texto');

function btnEncriptar() {
    const texto = encriptar(inputArea.value);
    textoDescri.innerHTML = texto;
    inputArea.value = ""; 
    mudarBackground();
}

function mudarBackground() {
    let texto = document.getElementById('textoArea');
    texto.style.background = '#fff';
}

function encriptar(textoEncriptado) {
    let matrizChaves = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'obter'], ['u', 'ufat']]
    textoEncriptado = textoEncriptado.toLowerCase();

    for(let i = 0; i < matrizChaves.length; i++) {
        if(textoEncriptado.includes(matrizChaves[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(matrizChaves[i][0], matrizChaves[i][1])
        }
    }

    return textoEncriptado;
}

function btnDesencriptar() {
    const textoD = desencriptar(inputArea.value);
    textoDescri.innerHTML = textoD;
    inputArea.value = ""; 
}

function desencriptar(textoDesecriptado) {
    let matrizChaves = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'obter'], ['u', 'ufat']]
    textoDesecriptado = textoDesecriptado.toLowerCase();

    for(let i = 0; i < matrizChaves.length; i++) {
        if(textoDesecriptado.includes(matrizChaves[i][1])) {
            textoDesecriptado = textoDesecriptado.replaceAll(matrizChaves[i][1], matrizChaves[i][0])
        }
    }

    return textoDesecriptado;
}

let btnCopiar = document.querySelector('#btn-copiar');

btnCopiar.addEventListener('click', function(e){
    let areaCopiar = document.querySelector('#textoArea');
    areaCopiar.select();
    document.execCommand('copy');
})