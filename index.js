const catalogo = [{
        id: 1,
        nome: 'Casaco Branco',
        marca: 'Zara',
        preco: 70,
        nomeArquivoImagem: 'product-1.jpg'
},{
        id: 2,
        nome: 'Casaco Branco',
        marca: 'Zara',
        preco: 70,
        nomeArquivoImagem: 'product-1.jpg'
},{
        id: 3,
        nome: 'Casaco Branco',
        marca: 'Zara',
        preco: 70,
        nomeArquivoImagem: 'product-1.jpg'
},{
        id: 4,
        nome: 'Casaco Branco',
        marca: 'Zara',
        preco: 70,
        nomeArquivoImagem: 'product-1.jpg'
},{
        id: 5,
        nome: 'Casaco Branco',
        marca: 'Zara',
        preco: 70,
        nomeArquivoImagem: 'product-1.jpg'
}]

for( const produtoCatalogo of catalogo){
    const cartaoProduto = `<div id="card-produto-1">
<img
    src="./assets/img/${produtoCatalogo.nomeArquivoImagem}"
    alt="Produto 1 do Magazine Hashtag."
    style="height: 300px"
    />
<p>${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}</p>
<p>${produtoCatalogo.preco}</p>
<button>Adicionar</Button>
</div>

`
document.getElementById('container-produto').innerHTML +=cartaoProduto
}
