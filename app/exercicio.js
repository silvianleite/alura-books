let elementoValorDoCarrinho = document.querySelector(".valor__carrinho");

function exibirValorDoCarrinho(valorDoCarrinho) {
    elementoValorDoCarrinho.innerText = `R$ ${valorDoCarrinho.toFixed(2)}`;
}

function calcularValorTotalDoCarrinho(livros) {
    return livros.reduce((acc, livro) => acc+livro[1], 0);
}

let livrosNoCarrinho = [];

const livrosExibidos = document.querySelectorAll(".livro");

function adicionarAoCarrinho(livro, livros) {
        let nome = livro.getElementsByClassName("livro__titulo")[0].innerText;
        let preco = livro.getElementsByClassName("livro__preco")[0].innerText;

        let precoLimpo = parseFloat(preco.slice(2));

        livros.forEach(exemplar => {
            if (exemplar.titulo == nome) {
                estoque = exemplar.quantidade;
            }
        })

        if (estoque>0) {
            livrosNoCarrinho.push([nome, precoLimpo]);
        }

        elementoValorDoCarrinho.innerText = ``;

        exibirValorDoCarrinho(calcularValorTotalDoCarrinho(livrosNoCarrinho));
    }