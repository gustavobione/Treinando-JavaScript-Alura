function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`

    while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de,ate);
    }
}

function obterNumeroAleatorio(min, max) {
    const minNumero = Math.ceil(min);
    const maxNumero = Math.floor(max);
    let resultado = Math.floor(Math.random() * (maxNumero - minNumero + 1)+ minNumero) ;
    return resultado;

}


