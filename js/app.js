
function comprar() {
    //recuperar a lista do tipo de ingresso: id="tipo-ingresso"
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    
    //recuperar a quantidade: input type="number" id="qtd"
    let quantidadeComprada = parseInt(document.getElementById('qtd').value);

    //recuperar o estoque por tipo
    let estoquePista = parseInt(document.getElementById('qtd-pista').textContent);
    let estoqueSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let estoqueInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        
    //diminuir a qtde comprada do estoque por tipo
    if (tipoIngresso == 'pista' && quantidadeComprada <= estoquePista && quantidadeComprada >= 0) {
            estoquePista = estoquePista - quantidadeComprada;
            document.getElementById('qtd-pista').textContent = estoquePista;
            limparQuantidade()
            mensagemSucessoCompra()
        } else if (tipoIngresso == 'superior' && quantidadeComprada <= estoqueSuperior && quantidadeComprada >= 0) {
                estoqueSuperior = estoqueSuperior - quantidadeComprada;
                document.getElementById('qtd-superior').textContent = estoqueSuperior;
                limparQuantidade()
                mensagemSucessoCompra()
            } else if (tipoIngresso == 'inferior' && quantidadeComprada <= estoqueInferior && quantidadeComprada >= 0) {
                estoqueInferior = estoqueInferior - quantidadeComprada;
                document.getElementById('qtd-inferior').textContent = estoqueInferior;
                limparQuantidade()
                mensagemSucessoCompra()
             } else {
                    if (quantidadeComprada != 0) {
                        alert(`Esta quantidade de ingressos para a ${tipoIngresso} não está disponível`);
                        limparQuantidade();
                    } else {
                        alert('Digite a quantidade de ingressos a comprar');                        
                    }                    
    }
}

function limparQuantidade() {
    document.getElementById('qtd').value = '';
    document.getElementById('qtd').focus();
}

function mensagemSucessoCompra() {
    alert(`Ingressos comprados com sucesso... Boa diversão! `);
    document.getElementById('qtd').focus();
}