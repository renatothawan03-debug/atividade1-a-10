const produto = [
    {nome: 'teclado', preco: 120 },
    {nome: 'monitor', preco: 900 },
    {nome: 'mouse', preco: 80 },
    {nome: 'headset', preco: 250 },
    {nome: 'webcan', preco: 300 }
];
function filtrarProdutos(produtos, precoMaximo) {
    return produtos.filter(produtos => produtos.preco <= precoMaximo);
}
let precoMaximo = Number (prompt('digite o preço máximo'));
let resultado = filtrarProdutos (produto,precoMaximo);
console.log ('produtos encontrados'
);
console.log(resultado)