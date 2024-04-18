const elementoParaInserirLivros = document.getElementById("livros");

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = '';
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade>0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        elementoParaInserirLivros.innerHTML += `    
            <div class="livro">
            <img class="${disponibilidade}" src=${livro.imagem} alt=${livro.alt}/>
            <h2 class="livro__titulo">
              ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
              <span class="tag">${livro.categoria}</span>
            </div>
            <button onclick="adicionarAoCarrinho(this.parentElement, livros)" class="botao__comprar">Adicionar ao carrinho</button>
            </div>
            `
    })
}

//function verificaDisponibilidadeDoLivro(livro) {
//     if (livro.quantidade > 0) {
//         return 'livro__imagens';
//     } else {
//         return 'livros__imagens indisponivel';
//     }
//}