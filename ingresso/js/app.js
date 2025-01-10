document.addEventListener('DOMContentLoaded', function () {
    function comprar() {
        let tipo = document.getElementById('tipo-ingresso');
        let qtd = parseInt(document.getElementById('qtd').value);

        if (tipo.value === 'pista') {
            comprarPista(qtd);
        } else if (tipo.value == 'superior') {
            comprarSuperior(qtd);
        } else {
            comprarInferior(qtd);
        }
    }

    function comprarPista(qtd) {
        let qtdPistaElement = document.getElementById('qtd-pista');
        let qtdPista = parseInt(qtdPistaElement.textContent);
        if (qtd > qtdPista) {
            alert('Quantidade indisponivel para tipo pista');
        } else {
            qtdPista = qtdPista - qtd;
            qtdPistaElement.textContent = qtdPista;
            alert('Compra realizada com sucesso!');
        }
    }

    function comprarSuperior(qtd) {
        let qtdSuperiorElement = document.getElementById('qtd-superior');
        let qtdSuperior = parseInt(qtdSuperiorElement.textContent);
        if (qtd > qtdSuperior) {
            alert('Quantidade indisponivel para tipo pista');
        } else {
            qtdSuperior = qtdSuperior - qtd;
            qtdSuperiorElement.textContent = qtdSuperior;
            alert('Compra realizada com sucesso!');
        }
    }

    function comprarInferior(qtd) {
        let qtdInferiorElement = document.getElementById('qtd-inferior');
        let qtdInferior = parseInt(qtdInferiorElement.textContent);
        if (qtd > qtdInferior) {
            alert('Quantidade indisponivel para tipo pista');
        } else {
            qtdInferior = qtdInferior - qtd;
            qtdInferiorElement.textContent = qtdInferior;
            alert('Compra realizada com sucesso!');
        }
    }

    window.comprar = comprar;
});
