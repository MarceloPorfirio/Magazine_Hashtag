const produto1 = {
    nome: 'Casaco Branco',
    marca: 'Zara',
    preco: 70,
    nomeArquivoImagem: 'product-1.jpg'
}

const cartaoProduto = `<div id="card-produto-1">
<img
    src="./assets/img/${produto1.nomeArquivoImagem}"
    alt="Produto 1 do Magazine Hashtag."
    style="height: 300px"
    />
<p>${produto1.marca}</p>
<p>${produto1.nome}</p>
<p>${produto1.preco}</p>
<button>Adicionar</Button>
</div>

`
document.getElementById('container-produto').innerHTML +=cartaoProduto