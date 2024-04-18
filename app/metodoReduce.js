function calcularValorTotalDeLivrosDisponiveis(livros) {
    livrosDisponiveis = livros.filter(livro => livro.quantidade > 0);
    return livrosDisponiveis.reduce((acc, livro) => acc+livro.preco, 0).toFixed(2);
}