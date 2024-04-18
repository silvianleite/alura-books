let livros = [];

const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscaLivrosDaApi();

async function getBuscaLivrosDaApi() {
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livros);
}

const elementoComValorTotalDeLivrosDisponveis = document.getElementById('valor_total_livros_disponiveis');

elementoComValorTotalDeLivrosDisponveis.innerHTML = ``;
